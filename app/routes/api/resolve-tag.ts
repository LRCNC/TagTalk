import { json } from "@remix-run/node";
import { resolveTagMessage } from "~/utils/tagResolver";

export async function action({ request }) {
  const { tags } = await request.json();
  const result = await resolveTagMessage(tags);
  return json({ message: result });
}
