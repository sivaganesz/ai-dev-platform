**Prompt Title: Enterprise AI Dev Platform — Frontend Project Initializer**

You are working inside an empty project workspace.

Your responsibility is to initialize a **production-ready enterprise frontend application** that will later be expanded using Markdown instruction files such as:

* `sidebar.md`
* `dashboard.md`
* `agents.md`
* `settings.md`
* etc.

This step is ONLY for:

Project creation + base architecture + global setup.

Do NOT build feature modules yet.

---

# 1. Project Creation

Initialize project using:

* React + Vite
* TypeScript template

Command reference:

```
npm create vite@latest ai-dev-platform -- --template react-ts
cd ai-dev-platform
npm install
```

---

# 2. Install Required Dependencies

Install the following:

### Core

```
react-router-dom
axios
zod
```

### TanStack Query

```
@tanstack/react-query
```

### UI & Styling

```
tailwindcss
postcss
autoprefixer
class-variance-authority
clsx
tailwind-merge
lucide-react
```

### ShadCN UI Init

```
npx shadcn-ui@latest init
```

Configure:

* TypeScript → Yes
* Tailwind → Yes
* App directory → No
* Vite → Yes

---

# 3. Tailwind Configuration

Configure Tailwind in:

```
tailwind.config.ts
src/index.css
```

Enable:

* Dark mode (class based)
* Container padding
* Custom radius tokens

---

# 4. Enterprise Folder Structure

Create the following structure:

```
src/
│
├── app/
│   ├── router/
│   │   └── index.tsx
│   │
│   ├── providers/
│   │   ├── query-provider.tsx
│   │   └── theme-provider.tsx
│   │
│   └── layouts/
│       └── main-layout.tsx
│
├── modules/              # Feature modules (future MD driven)
│
├── components/
│   ├── ui/               # ShadCN components
│   ├── shared/
│   └── layout/
│
├── services/
│   ├── api/
│   │   └── axios-client.ts
│   │
│   └── query/
│       └── query-client.ts
│
├── hooks/
├── lib/
├── types/
├── mock/
│
├── assets/
└── styles/
```

---

# 5. Router Setup

Create base router:

`src/app/router/index.tsx`

Include:

* React Router DOM
* Lazy loading support
* Layout wrapping system

Routes for now:

```
/
→ Placeholder Dashboard Page
```

(No modules yet — sidebar comes later)

---

# 6. Query Provider Setup

Create TanStack Query provider:

`query-provider.tsx`

Include:

* QueryClient
* Devtools (optional)
* Global retry config
* Error handling defaults

Wrap app in this provider.

---

# 7. Axios API Client

Create reusable API client:

`src/services/api/axios-client.ts`

Include:

* Base URL placeholder
* Timeout config
* Request interceptor
* Response interceptor
* Error normalization

---

# 8. Theme Provider

Configure theme system:

* Light / Dark mode toggle ready
* Tailwind class strategy
* Persist theme in localStorage

---

# 9. Main Layout (Skeleton)

Create layout:

`main-layout.tsx`

Include placeholders for:

* Sidebar (future)
* Topbar
* Content outlet

Use responsive flex layout.

---

# 10. App Entry Setup

Update:

`main.tsx`

Wrap app with:

* QueryProvider
* ThemeProvider
* RouterProvider

---

# 11. Demo Placeholder Page

Create temporary page:

```
src/modules/dashboard/pages/dashboard-page.tsx
```

Display:

* App title
* “System Initialized”
* “Waiting for module generation via Markdown instructions”

---

# 12. Code Quality Rules

All code must be:

* TypeScript strict
* Modular
* Clean imports
* Alias supported (`@/`)

Configure:

```
tsconfig.json
vite.config.ts
```

Path alias:

```
@ → src
```

---

# 13. Do NOT Implement Yet

You are NOT allowed to create:

* Sidebar
* Agents module
* Settings pages
* Integrations
* Workflows
* Prompt studio

These will come via Markdown prompts later.

---

# 14. Final Output Requirements

After generation, provide:

1. Folder structure tree
2. Installed dependencies list
3. Provider wiring explanation
4. Run command

Run command:

```
npm run dev
```

---

# 15. Project Goal Context

This platform will simulate:

AI-driven software development lifecycle where:

* Senior devs prompt agents
* Agents generate apps
* Sandbox previews render UI
* CI/CD publishes demos

So architecture must be scalable and modular.

---

**End of Project Initialization Prompt**