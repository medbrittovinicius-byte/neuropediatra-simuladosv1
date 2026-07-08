import { getStore } from "@netlify/blobs";

const USERS = ["Vinicius", "Leonardo"];

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
    const userRecords = records
      .filter((r) => r.user === user)
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    const temaStats = {};
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
      }
    }

    const rankingFragilidades = Object.values(temaStats)
      .map((t) => ({ ...t, taxaErro: t.total > 0 ? t.erros / t.total : 0 }))
      .filter((t) => t.total >= 2)
      .sort((a, b) => b.taxaErro - a.taxaErro || b.erros - a.erros);

    result[user] = {
      simulados: userRecords.length,
      totalQuestoes: totalQ,
      totalAcertos: totalCorrect,
      percentualGeral: totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : null,
      rankingFragilidades,
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
