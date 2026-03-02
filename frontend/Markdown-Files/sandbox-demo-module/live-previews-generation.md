Prompt: Live UI Previews Submodule

Goal:
Create a fully functional Live UI Previews page within the AI Development Platform. This page allows developers and stakeholders to view live previews of sandboxed applications, component libraries, or workflow UIs. It should provide insights, versioning, and real-time updates.

1. Page Overview

Page Name: LiveUIPreviewsPage

Path: /sandbox/live-previews

Purpose:
Enables users to view live UI previews of sandboxes, workflows, or components. Provides version control, preview status, and integration with agents and workflows.

Components:

Preview Stats Cards (top)

Live Preview Cards / Grid (main area)

Version History Sidebar (right panel)

Interaction Logs / Notes

2. Folder Structure
src/modules/sandbox/
│
├── pages/
│   └── live-ui-previews-page.tsx
│
├── components/
│   ├── preview-card.tsx
│   ├── preview-stats-card.tsx
│   ├── version-history-panel.tsx
│   └── preview-activity-feed.tsx
│
└── hooks/
    └── use-live-previews-data.ts

3. Mock Data Structure

Live Previews mock data:

// mock/core/sandbox/livePreviewsData.ts
export type PreviewStatus = "RUNNING" | "STOPPED" | "ERROR";

export interface LivePreview {
  id: string;
  name: string;
  sandboxId: string; // SB-001, SB-002
  url: string;
  status: PreviewStatus;
  lastUpdated: string;
  version: string;
  agentResponsible: string; // AG-001, AG-002
  linkedWorkflow: string; // WF-2001
}

export const liveUIPreviews: LivePreview[] = [
  {
    id: "LP-001",
    name: "Frontend Sandbox Preview",
    sandboxId: "SB-001",
    url: "https://sandbox.ai-platform.com/frontend-preview",
    status: "RUNNING",
    lastUpdated: "2026-02-12T10:45:00Z",
    version: "v1.0.3",
    agentResponsible: "AG-001",
    linkedWorkflow: "WF-2001"
  },
  {
    id: "LP-002",
    name: "Backend API Preview",
    sandboxId: "SB-002",
    url: "https://sandbox.ai-platform.com/backend-preview",
    status: "STOPPED",
    lastUpdated: "2026-02-12T11:05:00Z",
    version: "v1.0.1",
    agentResponsible: "AG-002",
    linkedWorkflow: "WF-2002"
  },
  {
    id: "LP-003",
    name: "FullStack Demo Preview",
    sandboxId: "SB-003",
    url: "https://sandbox.ai-platform.com/fullstack-preview",
    status: "ERROR",
    lastUpdated: "2026-02-11T16:50:00Z",
    version: "v0.9.5",
    agentResponsible: "AG-004",
    linkedWorkflow: "WF-2003"
  }
];

4. Components
1. Preview Stats Cards

Top row:

Total Previews

Running / Stopped / Error count

Last updated preview

Component: preview-stats-card.tsx

2. Live Preview Cards / Grid

Shows live previews in card/grid layout:

Name, Status, Sandbox, Version

Live URL button

Agent responsible

Linked workflow

Component: preview-card.tsx

3. Version History Sidebar

Display previous versions of selected preview

Show changelog / update notes

Component: version-history-panel.tsx

4. Preview Activity Feed

Show last 5–10 interactions:

Preview start/stop

Updates or errors

Timestamp, responsible agent

Component: preview-activity-feed.tsx

5. Data Fetching Layer

Hook: use-live-previews-data.ts

Responsibilities:

Fetch all live previews

Aggregate preview status counts

Provide version history and activity logs

Mock API delays for realism

6. Page Layout

Top Row: Preview Stats Cards (overview)

Middle Row: Live Preview Cards / Grid (main)

Right Sidebar: Version History + Activity Feed

Responsive: Desktop 4 columns, Tablet 2 columns, Mobile 1 column

7. UI Design Requirements

Enterprise-grade design (card shadows, soft borders)

Status badges (green: RUNNING, grey: STOPPED, red: ERROR)

Hover tooltips for linked agents, workflows, and sandbox

Live URL button opens in a new tab

Version changelog expandable / collapsible

8. Routing

Route: /sandbox/live-previews

Lazy loaded

Integrated into main sidebar and platform menu

9. Backend Alignment

All IDs consistent with platform sandboxes, workflows, and agents

Timestamps ISO format

Status enums: RUNNING / STOPPED / ERROR

Mock data ready for API integration

✅ Outcome:

Page is fully interactive and visually meaningful

Users can view live sandboxes or workflows in real time

Versioning, activity feed, and agent/workflow connections are visible

Fully integrated with the SANDBOX & DEMO module