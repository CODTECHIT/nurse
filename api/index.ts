// @ts-ignore
import server from "../dist/server/server.js";


export default function(request: Request) {
  return server.fetch(request, process.env, {});
}
