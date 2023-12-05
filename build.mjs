import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  entryPoints: ['src/*.tsx'],
  bundle: true,
  jsx: 'automatic',
  jsxDev: true,
  outdir: 'dist',
})

await ctx.watch()

await ctx.serve({
  port: 8001,
})


