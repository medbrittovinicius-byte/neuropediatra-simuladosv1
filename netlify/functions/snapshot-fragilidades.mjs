import { gerarSnapshot } from "../lib/fragilidades.mjs";

/**
 * Funcao AGENDADA: roda todo dia as 09:00 UTC (06:00 BRT), antes da geracao do
 * simulado diario. Le as tentativas no Netlify Blobs, agrega o ranking de
 * fragilidades por pessoa e commita `public/quizzes/fragilidades.json` no
 * repositorio do GitHub — a ponte que permite ao agente priorizar os temas em
 * que cada um mais erra (ele le o repo, mas nao alcanca o backend do site).
 *
 * Requer a variavel de ambiente GITHUB_TOKEN configurada no painel do Netlify.
 */
export default async () => {
  const res = await gerarSnapshot();
  return new Response(JSON.stringify(res, null, 1), {
    status: res.commit.ok ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  schedule: "0 9 * * *",
};
