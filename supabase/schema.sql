-- QMEP Electromechanical LLC — website + admin panel backend
-- Run this once in a fresh Supabase project (SQL editor) to make the admin
-- panel fully working: content editing, quote requests, customers, AMC
-- contracts, jobs, invoices and reports.
--
-- After running it:
--   1. Create the storage bucket below (or run the storage block).
--   2. Put the project URL + publishable key in .env (see .env.example).
--   3. Add SUPABASE_SERVICE_ROLE_KEY to .env (needed for image upload and
--      for serving uploaded images through /api/public/img/...).
--   4. Sign in at /auth with username `admin`, password `admin123`
--      (the account is created automatically on first sign-in), then change
--      the password in the admin panel's Account tab.

-- ---------------------------------------------------------------- roles ----
create type public.app_role as enum ('admin');

create table if not exists public.user_roles (
  id      uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  role    public.app_role not null,
  unique (user_id, role)
);

-- Returns true when the user holds the role. SECURITY DEFINER so RLS
-- policies can call it without recursing into user_roles.
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;

grant execute on function public.has_role(uuid, public.app_role) to anon, authenticated;

-- ------------------------------------------------------- site content ------
-- key = 'company' | 'services' | 'faqs' | 'texts', value = the edited JSON.
create table if not exists public.site_content (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------- quote requests -------
create table if not exists public.quote_requests (
  id             uuid primary key default gen_random_uuid(),
  name           text not null,
  phone          text not null,
  email          text,
  company        text,
  location       text not null,
  service        text not null,
  property_type  text,
  details        text not null,
  status         text not null default 'new',
  notes          text,
  follow_up_date date,
  created_at     timestamptz not null default now()
);

-- ---------------------------------------------------------- customers ------
create table if not exists public.customers (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  company    text,
  phone      text,
  email      text,
  address    text,
  notes      text,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------ AMC contracts ------
create table if not exists public.amc_contracts (
  id             uuid primary key default gen_random_uuid(),
  customer_name  text not null,
  property       text,
  plan           text,
  status         text not null default 'active',
  start_date     date,
  end_date       date,
  visits_per_year integer,
  next_visit     date,
  amount         numeric,
  notes          text,
  created_at     timestamptz not null default now()
);

-- ---------------------------------------------------------------- jobs -----
create table if not exists public.jobs (
  id             uuid primary key default gen_random_uuid(),
  title          text not null,
  customer_name  text,
  location       text,
  service        text,
  technician     text,
  status         text not null default 'scheduled',
  priority       text not null default 'normal',
  scheduled_date date,
  scheduled_time text,
  notes          text,
  created_at     timestamptz not null default now()
);

-- ------------------------------------------------------------ invoices -----
create table if not exists public.invoices (
  id            uuid primary key default gen_random_uuid(),
  invoice_no    text not null,
  customer_name text not null,
  amount        numeric not null default 0,
  vat_percent   numeric not null default 5,
  status        text not null default 'unpaid',
  issue_date    date not null,
  due_date      date,
  paid_date     date,
  description   text,
  notes         text,
  created_at    timestamptz not null default now()
);

-- ------------------------------------------------------------ RLS ----------
alter table public.user_roles     enable row level security;
alter table public.site_content   enable row level security;
alter table public.quote_requests enable row level security;
alter table public.customers      enable row level security;
alter table public.amc_contracts  enable row level security;
alter table public.jobs           enable row level security;
alter table public.invoices       enable row level security;

-- Visitors: read the website content, submit a quote request.
drop policy if exists "site_content_read" on public.site_content;
create policy "site_content_read" on public.site_content
  for select to anon, authenticated using (true);

drop policy if exists "quote_requests_insert" on public.quote_requests;
create policy "quote_requests_insert" on public.quote_requests
  for insert to anon, authenticated with check (true);

-- Admin only: everything else.
drop policy if exists "site_content_admin" on public.site_content;
create policy "site_content_admin" on public.site_content
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "quote_requests_admin" on public.quote_requests;
create policy "quote_requests_admin" on public.quote_requests
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "customers_admin" on public.customers;
create policy "customers_admin" on public.customers
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "amc_admin" on public.amc_contracts;
create policy "amc_admin" on public.amc_contracts
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "jobs_admin" on public.jobs;
create policy "jobs_admin" on public.jobs
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "invoices_admin" on public.invoices;
create policy "invoices_admin" on public.invoices
  for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

drop policy if exists "user_roles_admin" on public.user_roles;
create policy "user_roles_admin" on public.user_roles
  for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ---------------------------------------------------------- storage --------
-- Private bucket: uploaded service images are served to visitors through
-- /api/public/img/<name> using the service role key.
insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', false)
on conflict (id) do nothing;
