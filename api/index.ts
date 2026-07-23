// @ts-ignore
import server from "../dist/server/server.js";


export default function(request: Request) {
  let url = request.url;
  if (url.startsWith('/')) {
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'localhost';
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    url = `${protocol}://${host}${url}`;
  }
  const absoluteRequest = new Request(url, request);
  return server.fetch(absoluteRequest, process.env, {});
}
