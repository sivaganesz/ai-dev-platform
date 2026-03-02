# Prompt Title: Enterprise AI Dev Platform — Sidebar Generation

You are working inside an already initialized enterprise frontend project.

The project uses:

* React (Vite)
* TypeScript
* Tailwind CSS
* ShadCN UI
* TanStack Query
* React Router DOM
* Lucide Icons

The base layout already exists:

`src/app/layouts/main-layout.tsx`

Your responsibility is to design and implement the **Enterprise Sidebar Navigation System** for this AI-driven development platform.

This sidebar will act as the primary navigation hub for all modules, agents, workflows, and system operations.

---

# 1. Sidebar Placement

Integrate the sidebar inside:

`main-layout.tsx`

Layout structure:

```
| Sidebar | Main Content |
```

Responsive behavior:

* Desktop → Expanded
* Tablet → Collapsible
* Mobile → Drawer overlay

---

# 2. Sidebar Folder Structure

Create sidebar module inside:

```
src/components/layout/sidebar/
│
├── sidebar.tsx
├── sidebar-header.tsx
├── sidebar-nav.tsx
├── sidebar-footer.tsx
├── sidebar-item.tsx
├── sidebar-group.tsx
└── sidebar-collapse-toggle.tsx
```

---

# 3. Navigation Architecture

Sidebar must support:

* Grouped modules
* Icons
* Active route highlight
* Collapse/expand
* Role-based visibility (future-ready)
* Badge indicators
* Tooltip on collapse

---

# 4. Sidebar Modules & Sections

Design navigation based on platform architecture.

---

## 🧭 CORE

* Dashboard
  → System overview, metrics, activity

* Projects
  → AI-built applications lifecycle

* Workflows
  → Prompt → Agent → Approval pipelines

---

## 🤖 AI AGENTS

* Agents Overview
* Frontend Agent
* Backend Agent
* QA Agent
* DevOps Agent
* UX Agent

Each shows:

* Status
* Last run
* Success rate
* Assigned tasks

---

## 👨‍💻 DEVELOPMENT GOVERNANCE

* Senior Developers
* Approvals
* Code Reviews
* Architecture Decisions

---

## 🧪 SANDBOX & DEMO

* Sandbox Environments
* Live UI Previews
* Demo Builds
* API Simulations

---

## 🔗 INTEGRATIONS

* GitHub / GitLab
* CI/CD Pipelines
* Kubernetes
* Cloud Providers
* Notification Systems

---

## 📊 OPERATIONS

* Deployments
* Monitoring
* Logs
* Performance Metrics

---

## ⚙️ ADMINISTRATION

* Users & Teams
* Roles & Permissions
* AI Configurations
* Prompt Templates
* Usage & Billing

---

## 🛠 SETTINGS

* Profile
* Company Info
* Timezone & Region
* Theme Preferences
* API Keys
* Security

---

# 5. Icon System

Use `lucide-react`.

Example mapping:

* Dashboard → LayoutDashboard
* Agents → Bot
* Projects → FolderKanban
* Workflows → GitBranch
* Sandbox → FlaskConical
* Integrations → Plug
* Deployments → Rocket
* Settings → Settings

---

# 6. UI Requirements

Use ShadCN + Tailwind.

Design must include:

* Glass/soft background
* Active item highlight
* Left border indicator
* Hover transitions
* Collapsible width

Widths:

* Expanded → 260px
* Collapsed → 72px

---

# 7. State Management

Sidebar must support:

* Collapse toggle
* Persist state (localStorage)
* Tooltip on collapsed icons

---

# 8. Routing Integration

Each sidebar item must map to a route.

Use placeholder routes for now:

Example:

```
/dashboard
/agents/frontend
/integrations/github
/settings/profile
```

Pages will be implemented later via Markdown prompts.

---

# 9. Footer Section

Include:

* Logged-in user info
* Role badge
* Settings shortcut
* Logout button

---

# 10. Header Section

Include:

* Company logo
* Platform name
* Collapse toggle

---

# 11. Code Quality Rules

* Type-safe nav config
* Central nav schema file
* Reusable sidebar item component
* Lazy route compatibility
* Clean Tailwind classes

---

# 12. Final Output Requirements

After generation, provide:

1. Sidebar folder structure
2. Navigation config schema
3. Integration steps into main-layout
4. Collapse state logic explanation

---

# 13. Restrictions

Do NOT create:

* Actual module pages
* API integrations
* Agent logic
* Dashboards

Sidebar navigation only.

---

# Goal

Build an enterprise-grade sidebar that can scale to support:

* AI agents
* Dev workflows
* Sandbox demos
* Governance approvals
* Integrations
* Deployment monitoring

This is not a simple admin panel — it is an AI software factory control center.

**End of Sidebar Generation Prompt**
