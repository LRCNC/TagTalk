import { json, LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { getAllTagMessages, deleteTagMessage } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  const messages = await getAllTagMessages();
  return json(messages);
};

export default function AdminPage() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Tag Messages</h1>
      <ul>
        {data.map(msg => (
          <li key={msg.id}>
            {msg.tag}: {msg.message}
            <Form method="post">
              <input type="hidden" name="id" value={msg.id} />
              <button type="submit">Delete</button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
};
