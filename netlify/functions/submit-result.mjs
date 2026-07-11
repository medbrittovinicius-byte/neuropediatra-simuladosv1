import { getStore } from "@netlify/blobs";

const VALID_USERS = ["Vinicius", "Leonardo", "Ana Teresa"];

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { user, date, total, correct, answers } = body || {};

  if (!VALID_USERS.includes(user)) {
    return new Response(JSON.stringify({ error: "invalid user" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (
    typeof date !== "string" ||
    typeof total !== "number" ||
    typeof correct !== "number" ||
    !Array.isArray(answers)
  ) {
    return new Response(JSON.stringify({ error: "invalid payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const store = getStore("quiz-attempts");
  const timestamp = new Date().toISOString();
  const safeTs = timestamp.replace(/[:.]/g, "-");
  const key = `${user}/${date}_${safeTs}.json`;

  const record = { user, date, total, correct, timestamp, answers };

  await store.setJSON(key, record);

  return new Response(JSON.stringify({ ok: true, key }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/api/submit-result",
};
