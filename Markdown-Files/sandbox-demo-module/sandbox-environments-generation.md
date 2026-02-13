Module: SANDBOX & DEMO

Context:
This module provides an interactive environment for developers and stakeholders to test features safely, preview live UI changes, simulate API interactions, and generate demo builds. It is meant to mirror real system behavior using sandboxed/mock data without affecting production.

Submodule 1: Sandbox Environments

Objective:
Allow users to create and manage isolated environments where code, workflows, or agents can be tested safely.

Prompt for Gemini CLI / Implementation:

Module: Sandbox Environments

Folder Structure:
src/modules/sandbox/
│
├── pages/
│   └── sandbox-environments-page.tsx
│
├── components/
│   ├── environment-card.tsx
│   ├── environment-list.tsx
│   ├── environment-create-modal.tsx
│   └── environment-status-badge.tsx
│
└── hooks/
    └── use-sandbox-data.ts

Mock Data Schema:
interface SandboxEnvironment {
  id: string
  name: string
  type: "Frontend" | "Backend" | "FullStack" | "Microservice"
  status: "ACTIVE" | "INACTIVE" | "FAILED"
  createdAt: string
  updatedAt: string
  owner: string
  linkedAgents: string[] // e.g., ["AG-001", "AG-002"]
}

Functionalities:
- List all sandbox environments with status badges
- Create new sandbox with type, owner, and linked agents
- Show last updated timestamp and environment owner
- View environment details in a modal
- Display quick stats (Total environments, Active, Failed)

UI Guidelines:
- Responsive grid of cards
- Status color coding
- Quick action buttons (Edit, Delete, Clone)
- ShadCN Card & Modal components