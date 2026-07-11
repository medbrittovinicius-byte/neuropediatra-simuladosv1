import { getStore } from "@netlify/blobs";

const VALID_USERS = ["Vinicius", "Leonardo", "Ana Teresa"];

export default async (req, context) => {
  const url = new URL(req.url);
  const user = url.searchParams.get("user");
  const date = url.searchParams.get("date");

  if (!VALID_USERS.includes(user) || typeof date !== "string" || !date) {
    return new Response(JSON.stringify({ error: "invalid params" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const store = getStore("quiz-attempts");
  const { blobs } = await store.list({ prefix: `${user}/${date}_` });

  if (!blobs.length) {
    return new Response(JSON.stringify({ found: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // pega a tentativa mais recente (ultima submetida) para esse usuario+data
  blobs.sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
  const lastKey = blobs[blobs.length - 1].key;
  const record = await store.get(lastKey, { type: "json" });

  return new Response(JSON.stringify({ found: true, record }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/api/get-attempt",
};
