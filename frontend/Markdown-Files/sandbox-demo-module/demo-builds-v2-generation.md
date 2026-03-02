Enhanced Demo Builds Module Prompt

Goal: Make the Demo Builds page fully interactive, with live UI previews, functional actions, and a build creation flow.

1. Core Requirements

Live UI Preview

Each build card should have a “Preview UI” button.

Opens a panel or modal showing the running version of the demo (mocked / sandboxed).

Should handle multiple builds without conflict.

Functional Action Buttons

Download Artifact: Simulate downloading a .zip or .tar file. Show toast notification “Download started”.

Trigger Rebuild: Update build status to IN_PROGRESS, then mock SUCCESS or FAILED after a delay. Update logs in real-time.

Share Link: Generate a mock URL to share the build with external stakeholders. Copy to clipboard.

Create New Build

Button opens a modal:

Build name

Sandbox selection

Version

Associated workflow / agent

On submit:

Adds the new build to the list

Status: IN_PROGRESS initially

Logs panel shows build progress

Stats cards update automatically

Build Logs Panel

Show logs in real-time as build progresses.

Include timestamps and status messages.

Logs update for both existing and newly created builds.

UI / Grid Layout

Left: Build list / grid

Right: Logs panel

Top: Stats cards

Modal for live preview and new build creation

2. Folder Structure Updates
src/modules/sandbox/
│
├── pages/
│   └── demo-builds-page.tsx
│
├── components/
│   ├── build-card.tsx
│   ├── build-stats-card.tsx
│   ├── build-logs-panel.tsx
│   ├── build-actions.tsx
│   ├── build-preview-modal.tsx      // new
│   └── create-build-modal.tsx       // new
│
└── hooks/
    └── use-demo-builds-data.ts

3. Mock Data Enhancements

Each build includes:

previewUrl: string (mock iframe or sandbox route)

artifactLink: string

shareLink: string

Example:

{
  id: "DB-004",
  name: "New Frontend Demo",
  sandboxId: "SB-001",
  agentResponsible: "AG-001",
  linkedWorkflow: "WF-2004",
  version: "v1.0.3",
  status: "IN_PROGRESS",
  previewUrl: "/sandbox/previews/DB-004",
  artifactLink: "/downloads/DB-004.zip",
  shareLink: "https://ai-platform.demo/DB-004",
  logs: ["Build started"]
}

4. Component Enhancements

build-preview-modal.tsx

Shows live UI preview using iframe or mock component

Close button

Resizeable

create-build-modal.tsx

Input fields + dropdowns

On submit → updates build list + stats cards

build-actions.tsx

Connect buttons to mock handlers:

Download → toast

Trigger Rebuild → simulate status changes

Share Link → copy URL

5. Data Handling

Hook: use-demo-builds-data.ts

Responsibilities:

Provide full CRUD mock for demo builds

Update stats cards dynamically

Update logs panel in real-time

Simulate build progress and completion

6. UI / UX Requirements

Use ShadCN Cards, Modals, Toasts

Logs panel scrollable, live-updating

Status badges color-coded

Responsive: Desktop 4 columns, Tablet 2 columns, Mobile 1 column

Hover tooltips for agent, workflow, version

✅ Outcome:

Users can preview, download, rebuild, share, and create new builds.

Live logs panel shows current build progress.

Fully realistic, connected to sandbox, agents, and workflows