🧭 ADMINISTRATION — Module Structure
ADMINISTRATION
│
├── Users & Teams
├── Roles & Permissions
├── AI Configurations
├── Prompt Templates
└── Usage & Billing


Shared ID format:

USR-001 → User
TEAM-001 → Team
ROLE-001 → Role
AI-CONFIG-001 → AI Config
PRMPT-001 → Prompt Template
BILL-001 → Billing Record

1️⃣ Submodule: Users & Teams

This is the identity & workforce intelligence layer.

It manages:

Platform users

Agent supervisors

Team structures

Module access mapping

Generate the **Users & Teams Administration submodule** for an AI-driven development platform.

This module manages platform users, their teams, and operational assignments.

Use stack: React (Vite), TypeScript, Tailwind, ShadCN UI, TanStack Table.

---

# Folder Structure

src/modules/administration/users-teams/
│
├── pages/
│   └── users-teams-page.tsx
│
├── components/
│   ├── users-table.tsx
│   ├── team-structure-tree.tsx
│   ├── user-details-drawer.tsx
│   ├── team-assignment-panel.tsx
│   └── invite-user-modal.tsx
│
└── hooks/
    └── use-users-data.ts

---

# Mock Data

{
  id: "USR-001",
  name: "Sivaganesh",
  email: "siva@platform.ai",
  roleId: "ROLE-ADMIN",
  teamId: "TEAM-DEV",
  assignedAgents: ["AG-001", "AG-002"],
  status: "ACTIVE",
  joinedAt: "2025-08-10"
}

---

# UI Sections

Users Table:

- Name
- Role
- Team
- Status

Team Tree:

- Frontend
- Backend
- QA
- DevOps

Assignment Panel:

- Agents supervised
- Projects involved

---

# Interconnections

Connect users to:

- Agents
- Projects
- Governance approvals
- Deployments

Goal: Manage workforce structure and accountability.
