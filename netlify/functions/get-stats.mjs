import { getStore } from "@netlify/blobs";

const USERS = ["Vinicius", "Leonardo", "Ana Teresa"];
const MAX_ERROS_DETALHADOS = 200;

// Deduplica por data: mantem apenas a tentativa MAIS RECENTE (maior timestamp)
// de cada (user, date). Evita contagem multiplicada quando o mesmo simulado
// foi enviado mais de uma vez (refresh/reenvio geram blobs com timestamps diferentes).
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

export default async (req, context) => {
  const store = getStore("quiz-attempts");
  const { blobs } = await store.list();

  const records = [];
  for (const b of blobs) {
    const data = await store.get(b.key, { type: "json" });
    if (data) records.push(data);
  }

  const result = {};

  for (const user of USERS) {
    const userRecords = dedupLatestPerDate(records.filter((r) => r.user === user))
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    const temaStats = {};
    const dificuldadeStats = {};
    const errosDetalhados = [];
    let totalQ = 0;
    let totalCorrect = 0;

    for (const rec of userRecords) {
      totalQ += rec.total;
      totalCorrect += rec.correct;
      for (const a of rec.answers || []) {
        const k = a.tema;
        if (!temaStats[k]) {
          temaStats[k] = { tema: a.tema, tier: a.tier, total: 0, erros: 0 };
        }
        temaStats[k].total++;
        if (!a.acertou) temaStats[k].erros++;

        const dif = a.dificuldade || "desconhecida";
        if (!dificuldadeStats[dif]) {
          dificuldadeStats[dif] = { dificuldade: dif, total: 0, erros: 0 };
        }
        dificuldadeStats[dif].total++;
        if (!a.acertou) dificuldadeStats[dif].erros++;

        if (!a.acertou) {
          errosDetalhados.push({
            date: rec.date,
            num: a.num,
            tema: a.tema,
            tier: a.tier,
            dificuldade: a.dificuldade || null,
            correta: a.correta,
            escolhida: a.escolhida,
          });
        }
      }
    }

    const rankingFragilidades = Object.values(temaStats)
      .map((t) => ({ ...t, taxaErro: t.total > 0 ? t.erros / t.total : 0 }))
      .filter((t) => t.total >= 2)
      .sort((a, b) => b.taxaErro - a.taxaErro || b.erros - a.erros);

    const ordemDificuldade = { facil: 0, moderada: 1, dificil: 2, desconhecida: 3 };
    const rankingDificuldade = Object.values(dificuldadeStats)
      .map((d) => ({ ...d, taxaErro: d.total > 0 ? d.erros / d.total : 0 }))
      .sort(
        (a, b) =>
          (ordemDificuldade[a.dificuldade] ?? 9) - (ordemDificuldade[b.dificuldade] ?? 9)
      );

    // mais recentes primeiro, limitado para nao inflar demais o payload
    errosDetalhados.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.num - b.num));

    result[user] = {
      simulados: userRecords.length,
      totalQuestoes: totalQ,
      totalAcertos: totalCorrect,
      percentualGeral: totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : null,
      rankingFragilidades,
      rankingDificuldade,
      errosDetalhados: errosDetalhados.slice(0, MAX_ERROS_DETALHADOS),
      historico: userRecords.map((r) => ({
        date: r.date,
        total: r.total,
        correct: r.correct,
        pct: r.total > 0 ? Math.round((r.correct / r.total) * 100) : null,
      })),
    };
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/api/stats",
};
