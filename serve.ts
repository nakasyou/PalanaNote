import { serve } from 'https://deno.land/std@0.184.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v3.1.6/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()

app.get("/palana.js", async c=>{
  c.header('Content-Type', 'text/javascript')
  return c.body(await Deno.readTextFile("./dist/palana.js"));
})

app.use('/*', serveStatic({ root: './static' }))

serve(app.fetch)