Prompt Document: Projects Module
Module Overview

You are generating the Projects Module for an enterprise AI development platform.
This module manages project information, statuses, team assignments, and task progress.
It feeds data to the Dashboard Module for visualization and analytics.

1. Technology Stack

Use the project’s existing stack:

React (Vite)

TypeScript

Tailwind CSS

ShadCN UI

TanStack Query

Recharts (optional for charts)

Install missing dependencies:

npm install recharts

2. Folder Structure

Create the module structure:

src/modules/projects/
│
├── pages/
│   └── projects-page.tsx
│
├── components/
│   ├── project-card.tsx
│   ├── project-list.tsx
│   ├── project-filter.tsx
│   └── project-summary-chart.tsx
│
└── hooks/
    └── use-projects-data.ts

3. Mock Data

File: mock/core/projects/projectsData.ts

import { v4 as uuid } from "uuid";

export const projectsData = [
  {
    id: uuid(),
    name: "AI Chatbot",
    description: "Enterprise-level AI customer support chatbot",
    status: "ACTIVE",
    startDate: "2026-01-01",
    endDate: "2026-06-30",
    team: ["Frontend", "Backend", "ML"],
    owner: "Alice Johnson",
    tasksCount: 50,
    completedTasks: 20,
  },
  {
    id: uuid(),
    name: "Workflow Automation",
    description: "Automate sales and internal workflows",
    status: "ON_HOLD",
    startDate: "2026-02-01",
    endDate: "2026-07-31",
    team: ["Backend", "DevOps"],
    owner: "Bob Smith",
    tasksCount: 30,
    completedTasks: 10,
  },
  {
    id: uuid(),
    name: "Data Analytics Platform",
    description: "Platform for real-time business analytics",
    status: "COMPLETED",
    startDate: "2025-08-01",
    endDate: "2026-01-15",
    team: ["Frontend", "Backend", "QA"],
    owner: "Charlie Lee",
    tasksCount: 40,
    completedTasks: 40,
  },
];


Status enums: ACTIVE | ON_HOLD | COMPLETED

IDs must be UUIDs

Include team, owner, task count, and completion stats

4. Data Hook

File: hooks/use-projects-data.ts

import { useQuery } from "@tanstack/react-query";
import { projectsData } from "@/mock/core/projects/projectsData";

export const useProjectsData = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return new Promise(resolve => setTimeout(() => resolve(projectsData), 300));
    },
  });
};


Fetch mock data asynchronously

Provides ready-to-use project data for components and dashboard

5. Components

Project Card (project-card.tsx)

Shows project name, owner, status badge, progress bar, and end date

Project List (project-list.tsx)

Renders all project cards in a responsive grid

Project Filter (project-filter.tsx)

Filter projects by status, team, or owner

Project Summary Chart (project-summary-chart.tsx)

Bar chart showing Active, Completed, On-Hold projects

6. Page Layout

File: pages/projects-page.tsx

Top: Project Filter

Middle: Project Summary Chart

Bottom: Project List (cards)

Responsive:

Desktop → 3-4 columns

Tablet → 2 columns

Mobile → 1 column

7. Routing

Route: /projects

Lazy load page like dashboard

8. Backend Alignment

IDs are UUIDs

Status enums ready for filtering and aggregation

Task counts for charts and dashboard

Fully mock-data ready and compatible with dashboard aggregation

9. Restrictions

No real API calls yet

Mock data only

No CRUD or authentication

Focus on enterprise-grade visualization

10. Deliverables

Folder structure

Mock schema files

Data fetching hook

Components: cards, list, filter, chart

Page layout with responsive design

Integration-ready for Dashboard module

This prompt document can now be directly used to generate the module, whether manually or via AI tools, ensuring enterprise-grade, fully mocked, and dashboard-integrated Projects Module.