Demo Builds Module – Phase 1 (UI + Live Preview + Actions)

Goal: Build the interactive UI, live preview modal, and functional buttons (Download, Trigger Rebuild, Share Link).

1. Pages

demo-builds-page.tsx – main page showing builds, stats cards, and logs panel

2. Components

build-card.tsx – each build’s overview card

build-actions.tsx – buttons for Download, Rebuild, Share Link

build-preview-modal.tsx – live preview modal (iframe / sandbox route)

build-stats-card.tsx – top-level summary: Total Builds, Success Rate, Active Builds

build-logs-panel.tsx – logs panel showing each build’s real-time logs

3. Hooks

use-demo-builds-data.ts – handles fetching, updating, and simulating build progress

4. Mock Data Example
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

5. Interactivity

Preview UI: Opens modal with live preview

Download Artifact: Simulate download + toast notification

Trigger Rebuild: Updates status dynamically + updates logs in real-time

Share Link: Copy mock URL to clipboard

Demo Builds Module – Phase 2 (Create Build + Real-time Logs)

Goal: Add Create New Build functionality and make logs fully dynamic

1. Components

create-build-modal.tsx – modal for creating new build

Fields: Build Name, Sandbox, Version, Linked Workflow, Agent

On submit: adds build, sets IN_PROGRESS, updates logs & stats

2. Hook Enhancements

use-demo-builds-data.ts

Handles adding new builds

Updates logs panel live

Updates stats cards dynamically

3. Logs Panel

Displays logs per build

Real-time updates simulating build progress: IN_PROGRESS → SUCCESS/FAILED

Scrollable, timestamps included

4. Layout

Left: Build cards / grid

Right: Logs panel

Top: Stats cards

Modals: Preview UI + Create Build

✅ Outcome

Fully interactive Demo Builds page

Live preview of build UI (left side)

Functional buttons: Download, Rebuild, Share

Create New Build flow with modal

Real-time logs panel showing build progression

Connected to sandbox, workflows, and agents