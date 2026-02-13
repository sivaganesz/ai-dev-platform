You are generating the **API Simulations module** for an AI-driven software development platform. 

This module is part of the Sandbox & Demo section and is responsible for **simulating API requests and responses** for testing workflows, builds, and agents. It should be interactive, show request/response logs, and connect with Sandbox, Demo Builds, and Agent modules.

Use the project stack: React (Vite), TypeScript, Tailwind CSS, ShadCN UI.

---

# 1. Folder Structure

src/modules/api-simulations/
│
├── pages/
│   └── api-simulations-page.tsx
│
├── components/
│   ├── api-request-card.tsx
│   ├── api-response-panel.tsx
│   ├── api-logs-panel.tsx
│   ├── create-api-request-modal.tsx
│   └── simulation-stats-card.tsx
│
└── hooks/
    └── use-api-simulations-data.ts

---

# 2. Mock Data

Maintain consistent global IDs:

- Sandbox: SB-001, SB-002
- Agent: AG-001, AG-002
- Workflow: WF-2001, WF-2002
- Demo Build: DB-001, DB-002
- API Simulation: API-001, API-002, API-003

Example API Simulation object:

{
  id: "API-004",
  name: "Frontend Data Fetch",
  linkedSandbox: "SB-001",
  linkedBuild: "DB-002",
  linkedWorkflow: "WF-2004",
  agentResponsible: "AG-001",
  method: "GET",
  endpoint: "/api/v1/data",
  requestPayload: { userId: "USR-1001" },
  responsePayload: { data: [ { id: "PRJ-1001", name: "Project A" } ] },
  status: "SUCCESS", // IN_PROGRESS | FAILED
  logs: ["Request sent", "Response received"],
  timestamp: "2026-02-13T12:00:00Z"
}

---

# 3. Page Layout

**api-simulations-page.tsx**

- Top: Stats cards (`simulation-stats-card.tsx`) showing:
  - Total API Simulations
  - Success Rate
  - Failed Requests
- Left: Grid of API Request Cards (`api-request-card.tsx`)
- Right: Response & Logs panel (`api-response-panel.tsx` + `api-logs-panel.tsx`)
- Modals:
  - `create-api-request-modal.tsx` for creating new API simulations

---

# 4. Components

## api-request-card.tsx

- Displays API name, method (GET/POST), endpoint, linked sandbox/build/workflow, status badge
- Actions:
  - Trigger Simulation
  - View Logs
  - Copy Endpoint

## api-response-panel.tsx

- Shows the request payload sent
- Shows the response payload received
- Proper formatting for JSON data
- Timestamped entries

## api-logs-panel.tsx

- Chronological logs for each API simulation
- Auto-scroll to latest log
- Show status: SUCCESS, FAILED, IN_PROGRESS

## create-api-request-modal.tsx

- Inputs: Name, Sandbox, Demo Build, Linked Workflow, Agent Responsible, Method, Endpoint, Request Payload
- Submit → Adds new simulation, sets IN_PROGRESS, generates initial logs

## simulation-stats-card.tsx

- Aggregated metrics:
  - Total Simulations
  - Success Rate %
  - Failed Requests
  - Last Simulation Timestamp

---

# 5. Hooks – use-api-simulations-data.ts

- Fetch API simulations data (mock)
- Add new simulation dynamically
- Trigger simulation → update status + append logs
- Provide metrics for stats cards
- Connect simulations with Sandbox, Demo Builds, and Agent modules (IDs consistent)
- Maintain JSON payload consistency

---

# 6. Interactivity

- Clicking **Trigger Simulation**:
  - Changes status to IN_PROGRESS
  - Generates mock request/response logs dynamically
  - Updates stats cards
- Clicking **View Logs**:
  - Opens log panel for that API
- Clicking **Copy Endpoint**:
  - Copies endpoint URL to clipboard
- Creating a new API simulation updates:
  - Request grid
  - Response panel
  - Logs
  - Stats dynamically

---

# 7. UI Requirements

- Enterprise-grade:
  - Card shadows, soft borders, gradient icons
  - Tooltip for each action
  - Scrollable response & logs panel
  - Color-coded status badges
- Responsive grid:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column

---

# 8. Output

Generate fully functional **API Simulations page**:

1. Folder structure
2. Pages, components, hooks
3. API request grid with actions
4. Logs panel with real-time updates
5. Response panel for viewing JSON payloads
6. Create API Request modal with validation
7. Stats cards with aggregated metrics
8. Integration with Sandbox, Demo Builds, and Agent modules

---

# Goal

Enable developers and QA teams to **simulate API interactions**, **track requests/responses**, **analyze success/failure rates**, and **connect simulations to builds, workflows, and agents** for testing and validation.

