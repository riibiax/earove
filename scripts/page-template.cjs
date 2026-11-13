const escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (text) => text.replace(/[&<>"']/g, (character) => escapes[character]);

function renderDocument(page, siteName, publicPath, tags) {
  const [title, description, url, imageUrl, imageAlt, type] = [
    page.title, page.description, page.url, page.imageUrl, page.imageAlt, page.type,
  ].map(escapeHtml);
  const schema = JSON.stringify(page.schema).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  ${page.bodyClass === "case-study-active" ? `<script>
    // Set this before loading the app so native restoration cannot override it.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.addEventListener("pageshow", function () {
      if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  </script>` : ""}
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="max-image-preview:large">
  <meta name="theme-color" content="#ffffff">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="${escapeHtml(siteName)}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:type" content="${page.imageUrl.endsWith(".png") ? "image/png" : "image/jpeg"}">
  ${page.imageWidth && page.imageHeight ? `<meta property="og:image:width" content="${page.imageWidth}">
  <meta property="og:image:height" content="${page.imageHeight}">` : ""}
  <meta property="og:image:alt" content="${imageAlt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">
  <meta name="twitter:image:alt" content="${imageAlt}">
  <script type="application/ld+json">${schema}</script>
  <link rel="icon" type="image/gif" href="${publicPath}favicon.gif">
  ${tags.headTags}
  <noscript><style>
    .home-archive[hidden] { display: block !important; }
    .home-archive-toggle, .case-image-status, .case-gallery-toolbar,
    .case-gallery-thumbnails, .tabak-player { display: none !important; }
  </style></noscript>
</head>
<body id="top" class="${page.bodyClass}">
  <div id="root">${page.markup}</div>
  ${tags.bodyTags}
</body>
</html>`;
}

function renderSitemap(urls) {
  const entries = urls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

module.exports = { renderDocument, renderSitemap };
