// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

// Site media lives on Lovable's CDN behind the relative path /__l5e/assets-v1/…, which only
// Lovable hosting serves. When the site is built anywhere else (Vercel, Netlify, own server),
// rewrite each *.asset.json pointer's url to an absolute URL on the Lovable host so photos and
// videos still load. Override the host with MEDIA_ORIGIN if needed.
const MEDIA_ORIGIN = (process.env["MEDIA_ORIGIN"] || "https://id-preview--9237f315-89c9-41e2-90f2-c94a21983e05.lovable.app").replace(/\/+$/, "");
const onLovable = process.env["LOVABLE_SANDBOX"] === "1" || !!process.env["SANDBOX"];

function absoluteMediaUrls(): Plugin {
  return {
    name: "qmep:absolute-media-urls",
    enforce: "pre",
    transform(code, id) {
      if (onLovable || !id.split("?")[0]!.endsWith(".asset.json")) return null;
      const data = JSON.parse(code) as { url?: string };
      if (typeof data.url === "string" && data.url.startsWith("/")) data.url = MEDIA_ORIGIN + data.url;
      return { code: JSON.stringify(data), map: null };
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [absoluteMediaUrls()],
  },
});
