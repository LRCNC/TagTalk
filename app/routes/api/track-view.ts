import { json } from "@remix-run/node";

export async function action({ request }) {
  const data = await request.json();
  // Log view event (normally store in DB)
  console.log("View tracked for", data.tag);
  return json({ status: "ok" });
}
