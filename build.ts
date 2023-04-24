import * as esbuild from "https://deno.land/x/esbuild@v0.17.17/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";

const ctx = await esbuild.context({
  bundle: true,
  outfile: "dist/palana.js",
  entryPoints: ["./src/index.ts"],
  plugins: [denoPlugin({
    importMapURL: new URL("./import_map.json",import.meta.url)
  })],
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
});

switch(Deno.args[0]){
  case "watch":
    await ctx.watch();
    break;
  default:
    break;
}