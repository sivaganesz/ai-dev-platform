Prompt: Sandbox Environments Submodule

Goal:
Create a fully interactive Sandbox Environments page within the AI Development Platform. This page should be more than a CRUD table — it should give insights, activity trends, pre-populated demo sandboxes, and connected agent/workflow data.

1. Page Overview

Page Name: SandboxEnvironmentsPage

Path: /sandbox/environments

Purpose:
Provides an overview of all sandbox environments, their status, recent activities, linked workflows and agents, and actionable operations.

Components:

Stats Overview Cards (top)

Sandbox Cards / Table (main area)

Recent Activity Feed (side panel)

Graphs / Health Indicators

2. Folder Structure
src/modules/sandbox/
│
├── pages/
│   └── sandbox-environments-page.tsx
│
├── components/
│   ├── sandbox-card.tsx
│   ├── sandbox-stats-card.tsx
│   ├── sandbox-activity-feed.tsx
│   └── sandbox-health-chart.tsx
│
└── hooks/
    └── use-sandbox-data.ts

3. Mock Data Structure

Create demo sandboxes with some activity:

// mock/core/sandbox/sandboxData.ts
export type SandboxStatus = "ACTIVE" | "INACTIVE" | "FAILED";

export interface Sandbox {
  id: string;
  name: string;
  type: "Frontend" | "Backend" | "FullStack";
  status: SandboxStatus;
  linkedAgents: string[]; // AG-001, AG-002
  linkedWorkflows: string[]; // WF-1001, WF-1002
  lastExecuted: string;
  recentTasks: string[];
}

// Example demo data
export const sandboxEnvironments: Sandbox[] = [
  {
    id: "SB-001",
    name: "Frontend Sandbox",
    type: "Frontend",
    status: "ACTIVE",
    linkedAgents: ["AG-001", "AG-005"],
    linkedWorkflows: ["WF-2001"],
    lastExecuted: "2026-02-12T10:30:00Z",
    recentTasks: ["UI component test", "Integration API call"]
  },
  {
    id: "SB-002",
    name: "Backend Sandbox",
    type: "Backend",
    status: "ACTIVE",
    linkedAgents: ["AG-002"],
    linkedWorkflows: ["WF-2002"],
    lastExecuted: "2026-02-12T11:00:00Z",
    recentTasks: ["Database migration test", "API endpoint test"]
  },
  {
    id: "SB-003",
    name: "FullStack Sandbox",
    type: "FullStack",
    status: "INACTIVE",
    linkedAgents: ["AG-001", "AG-003", "AG-004"],
    linkedWorkflows: ["WF-2003"],
    lastExecuted: "2026-02-11T16:45:00Z",
    recentTasks: []
  }
];

4. Components
1. Sandbox Stats Cards

Show at top:

Total Sandboxes

Active / Inactive / Failed counts

Last executed workflow

Component: sandbox-stats-card.tsx

2. Sandbox Cards / Table

Display sandbox info in card or table layout:

Name, Type, Status

Linked Agents & Workflows

Last Executed

Recent Tasks

Quick Actions: Run, Clone, Delete

Component: sandbox-card.tsx

3. Sandbox Health Chart

Graph showing:

Active vs Inactive vs Failed

Optional: Success rate of last 5 executions

Component: sandbox-health-chart.tsx

4. Recent Activity Feed

Show last 5–10 tasks executed in all sandboxes

Include:

Sandbox name

Task / workflow executed

Status

Timestamp

Component: sandbox-activity-feed.tsx

5. Data Fetching Layer

Hook: use-sandbox-data.ts

Responsibilities:

Fetch all sandbox environments

Aggregate stats (active, failed, inactive)

Provide recent activity feed

Include mock delays to simulate API fetch

6. Page Layout

Top Row: Sandbox Stats Cards (total, active, inactive, failed)

Middle Row: Sandbox Cards / Table (main section)

Side Column / Right Corner: Recent Activity Feed + Health Chart

Responsive: Desktop 4 columns, Tablet 2 columns, Mobile 1 column

7. UI Design Requirements

Enterprise look (card shadows, soft borders, gradient icons)

Status badges (green for ACTIVE, red for FAILED, grey for INACTIVE)

Hover tooltips for linked agents and workflows

Charts with legends and tooltips

Quick action buttons visually distinct

8. Routing

Route: /sandbox/environments

Lazy loaded

Integrated with main sidebar and platform menu

9. Backend Alignment

All IDs match global platform IDs

Timestamps ISO format

Status enums: ACTIVE / INACTIVE / FAILED

Mock data structured for future API integration

✅ Outcome:

Page will no longer be empty

Users can see stats, demo sandboxes, recent tasks, linked agents/workflows

Visual feedback on health, execution status, and activity trends

Fully connected to platform ecosystem