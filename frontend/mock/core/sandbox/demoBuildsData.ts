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
  previewUrl: string;
  artifactLink: string;
  shareLink: string;
}

export const demoBuilds: DemoBuild[] = [
  {
    id: "DB-001",
    name: "Frontend Demo Build",
    sandboxId: "SBX-101",
    agentResponsible: "AG-001",
    linkedWorkflow: "WF-2001",
    version: "v1.0.2",
    status: "SUCCESS",
    createdAt: "2026-02-12T09:30:00Z",
    updatedAt: "2026-02-12T10:00:00Z",
    previewUrl: "https://sandbox.ai-platform.com/preview/db-001",
    artifactLink: "/downloads/DB-001.zip",
    shareLink: "https://ai-platform.demo/DB-001",
    logs: [
      "2026-02-12 09:30:00 - [INFO] Build started",
      "2026-02-12 09:32:15 - [INFO] Installing dependencies",
      "2026-02-12 09:35:40 - [INFO] Compiling source code",
      "2026-02-12 09:45:10 - [INFO] Running unit tests",
      "2026-02-12 09:55:00 - [INFO] Packaging artifacts",
      "2026-02-12 10:00:00 - [INFO] Build successful"
    ]
  },
  {
    id: "DB-002",
    name: "Backend API Demo Build",
    sandboxId: "SBX-102",
    agentResponsible: "AG-002",
    linkedWorkflow: "WF-2002",
    version: "v1.0.1",
    status: "FAILED",
    createdAt: "2026-02-12T11:00:00Z",
    updatedAt: "2026-02-12T11:30:00Z",
    previewUrl: "https://sandbox.ai-platform.com/preview/db-002",
    artifactLink: "/downloads/DB-002.zip",
    shareLink: "https://ai-platform.demo/DB-002",
    logs: [
      "2026-02-12 11:00:00 - [INFO] Build started",
      "2026-02-12 11:05:20 - [INFO] Validating schema",
      "2026-02-12 11:15:45 - [ERROR] Dependency error: pg-native not found",
      "2026-02-12 11:30:00 - [FATAL] Build failed"
    ]
  },
  {
    id: "DB-003",
    name: "FullStack Demo Build",
    sandboxId: "SBX-101",
    agentResponsible: "AG-004",
    linkedWorkflow: "WF-2003",
    version: "v0.9.8",
    status: "IN_PROGRESS",
    createdAt: "2026-02-12T12:00:00Z",
    updatedAt: "2026-02-12T12:20:00Z",
    previewUrl: "https://sandbox.ai-platform.com/preview/db-003",
    artifactLink: "/downloads/DB-003.zip",
    shareLink: "https://ai-platform.demo/DB-003",
    logs: [
      "2026-02-12 12:00:00 - [INFO] Build started",
      "2026-02-12 12:05:00 - [INFO] Initializing environment",
      "2026-02-12 12:15:00 - [INFO] Compiling backend modules",
      "2026-02-12 12:20:00 - [INFO] Bundling frontend assets..."
    ]
  }
];
