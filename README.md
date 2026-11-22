# QMEP Electromechanical LLC — Website + Admin Panel

Complete source for the QMEP website: all pages, all photos and videos, and the
working admin panel (content editing, quote requests, customers, AMC contracts,
jobs, invoices, reports).

Built with TanStack Start (React 19 + TypeScript + Vite), Bootstrap template
styling, and Supabase for content storage, sign-in and file uploads.

## Run it

```sh
bun install        # or: npm install
cp .env.example .env   # fill in your Supabase values (see below)
bun run dev        # http://localhost:8080
```

Build for production: `bun run build` (output in `dist/`).

## What is where

| Path | What it holds |
| --- | --- |
| `src/routes/` | Every page: home, about, services, service detail, AMC, projects, industries, contact, sign-in, admin |
| `src/routes/_authenticated/` | The admin panel (requires sign-in) |
| `src/routes/api/public/img.$.ts` | Serves uploaded images from storage |
| `src/components/site/` | Site sections, navbar, footer, page banners, reveal animations |
| `src/components/admin/` | Customers / AMC / jobs / invoices / reports screens |
| `src/lib/` | Site content, CMS read/write, editable text layer |
| `src/assets/*.asset.json` | **All photos and videos** (hero clips, service photos, logo), served from the Lovable CDN |
| `public/vendor/` | Bootstrap template CSS + FontAwesome + form library |
| `supabase/schema.sql` | Full database schema: tables, roles, permissions, storage bucket |

## Admin panel

Open `/auth` and sign in with the admin username and password. On a fresh
backend the default `admin` account is created on first sign-in (this needs
the service role key on the server).

From there you can edit company contact details, service cards and FAQs,
page text (click any text on the site while signed in), and manage quote
requests, customers, AMC contracts, jobs, invoices and reports.

Change the password in the admin panel's **Account** tab after first sign-in.

## Setting up your own backend

The site ships pointed at the existing QMEP backend, so it works as-is.
To run it against your own Supabase project instead:

1. Create a Supabase project.
2. Run `supabase/schema.sql` in its SQL editor (creates tables, the `admin`
   role, permissions and the `site-images` storage bucket).
3. Copy `.env.example` to `.env` and fill in `SUPABASE_URL`,
   `SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_SERVICE_ROLE_KEY`
   (plus the matching `VITE_` ones).
4. Restart the dev server. Sign in at `/auth` with `admin` / `admin123`.

The service role key is only used server-side (image upload and serving
uploaded images); it must never be put in browser code.

## Deploying

Any Node host works: `bun install && bun run build`, then serve `dist/`.
Set the same environment variables in the host's dashboard. The site also
runs with zero environment variables on static hosts, because the public
fallback credentials are built in — in that case image upload and uploaded
image serving need the service role key, so set it there.

## Tests

`bun test` runs the site's own checks (content, links, prices, forms).
