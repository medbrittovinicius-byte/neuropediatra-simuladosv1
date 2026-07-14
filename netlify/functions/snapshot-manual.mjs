import { gerarSnapshot } from "../lib/fragilidades.mjs";

/**
 * Gatilho MANUAL do mesmo snapshot (GET /api/snapshot-fragilidades), util para
 * testar sem esperar o horario agendado. Nao expoe nada novo: o conteudo gerado
 * e o mesmo ja disponivel publicamente em /api/stats.
 */
export default async () => {
  const res = await gerarSnapshot();
  return new Response(JSON.stringify(res, null, 1), {
    status: res.commit.ok ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/api/snapshot-fragilidades",
};
