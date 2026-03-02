export type SandboxStatus = "ACTIVE" | "INACTIVE" | "FAILED";

export interface SandboxActivity {
  id: string;
  sandboxId: string;
  sandboxName: string;
  taskName: string;
  status: "SUCCESS" | "FAILED" | "IN_PROGRESS";
  timestamp: string;
}

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
  },
  {
    id: "SB-004",
    name: "Microservice Sandbox",
    type: "Backend",
    status: "FAILED",
    lastExecuted: "2026-02-10T09:15:00Z",
    linkedAgents: ["AG-006"],
    linkedWorkflows: ["WF-2004"],
    recentTasks: ["Deployment test"]
  }
];

export const sandboxActivities: SandboxActivity[] = [
  {
    id: "ACT-001",
    sandboxId: "SB-001",
    sandboxName: "Frontend Sandbox",
    taskName: "UI component test",
    status: "SUCCESS",
    timestamp: "2026-02-12T10:30:00Z"
  },
  {
    id: "ACT-002",
    sandboxId: "SB-002",
    sandboxName: "Backend Sandbox",
    taskName: "API endpoint test",
    status: "SUCCESS",
    timestamp: "2026-02-12T11:00:00Z"
  },
  {
    id: "ACT-003",
    sandboxId: "SB-004",
    sandboxName: "Microservice Sandbox",
    taskName: "Deployment test",
    status: "FAILED",
    timestamp: "2026-02-10T09:15:00Z"
  },
  {
    id: "ACT-004",
    sandboxId: "SB-001",
    sandboxName: "Frontend Sandbox",
    taskName: "Integration API call",
    status: "SUCCESS",
    timestamp: "2026-02-12T09:45:00Z"
  },
  {
    id: "ACT-005",
    sandboxId: "SB-002",
    sandboxName: "Backend Sandbox",
    taskName: "Database migration test",
    status: "IN_PROGRESS",
    timestamp: "2026-02-12T11:15:00Z"
  }
];
