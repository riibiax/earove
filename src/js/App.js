import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { findPage, homeRoute } from "./pageRoutes";
import { basePath } from "./sitePaths";
import "bootstrap/dist/css/bootstrap.min.css";

// Progressive enhancement: static pages remain readable without JavaScript.
document.documentElement.classList.add("portfolio-js");

async function start() {
  const { pathname, hash, search, origin } = window.location;
  const page = findPage(pathname.slice(basePath.length - 1));

  // Old hash links still open the same project or homepage section.
  if (page === homeRoute && hash.startsWith("#/")) {
    const oldUrl = new URL(`${origin}${hash.slice(1)}`);
    const destination = findPage(oldUrl.pathname);
    if (destination) {
      window.location.replace(`${basePath}${destination.path.slice(1)}${oldUrl.search || search}${oldUrl.hash}`);
      return;
    }
  }

  if (!page) return;
  const { default: Page } = await page.load();
  createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={basePath}>
      <Page />
    </BrowserRouter>,
  );
}

start();
