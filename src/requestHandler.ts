import AttributeRewriter from "./AttributeRewriter";
import setSecurityHeaders from "./setSecurityHeaders";

export default async (request: any): Promise<Response> => {
  const RESPONSE = await fetch(request);
  const NEW_HEADERS = new Headers(RESPONSE.headers);
  const NONCE = crypto.randomUUID();
  const BLOCKED_HEADERS = ["Public-Key-Pins", "X-Powered-By", "X-AspNet-Version"];
  const SECURITY_HEADERS = setSecurityHeaders(NONCE);

  if (!NEW_HEADERS.get("Content-Type")?.includes("text/html")) {
    return new Response(RESPONSE.body, {
      status: RESPONSE.status,
      statusText: RESPONSE.statusText,
      headers: NEW_HEADERS,
    });
  }

  Object.entries(SECURITY_HEADERS).forEach((entry: Array<string>) => {
    NEW_HEADERS.set(entry[0], entry[1]);
  });

  BLOCKED_HEADERS.forEach((name) => {
    NEW_HEADERS.delete(name);
  });

  return new HTMLRewriter().on("script", new AttributeRewriter(NONCE)).transform(
    new Response(RESPONSE.body, {
      status: RESPONSE.status,
      statusText: RESPONSE.statusText,
      headers: NEW_HEADERS,
    })
  );
};
