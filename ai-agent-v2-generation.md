🧠 AI AGENTS MODULE — PROMPT ARCHITECTURE

We follow the final architecture you confirmed:

AI AGENTS MODULE
│
├── Layer 1 → Core Intelligence (System Layer)
└── Layer 2 → Agent Execution (Submodules)

📁 FOLDER STRUCTURE
/docs/prompts/agents/
│
├── 01-agents-overview.md
├── 02-agent-profile-schema.md
├── 03-agent-activities.md
├── 04-agent-performance.md
├── 05-agent-workflows.md
├── 06-agent-deployments.md
├── 07-agents-ui-pages.md
│
└── /types/
    ├── frontend-agent.md
    ├── backend-agent.md
    ├── qa-agent.md
    ├── devops-agent.md
    └── ux-agent.md

🔗 GLOBAL DATA ALIGNMENT (VERY IMPORTANT)

All mock data matches existing modules:

Module	Linked Field
Dashboard	agentMetrics
Projects	projectId
Workflows	workflowId
Tasks	taskId
Deployments	deploymentId
🧾 SHARED MOCK IDS (USE EVERYWHERE)
projectId: PRJ-1001 → AI Dev Platform
projectId: PRJ-1002 → Sales Automation AI

workflowId: WF-2001 → Feature Development Flow
workflowId: WF-2002 → Bug Fix Flow

agentIds:
AG-001 → Frontend Agent
AG-002 → Backend Agent
AG-003 → QA Agent
AG-004 → DevOps Agent
AG-005 → UX Agent


These IDs must remain consistent across:

Dashboard charts

Workflow executions

Agent logs

Deployment reports

📄 LAYER 1 — CORE SYSTEM PROMPTS
01-agents-overview.md

Purpose: Central intelligence dashboard for all agents.

Prompt Content
Generate an AI Agents Overview System for an AI Development Platform.

Display:

1. Total Active Agents
2. Agents by Type
3. Running Executions
4. Failed Executions
5. Linked Projects
6. Linked Workflows

Agents List:

| Agent ID | Name | Type | Status | Active Workflow | Project |

Mock Data:

AG-001 | Frontend Agent | Engineering | Active | WF-2001 | PRJ-1001
AG-002 | Backend Agent  | Engineering | Active | WF-2001 | PRJ-1001
AG-003 | QA Agent       | Testing     | Active | WF-2002 | PRJ-1001
AG-004 | DevOps Agent   | Deployment  | Idle   | —       | PRJ-1001
AG-005 | UX Agent       | Design      | Active | WF-2001 | PRJ-1002

02-agent-profile-schema.md

Defines agent data model.

Agent Profile Schema:

agentId: string
agentName: string
agentType: Engineering | Testing | DevOps | Design
status: Active | Idle | Failed
projectIds: string[]
workflowIds: string[]
executionCount: number
successRate: %
avgCompletionTime: duration
lastExecutionAt: datetime
deploymentLinked: boolean

03-agent-activities.md

Tracks execution logs.

Generate Agent Activity Logs.

Fields:

activityId
agentId
workflowId
taskId
action
status
duration
timestamp

Mock Data
ACT-9001
Agent: AG-001
Workflow: WF-2001
Task: UI Component Build
Status: Completed
Duration: 12m

04-agent-performance.md

Performance metrics engine.

Metrics:

tasksCompleted
tasksFailed
successRate
avgExecutionTime
bugsIntroduced
deploymentsSupported


Mock:

Agent	Success	Avg Time
AG-001	96%	14m
AG-002	94%	18m
AG-003	98%	9m
05-agent-workflows.md

Maps agents ↔ workflows.

WF-2001 → Feature Development Flow

Agents Involved:
AG-005 → UX Design
AG-001 → Frontend Build
AG-002 → Backend APIs
AG-003 → QA Testing
AG-004 → Deployment


Execution Order must match Workflow Module.

06-agent-deployments.md

Tracks release participation.

Deployment ID: DEP-3001
Project: PRJ-1001

Agents:

AG-001 → UI Build
AG-002 → API Services
AG-004 → CI/CD Pipeline

07-agents-ui-pages.md

Defines UI routes (matches your sidebar).

/agents → Overview
/agents/frontend
/agents/backend
/agents/qa
/agents/devops
/agents/ux


Each page must include:

Agent summary

Executions

Linked workflows

Performance charts

Deployment history

⚙️ LAYER 2 — EXECUTION PROMPTS

Now the serious part — behavior intelligence.

📄 /types/frontend-agent.md
Agent Name: Frontend Agent
Agent ID: AG-001

Purpose:
Automates UI development lifecycle.

Capabilities:

• Convert UX wireframes → React components
• Build responsive layouts
• Integrate APIs
• Optimize performance
• Fix UI bugs

Execution Flow:

Input:
Design files + task specs

Process:
1. Parse UX assets
2. Generate component tree
3. Apply styling system
4. Bind APIs

Output:
Production-ready UI modules

Linked Workflows:
WF-2001 Feature Development

Linked Project:
PRJ-1001 AI Dev Platform

📄 /types/backend-agent.md
Agent Name: Backend Agent
Agent ID: AG-002

Purpose:
Handles server-side architecture.

Capabilities:

• API generation
• DB schema design
• Auth systems
• Microservices
• Event streaming

Execution:

Input:
Feature spec

Output:
REST/GraphQL services

Tech Stack:
Node.js / Go / Kafka

Workflow:
WF-2001

📄 /types/qa-agent.md
Agent Name: QA Agent
Agent ID: AG-003

Purpose:
Automated testing orchestration.

Capabilities:

• Unit testing
• Integration testing
• UI automation
• Performance testing
• Regression suites

Execution Flow:

Triggers after:
AG-001 + AG-002 completion

Workflow:
WF-2002 Bug Fix Flow

📄 /types/devops-agent.md
Agent Name: DevOps Agent
Agent ID: AG-004

Purpose:
Deployment + infrastructure automation.

Capabilities:

• CI/CD pipelines
• Docker builds
• Kubernetes deploy
• Monitoring setup
• Rollbacks

Deployment Target:
AWS / GCP / Azure

📄 /types/ux-agent.md
Agent Name: UX Agent
Agent ID: AG-005

Purpose:
Design intelligence system.

Capabilities:

• Wireframe generation
• Design systems
• Accessibility audits
• Interaction design
• User journey mapping

Output:
Figma / JSON design tokens

Feeds → Frontend Agent

🔗 CROSS-MODULE DATA CONSISTENCY
Agent	Project	Workflow	Dashboard Ref
AG-001	PRJ-1001	WF-2001	UI Tasks
AG-002	PRJ-1001	WF-2001	API Tasks
AG-003	PRJ-1001	WF-2002	Test Runs
AG-004	PRJ-1001	Deploy	Releases
AG-005	PRJ-1002	WF-2001	Designs

No ID conflicts. No mismatch. All aligned.

✅ What You Now Have

You now have:

Core intelligence prompts (7 files)

Execution prompts (5 files)

Folder structure

Global IDs

Workflow mapping

Deployment linkage

UI routing

This matches:

Dashboard

Projects

Workflows