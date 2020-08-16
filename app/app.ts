import { serve } from "https://deno.land/std@0.65.0/http/server.ts";

const s = serve({ port: 8888 });

for await (const req of s) {
  req.respond({ body: "<p>Hello World</p>" });
}