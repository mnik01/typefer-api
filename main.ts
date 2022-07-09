import { serve } from "https://deno.land/std/http/mod.ts";
import { parseUrlParams } from './parseUrlParams.ts';
import { z } from "https://deno.land/x/zod/mod.ts";

const urlSchema = z.object({
  schema: z.string(),
});


function reqHandler(req: Request) {
  const urlParams: Record<string, string | number | boolean> = {};
  for (const p of new URL(req.url).searchParams) {
    urlParams[p[0]] = parseUrlParams(p[1]);
  }

  try {
    const { schema } = urlSchema.parse(urlParams);

    console.log(JSON.parse(schema));


    return new Response()
  } catch (error) {
    console.error(error);
    return new Response('Oops. Some error occured. Probably invalid schema provided', { status: 500 });
  }
}
serve(reqHandler, { port: 8000 });
