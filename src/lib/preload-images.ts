// Warms the browser cache with every bundled site image right after the first page loads,
// so later pages and sliders show their pictures instantly.
const pointers = import.meta.glob("../assets/*.{webp,jpg,jpeg,png}.asset.json", { eager: true, import: "default" }) as Record<string, { url: string }>;
const all = Object.values(pointers).map((p) => p.url);

export function preloadSiteImages(extra: string[] = []) {
  const urls = [...all, ...extra];
  const run = () => urls.forEach((u) => { const i = new Image(); i.decoding = "async"; i.src = u; });
  // Wait for the page (and the hero clip's first bytes) before warming the rest, so it never competes with the top of the page.
  const idle = () => (typeof window.requestIdleCallback === "function" ? window.requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 300));
  if (document.readyState === "complete") setTimeout(idle, 800);
  else window.addEventListener("load", () => setTimeout(idle, 800), { once: true });
}
