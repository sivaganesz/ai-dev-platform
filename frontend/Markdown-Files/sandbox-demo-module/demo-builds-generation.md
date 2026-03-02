Prompt: Demo Builds Submodule

Goal:
Create a fully functional Demo Builds page in the AI Development Platform. This page allows developers, stakeholders, and testers to view, manage, and launch demo builds for sandboxed applications, workflows, or components. Include versioning, build status, logs, and associated agents/workflows.

1. Page Overview

Page Name: DemoBuildsPage

Path: /sandbox/demo-builds

Purpose:
Provides a centralized view of all demo builds. Users can see build history, status (success, failed, in-progress), associated agents, and linked workflows.

Components:

Build Stats Cards (top)

Build List / Grid (main area)

Build Logs Panel (right sidebar)

Launch / Download / Rebuild Actions

2. Folder Structure
src/modules/sandbox/
│
├── pages/
│   └── demo-builds-page.tsx
│
├── components/
│   ├── build-card.tsx
│   ├── build-stats-card.tsx
│   ├── build-logs-panel.tsx
│   └── build-actions.tsx
│
└── hooks/
    └── use-demo-builds-data.ts

3. Mock Data Structure

Demo Builds mock data:

// mock/core/sandbox/demoBuildsData.ts
export type BuildStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";

export interface DemoBuild {
  id: string;
  name: string;
  sandboxId: string; // SB-001, SB-002
  agentResponsible: string; // AG-001, AG-002
  linkedWorkflow: string; // WF-2001
  version: string;
  status: BuildStatus;
  createdAt: string;
  updatedAt: string;
  logs: string[];
}

export const demoBuilds: DemoBuild[] = [
  {
    id: "DB-001",
    name: "Frontend Demo Build",
    sandboxId: "SB-001",
    agentResponsible: "AG-001",
    linkedWorkflow: "WF-2001",
    version: "v1.0.2",
    status: "SUCCESS",
    createdAt: "2026-02-12T09:30:00Z",
    updatedAt: "2026-02-12T10:00:00Z",
    logs: ["Build started", "Compilation complete", "Build successful"]
  },
  {
    id: "DB-002",
    name: "Backend API Demo Build",
    sandboxId: "SB-002",
    agentResponsible: "AG-002",
    linkedWorkflow: "WF-2002",
    version: "v1.0.1",
    status: "FAILED",
    createdAt: "2026-02-12T11:00:00Z",
    updatedAt: "2026-02-12T11:30:00Z",
    logs: ["Build started", "Dependency error", "Build failed"]
  },
  {
    id: "DB-003",
    name: "FullStack Demo Build",
    sandboxId: "SB-003",
    agentResponsible: "AG-004",
    linkedWorkflow: "WF-2003",
    version: "v0.9.8",
    status: "IN_PROGRESS",
    createdAt: "2026-02-12T12:00:00Z",
    updatedAt: "2026-02-12T12:20:00Z",
    logs: ["Build started", "Compiling backend modules"]
  }
];

4. Components
1. Build Stats Cards

Top row:

Total builds

Success / Failed / In Progress count

Last updated build

Component: build-stats-card.tsx

2. Build List / Grid

Shows demo builds in card/grid layout:

Name, Status, Version

Agent responsible

Linked workflow

Timestamps

Component: build-card.tsx

3. Build Logs Panel

Right sidebar:

Displays detailed logs of selected build

Real-time updates for builds in progress

Component: build-logs-panel.tsx

4. Build Actions

Buttons for:

Launch / Open build

Download artifact

Trigger rebuild

Component: build-actions.tsx

5. Data Fetching Layer

Hook: use-demo-builds-data.ts

Responsibilities:

Fetch all demo builds

Aggregate stats (success/fail/in-progress)

Provide build logs and status updates

Mock API delay for realism

6. Page Layout

Top Row: Build Stats Cards

Middle Row: Build List / Grid (main content)

Right Sidebar: Build Logs Panel

Responsive: Desktop 4 columns, Tablet 2 columns, Mobile 1 column

7. UI Design Requirements

Enterprise-grade cards, status badges (green: SUCCESS, red: FAILED, yellow: IN_PROGRESS)

Hover tooltips for linked agents and workflows

Logs panel collapsible / expandable

Action buttons clear and accessible

Visual differentiation between completed, in-progress, and failed builds

8. Routing

Route: /sandbox/demo-builds

Lazy loaded

Integrated into main sandbox menu

9. Backend Alignment

IDs consistent with sandbox, agents, and workflows

Timestamps ISO format

Status enums: SUCCESS / FAILED / IN_PROGRESS

Mock data ready for API integration

✅ Outcome:

Page shows demo build history, status, and logs

Users can launch, download, or rebuild any demo build

Integrated with agents, workflows, and sandboxes

Fully connected to the SANDBOX & DEMO module