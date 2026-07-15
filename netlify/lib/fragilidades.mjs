import { getStore } from "@netlify/blobs";

/**
 * Funcao agendada: roda todo dia as 09:00 UTC (06:00 BRT), antes da geracao
 * do simulado diario. Le todas as tentativas registradas no Netlify Blobs,
 * agrega o ranking de fragilidades por pessoa e grava o resultado como
 * `public/quizzes/fragilidades.json` no repositorio do GitHub.
 *
 * Motivo: o agente que gera o simulado diario tem acesso ao repositorio (git),
 * mas nao ao backend do site. Commitar o snapshot no repo e a ponte que permite
 * priorizar automaticamente os temas em que cada pessoa mais erra.
 *
 * Variaveis de ambiente necessarias (configurar no painel do Netlify):
 *   GITHUB_TOKEN  -> PAT com permissao de escrita de conteudo neste repositorio
 *   GITHUB_REPO   -> opcional; padrao "medbrittovinicius-byte/neuropediatra-simuladosv1"
 */

const USERS = ["Vinicius", "Leonardo", "Ana Teresa"];
const REPO = process.env.GITHUB_REPO || "medbrittovinicius-byte/neuropediatra-simuladosv1";
const PATH = "public/quizzes/fragilidades.json";
const MIN_QUESTOES_TEMA = 2;

// Deduplica por data: mantem apenas a tentativa MAIS RECENTE de cada (user, date),
// para nao multiplicar a contagem quando o mesmo simulado foi enviado varias vezes.
function dedupLatestPerDate(recs) {
  const byDate = new Map();
  for (const r of recs) {
    const prev = byDate.get(r.date);
    if (!prev || String(r.timestamp || "") > String(prev.timestamp || "")) {
      byDate.set(r.date, r);
    }
  }
  return Array.from(byDate.values());
}

function agregar(records) {
  const out = {};
  for (const user of USERS) {
    const userRecords = dedupLatestPerDate(records.filter((r) => r.user === user))
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    const temaStats = {};
    const difStats = {};
    let totalQ = 0;
    let totalCorrect = 0;

    for (const rec of userRecords) {
      totalQ += rec.total || 0;
      totalCorrect += rec.correct || 0;
      for (const a of rec.answers || []) {
        const tema = String(a.tema || "desconhecido").split("[")[0].trim();
        if (!temaStats[tema]) {
          temaStats[tema] = { tema, tier: a.tier || null, total: 0, erros: 0, ultimoErro: null };
        }
        temaStats[tema].total++;
        if (!a.acertou) {
          temaStats[tema].erros++;
          temaStats[tema].ultimoErro = rec.date;
        }
        const dif = a.dificuldade || "desconhecida";
        if (!difStats[dif]) difStats[dif] = { dificuldade: dif, total: 0, erros: 0 };
        difStats[dif].total++;
        if (!a.acertou) difStats[dif].erros++;
      }
    }

    const ranking = Object.values(temaStats)
      .filter((t) => t.total >= MIN_QUESTOES_TEMA)
      .map((t) => ({ ...t, taxaErro: Math.round((t.erros / t.total) * 100) }))
      .sort((a, b) => b.taxaErro - a.taxaErro || b.erros - a.erros);

    out[user] = {
      simulados: userRecords.length,
      totalQuestoes: totalQ,
      percentualGeral: totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : null,
      temasFracos: ranking.filter((t) => t.erros > 0).slice(0, 8),
      rankingCompleto: ranking,
      porDificuldade: Object.values(difStats).map((d) => ({
        ...d,
        taxaErro: d.total > 0 ? Math.round((d.erros / d.total) * 100) : 0,
      })),
    };
  }
  return out;
}

async function commitNoGitHub(conteudo) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return { ok: false, motivo: "GITHUB_TOKEN nao configurado no Netlify" };

  const url = `https://api.github.com/repos/${REPO}/contents/${PATH}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "User-Agent": "neuropediatria-snapshot",
  };

  let sha = null;
  let anterior = null;
  const get = await fetch(`${url}?ref=main`, { headers });
  if (get.status === 200) {
    const j = await get.json();
    sha = j.sha;
    try {
      anterior = Buffer.from(j.content, "base64").toString("utf-8");
    } catch (e) {}
  } else if (get.status !== 404) {
    return { ok: false, motivo: `GET falhou: ${get.status}` };
  }

  // ignora o campo geradoEm na comparacao, para nao commitar quando nada mudou
  const semData = (s) => s.replace(/"geradoEm":[^,]+,/, "");
  if (anterior && semData(anterior).trim() === semData(conteudo).trim()) {
    return { ok: true, mudou: false };
  }

  const put = await fetch(url, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: `Snapshot de fragilidades ${new Date().toISOString().slice(0, 10)} [skip ci]`,
      content: Buffer.from(conteudo, "utf-8").toString("base64"),
      branch: "main",
      ...(sha ? { sha } : {}),
    }),
  });

  if (!put.ok) {
    const txt = await put.text();
    return { ok: false, motivo: `PUT falhou: ${put.status} ${txt.slice(0, 200)}` };
  }
  return { ok: true, mudou: true };
}


export async function gerarSnapshot() {
  const store = getStore("quiz-attempts");
  const { blobs } = await store.list();
  const records = [];
  for (const b of blobs) {
    const data = await store.get(b.key, { type: "json" });
    if (data) records.push(data);
  }
  const snapshot = {
    geradoEm: new Date().toISOString(),
    tentativasLidas: records.length,
    usuarios: agregar(records),
  };
  const commit = await commitNoGitHub(JSON.stringify(snapshot, null, 1));
  return { tentativas: records.length, commit };
}
