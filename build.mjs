import * as esbuild from 'esbuild'
import http from 'node:http'
import httpProxy from 'http-proxy';

let ctx = await esbuild.context({
  entryPoints: ['src/*.tsx'],
  bundle: true,
  jsx: 'automatic',
  jsxDev: true,
  outdir: 'dist',
  banner: {
    js: "(() => { new EventSource('http://localhost:8001/esbuild').addEventListener('change', () => location.reload()); })();",
  },
})

let { host, port } = await ctx.serve({ servedir: '.', port: 8001 })
await ctx.watch()
