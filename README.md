# Trofi Admin Panel

A production-shaped clone of the Trofi ride-hailing super-admin dashboard, built with **React 19, Vite, TypeScript, Tailwind CSS v4, shadcn-style UI primitives, TanStack Query, Zustand, TanStack Table, ECharts, React Hook Form + Zod, Axios, and React Router v7**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Log in at `/login` with the seeded Super Admin credential:

```
Email:    admin@trofi.in
Password: Admin@123
```

This is checked against a persisted user list (`useUsersStore`, backed by `localStorage`) by the mock auth layer in `src/features/auth/api/authApi.ts`. Registering a new admin via `/register` adds them to that store with `status: 'pending'` — sign in with the Super Admin, go to **Roles & Permissions**, and approve or reject them from the "Pending account requests" panel. Once approved, they can log in with the email/password they registered with, and their real name shows in the topbar. Swap the check for real `axios` calls against your backend when ready; nothing else in the app needs to change.

Other scripts:
```bash
npm run build       # tsc -b + production build
npm run preview     # preview the production build
npm run typecheck   # type-check only, no emit
npm run lint        # oxlint
```

## What's inside

- **18 routes**: Login, Register, Register-success, and 15 authenticated admin pages (Dashboard, Live Operations, Rides, Customers, Partners, Verification, SOS & Safety, Support, Finance, Marketing, Analytics & BI, Fraud & Risk, Audit Logs, Roles & Permissions, Settings).
- **Design tokens** ported 1:1 from the original mockup into Tailwind v4 `@theme` variables in `src/index.css` (teal/amber/indigo/slate/blue/forest/coral/rose color ramps, Inter type scale, spacing/radius/shadow rules).
- **Shared design-system layer** in `src/components/ui` (hand-built shadcn-style primitives on Radix: Button, Dialog, Select, Switch, Checkbox, Table, Card, Badge, Avatar, Separator, Input, Label) and `src/components/shared` (KpiCard, DataTable, SparklineChart/EChartsPanel, EventFeed, MetricRow, ProgressBar, DocumentViewerModal, MapPlaceholder, FilterBar, PasswordStrengthMeter, Timeline).
- **Feature-based architecture**: every sidebar section is a self-contained module under `src/features/*` (pages, columns, schemas, api) — see the folder tree below.
- **Mock data layer**: `src/mocks/data/*.ts` holds realistic seed data (Chennai/Coimbatore/Madurai/Salem, ₹ currency, UPI/Cash/Card/Wallet payments). Every page fetches this through a TanStack Query hook wrapping a `delay()` helper that simulates latency — so the data-fetching shape is already correct for wiring up a real API through `src/lib/axios.ts` later.

## Folder structure

```
src/
├─ App.tsx / main.tsx
├─ index.css                 # Tailwind v4 @theme design tokens
├─ lib/                      # cn, format, axios instance, query-key factory
├─ types/                    # shared enums/types
├─ constants/                # nav config, color maps
├─ store/                    # Zustand: useAuthStore (persisted), useUiStore
├─ layouts/                  # AuthLayout (split-pane), DashboardLayout, Sidebar, Topbar
├─ routes/                   # router.tsx (React Router v7, lazy routes), ProtectedRoute
├─ components/
│  ├─ ui/                    # shadcn-style primitives
│  └─ shared/                # design-system components used across features
├─ features/
│  ├─ auth/                  # Login, Register, Success — RHF + Zod
│  ├─ dashboard/
│  ├─ operations/            # live monitoring, event feed, map placeholder
│  ├─ rides/                 # DataTable + filters
│  ├─ customers/
│  ├─ partners/
│  ├─ verification/          # document review + DocumentViewerModal
│  ├─ sos/
│  ├─ support/
│  ├─ finance/                # settlements table + ECharts payment split
│  ├─ marketing/              # campaigns table + Create Campaign modal (RHF+Zod)
│  ├─ analytics/              # 4 ECharts dashboards
│  ├─ fraud/
│  ├─ audit/
│  ├─ roles/                  # role table + permission matrix
│  └─ settings/
└─ mocks/data/                # seed data per feature
```

## Wiring up a real backend

1. Set `VITE_API_BASE_URL` in `.env` (copy from `.env.example`).
2. Replace the bodies of `src/features/auth/api/authApi.ts` and each feature's inline `queryFn` with real `api.get/post(...)` calls from `src/lib/axios.ts` — the Axios instance already attaches the auth token and handles 401 → logout.
3. Query keys are centralized in `src/lib/query-keys.ts`; keep using them for cache invalidation.

## Notes / next steps

- The map on the Operations page is a placeholder (`MapPlaceholder`) — wire up Mapbox/Google Maps/`react-map-gl` where marked with `// TODO`.
- For very large tables, add `@tanstack/react-virtual` row virtualization to `DataTable`.
- Consider adding MSW (`src/mocks/`) if you want a fuller offline-mocking story with realistic network errors/latency variance.
