import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";

// Used only by scripts/prerender.mjs at build time.
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}

export { site } from "./data/site";
export { categories, services, servicePath } from "./data/services";
