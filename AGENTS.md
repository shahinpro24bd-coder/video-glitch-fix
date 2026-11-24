<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->
- Site photos and videos are Lovable asset pointers in src/assets (*.asset.json); import the pointer and use .url, so media loads from this project's CDN rather than from public/.
- Active site photos and videos are mirrored in public/media/ and builds outside Lovable (e.g. Vercel) rewrite active *.asset.json urls to /media/<original_filename> via vite.config.ts (or MEDIA_ORIGIN if set), because /__l5e paths only work on Lovable and id-preview--* URLs return 401 publicly; whenever adding or replacing an active src/assets/*.asset.json, update its matching file in public/media/.
- Every site video goes through SiteVideo (src/components/site/SiteVideo.tsx) with a first-frame poster: the hero is `priority` (autoplays at once), small clips right below it are `eager` (buffer alongside it), the rest render sources immediately but stay at metadata until the hero can play, then buffer fully and play near the viewport, so the hero gets bandwidth first and every clip is already running when reached; never gate sources on scroll. Old media pointers live in src/assets/legacy (kept for saved admin values, excluded from image warm-up).
- Scroll entrances (useInView, Reveal, About) share REVEAL_MARGIN from Sections.tsx and start before a section enters the viewport; entrance delays are scaled by the --rv-pace CSS variable, so tune speed there rather than per element.
- The site reads its content and admin data from the existing QMEP backend configured in .env (public URL + publishable key only); never put secret keys there.
- Site styling is Bootstrap template CSS in public/vendor plus prefixed section classes in src/styles.css (e.g. .hx-* for the home hero); follow that pattern instead of Tailwind utilities so sections stay consistent.
- Animated home sections share the `.mx` layer (useInView adds `is-in`; `.mx-rv` children reveal with `--d` delay; Kicker/SplitTitle in Sections.tsx); put `.mx-rv` on a wrapper, not on elements with their own transitions, so hover effects keep working.
- The site navbar (Navbar in Layout.tsx, `.qn-*` in styles.css) is a floating glass pill; its sliding hover/active highlight is positioned from JS via CSS vars on `.qn-links` (--qn-x/--qn-w/--qn-o), so keep links as direct `.qn-link` children when editing it.
- Keep the shared Process section as a semantic ordered timeline with CSS-only motion and reduced-motion overrides, so both home and services stay consistent without animation timers.
- Inner pages and page banners animate through `Reveal` (src/components/site/Reveal.tsx): it adds `rx is-in` on scroll and `.rx-*` children play keyframe entrances with `backwards` fill and a `--d` delay (`dl()`), so hover styles keep working after the entrance; never nest Reveals, and keep the last element on a page inside a taller Reveal so it can trigger.
- The footer is intentionally calm: a dimmed slow background clip (FooterVideo, plays only on screen, hidden for reduced motion) plus one soft `.ft-in` fade per block inside Reveal; do not add looping or per-item footer animations.
- The backend's site_content may hold an unedited copy of old built-in text; cms.ts savedFaqs/savedTexts skip those stale entries (site and admin), so update their stale lists when built-in defaults are rewritten.
- Home About scroll motion is driven by --abp/--abd CSS vars written on scroll in HomeContent and applied via the individual `translate` property, so it stacks with reveal/hover transforms; keep new scroll effects on those vars.
- Looping decorative animations animate only transform/opacity (no left/top, background-position, @property gradient spins or large blur filters), and SiteLayout pauses infinite animations in off-screen sections via the Web Animations API, so scrolling stays smooth.

- Keep the anniversary color roles in the opening :root block of src/styles.css and reference those variables from imported template styles, so branding stays consistent across public pages.
