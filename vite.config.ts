// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

// Site media lives on Lovable's CDN behind /__l5e/assets-v1/… (which only Lovable hosting serves;
// preview hosts return 401 to public visitors). Outside Lovable (Vercel, Netlify, own server),
// rewrite each active *.asset.json pointer to the matching static file in public/media/ (or
// prepend MEDIA_ORIGIN when explicitly set).
const MEDIA_ORIGIN = (process.env["MEDIA_ORIGIN"] || "").replace(/\/+$/, "");
const onLovable =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["SANDBOX"] ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];
const publicMediaDir = join(process.cwd(), "public", "media");

export function resolveExternalMediaUrl(
  data: { url?: string; original_filename?: string },
  id: string,
  opts: { onLovable?: boolean; mediaOrigin?: string; hasLocalMedia?: (name: string) => boolean } = {},
): string | undefined {
  if (opts.onLovable ?? onLovable) return data.url;
  const cleanId = id.split("?")[0] ?? "";
  if (!cleanId.endsWith(".asset.json") || cleanId.includes("/legacy/") || cleanId.includes("\\legacy\\")) {
    return data.url;
  }
  const origin = (opts.mediaOrigin ?? MEDIA_ORIGIN).replace(/\/+$/, "");
  if (origin && typeof data.url === "string" && data.url.startsWith("/")) {
    return origin + data.url;
  }
  const filename = data.original_filename;
  const hasLocal = opts.hasLocalMedia ?? ((name: string) => existsSync(join(publicMediaDir, name)));
  if (typeof filename === "string" && filename && hasLocal(filename)) {
    return `/media/${filename}`;
  }
  return data.url;
}

function externalMediaUrls(): Plugin {
  return {
    name: "qmep:absolute-media-urls",
    enforce: "pre",
    transform(code, id) {
      if (onLovable || !(id.split("?")[0] ?? "").endsWith(".asset.json")) return null;
      const data = JSON.parse(code) as { url?: string; original_filename?: string };
      const nextUrl = resolveExternalMediaUrl(data, id);
      if (!nextUrl || nextUrl === data.url) return null;
      data.url = nextUrl;
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
    plugins: [externalMediaUrls()],
  },
});
