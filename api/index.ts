// @ts-ignore
import server from "../dist/server/server.js";

export default async function (req, res) {
  try {
    // 1. Create Web Request from Node req
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const init = {
      method: req.method,
      headers: req.headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      init.body = Buffer.concat(chunks);
    }

    const request = new Request(url.href, init);

    // 2. Call the SSR handler
    const response = await server.fetch(request, process.env, {});

    // 3. Write Web Response back to Node res
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          res.end();
          break;
        }
        res.write(value);
      }
    } else {
      res.end();
    }
  } catch (err) {
    console.error("SSR Error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
