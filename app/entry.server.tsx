import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import ReactDOMServer from "react-dom/server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "renderToStaticMarkup"
    : "renderToPipeableStream";

  return new Promise((resolve, reject) => {
    let didError = false;

    const { pipe } = ReactDOMServer[callbackName](
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady: () => {
          const body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html");
          resolve(new Response(body, {
            status: didError ? 500 : responseStatusCode,
            headers: responseHeaders
          }));
          pipe(body);
        },
        onError(error: unknown) {
          didError = true;
          console.error(error);
        }
      }
    );
  });
}
