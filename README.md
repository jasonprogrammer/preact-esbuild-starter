# Preact + Esbuild + Server rendered pages

If you want to build multiple JavaScript bundles for injecting into existing pages (e.g. pages that are server rendered), this can be done using esbuild.

## Running the example

1. `npm install`.
2. `npm run start` to start esbuild in serve and watch mode, with live reload.
3. Run something to serve the `index.html` in the current directory on port `8000`, e.g.:
`npx http-server -p 8000` or `python3 -m http.server`. This is just to mimic
another server serving the HTML.
3. Open [http://localhost:8000](http://localhost:8000) to view the index.html
file and the Preact components that are loaded into the page.

## License

MIT
