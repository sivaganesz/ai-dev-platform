
🔗 INTEGRATIONS MODULE — STRUCTURE OVERVIEW
INTEGRATIONS
│
├── Platforms
├── CI/CD Pipelines
├── Cloud Providers
└── Notification Systems


All submodules must connect with:

Projects

Workflows

Agents

Demo Builds

Deployments

Governance

Shared ID pattern:

INT-PLT-001 → Platform
INT-CICD-001 → Pipeline
INT-CLD-001 → Cloud
INT-NTF-001 → Notification

🔗 INTEGRATIONS MODULE — STRUCTURE OVERVIEW
INTEGRATIONS
│
├── Platforms
├── CI/CD Pipelines
├── Cloud Providers
└── Notification Systems


All submodules must connect with:

Projects

Workflows

Agents

Demo Builds

Deployments

Governance

Shared ID pattern:

INT-PLT-001 → Platform
INT-CICD-001 → Pipeline
INT-CLD-001 → Cloud
INT-NTF-001 → Notification

You are generating the **Platforms Integration submodule** for an AI-driven software development platform.

This module manages connections with external development platforms such as GitHub, GitLab, Bitbucket, and Azure DevOps.

It enables repository linking, workflow triggers, PR tracking, and build integrations.

Use stack: React (Vite), TypeScript, Tailwind CSS, ShadCN UI.

---

# 1. Folder Structure

src/modules/integrations/platforms/
│
├── pages/
│   └── platforms-page.tsx
│
├── components/
│   ├── platform-card.tsx
│   ├── repository-list.tsx
│   ├── connection-status-badge.tsx
│   ├── platform-activity-logs.tsx
│   └── connect-platform-modal.tsx
│
└── hooks/
    └── use-platforms-data.ts

---

# 2. Mock Data

Example:

{
  id: "INT-PLT-001",
  platformName: "GitHub",
  organization: "ai-dev-platform",
  repositories: [
    { id: "REP-001", name: "frontend-ui", linkedProject: "PRJ-1001" },
    { id: "REP-002", name: "backend-core", linkedProject: "PRJ-1002" }
  ],
  status: "CONNECTED",
  lastSync: "2026-02-14T10:00:00Z",
  linkedPipelines: ["INT-CICD-001"]
}

---

# 3. Page Layout

Top:

- Total Platforms
- Connected Platforms
- Active Repositories

Main Grid:

- Platform Cards

Right Panel:

- Repository List
- Activity Logs

---

# 4. Functionalities

Platform Card:

- Platform name + logo
- Org name
- Repo count
- Status badge

Actions:

- Connect / Disconnect
- View Repositories
- Sync Now

---

# 5. Interconnections

Repositories link to:

- Projects
- Workflows
- CI/CD pipelines
- Code Reviews

---

# 6. Output

Generate:

- Platforms page
- Repository listing
- Connection modal
- Activity logs
- Integration hooks

Goal: Manage external code platforms and repository intelligence.
