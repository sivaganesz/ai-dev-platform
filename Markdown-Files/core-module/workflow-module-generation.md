Prompt Document: Workflow Module
Module Overview

The Workflow Module manages automation workflows linked to projects.
Each workflow is associated with a project, can have multiple tasks, statuses, and assigned agents.
This module will feed Dashboard charts like Workflow Status and Deployment Summary.

1. Technology Stack

Use the same stack:

React (Vite)

TypeScript

Tailwind CSS

ShadCN UI

TanStack Query

Install dependencies if missing:

npm install @tanstack/react-query

2. Folder Structure
src/modules/workflows/
│
├── pages/
│   └── workflows-page.tsx
│
├── components/
│   ├── workflow-card.tsx
│   ├── workflow-list.tsx
│   ├── workflow-filter.tsx
│   └── workflow-status-chart.tsx
│
└── hooks/
    └── use-workflows-data.ts

3. Mock Data Structure

File: mock/core/workflows/workflowsData.ts

Ensure workflow.projectId matches a project in projectsData:

import { v4 as uuid } from "uuid";
import { projectsData } from "@/mock/core/projects/projectsData";

export const workflowsData = [
  {
    id: uuid(),
    projectId: projectsData[0].id, // Matches "AI Chatbot"
    name: "Intent Recognition Setup",
    description: "Setup NLP models for intent recognition",
    status: "RUNNING",
    assignedTo: ["ML", "Backend"],
    startDate: "2026-01-05",
    endDate: "2026-03-10",
    tasksCount: 10,
    completedTasks: 3,
  },
  {
    id: uuid(),
    projectId: projectsData[1].id, // Matches "Workflow Automation"
    name: "Email Automation Workflow",
    description: "Automate email sending for leads",
    status: "FAILED",
    assignedTo: ["Backend", "DevOps"],
    startDate: "2026-02-10",
    endDate: "2026-04-15",
    tasksCount: 8,
    completedTasks: 5,
  },
  {
    id: uuid(),
    projectId: projectsData[2].id, // Matches "Data Analytics Platform"
    name: "Report Generation",
    description: "Generate daily business analytics reports",
    status: "COMPLETED",
    assignedTo: ["Backend", "QA"],
    startDate: "2025-08-10",
    endDate: "2026-01-10",
    tasksCount: 15,
    completedTasks: 15,
  },
];


Status enums: RUNNING | COMPLETED | FAILED

Match projectId with projectsData

Include tasksCount and completedTasks for dashboard aggregation

4. Data Hook

File: hooks/use-workflows-data.ts

import { useQuery } from "@tanstack/react-query";
import { workflowsData } from "@/mock/core/workflows/workflowsData";

export const useWorkflowsData = () => {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: async () => {
      return new Promise(resolve => setTimeout(() => resolve(workflowsData), 300));
    },
  });
};

5. Components

Workflow Card (workflow-card.tsx)

Workflow name, project name, status badge, assigned teams, progress bar

Workflow List (workflow-list.tsx)

Displays all workflows, grouped by project if needed

Workflow Filter (workflow-filter.tsx)

Filter by project, status, or assigned team

Workflow Status Chart (workflow-status-chart.tsx)

Pie/Donut chart showing RUNNING, COMPLETED, FAILED workflows

Feeds directly to Dashboard widget

6. Page Layout

File: pages/workflows-page.tsx

Top: Workflow Filter

Middle: Workflow Status Chart

Bottom: Workflow List

Responsive:

Desktop → 3-4 columns for cards

Tablet → 2 columns

Mobile → 1 column

7. Routing

Route: /workflows

Lazy load for performance

8. Backend Alignment

workflow.projectId links to projectsData.id

Status enums ready for filtering and dashboard aggregation

Task counts align with project tasks for charts

Ready for Dashboard integration

9. Restrictions

Mock data only, no APIs yet

No CRUD or authentication

Focus on enterprise-grade visualization

Keep all IDs and references consistent with Projects and Dashboard

10. Deliverables

Folder structure

Mock schema file (workflowsData.ts)

Data fetching hook

Components: card, list, filter, chart

Page layout with responsive design

Fully integrated mock data that matches projects and dashboard modules