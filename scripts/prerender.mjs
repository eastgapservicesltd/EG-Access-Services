// Build-time prerender: renders every route to static HTML so crawlers (including AI bots that
// don't run JavaScript) get real content, per-page titles/meta and structured data.
// Also writes sitemap.xml and 404.html (robots.txt is static, in public/). Runs after `vite build` + the SSR build.
import { readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, site, categories, services, servicePath } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);
const template = await readFile(join(dist, "index.html"), "utf8");

const routes = [
  "/",
  ...Object.values(categories).map((c) => c.path),
  ...services.map(servicePath),
  "/about",
  "/service-areas",
  "/faq",
  "/contact",
];

// React 19 emits hoisted <title>/<meta>/<link> at the start of the output; move them into <head>.
const HOISTED = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)+/;

function page(url) {
  const html = render(url);
  const head = html.match(HOISTED)?.[0] ?? "";
  if (!head.includes("<title>")) throw new Error(`No <title> rendered for ${url}`);
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html.slice(head.length));
}

// With cleanUrls on Vercel, /about is served from about.html.
const fileFor = (url) => (url === "/" ? "index.html" : `${url.slice(1)}.html`);

for (const url of routes) {
  const file = join(dist, fileFor(url));
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(url));
}
await writeFile(join(dist, "404.html"), page("/__not-found__"));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${site.url}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages + 404.html and sitemap.xml`);
