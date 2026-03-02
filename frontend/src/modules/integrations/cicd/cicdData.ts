export interface PipelineStage {
  id: string;
  name: string;
  status: 'SUCCESS' | 'FAILED' | 'IN_PROGRESS' | 'PENDING';
  duration?: string;
}

export interface Pipeline {
  id: string;
  name: string;
  platform: string;
  repository: string;
  linkedBuild: string;
  stages: PipelineStage[];
  successRate: number;
  lastExecution: string;
  status: 'SUCCESS' | 'FAILED' | 'IN_PROGRESS';
  logs: string[];
}

export const cicdData: Pipeline[] = [
  {
    id: "INT-CICD-001",
    name: "Frontend Build Pipeline",
    platform: "INT-PLT-001",
    repository: "REP-001",
    linkedBuild: "DB-001",
    stages: [
      { id: "S1", name: "Install Dependencies", status: "SUCCESS", duration: "1m 20s" },
      { id: "S2", name: "Run Tests", status: "SUCCESS", duration: "2m 45s" },
      { id: "S3", name: "Build", status: "SUCCESS", duration: "3m 10s" },
      { id: "S4", name: "Deploy", status: "SUCCESS", duration: "45s" }
    ],
    successRate: 87,
    lastExecution: "2026-02-13T18:00:00Z",
    status: "SUCCESS",
    logs: [
      "[18:00:01] Starting pipeline execution...",
      "[18:01:21] Dependencies installed successfully.",
      "[18:04:06] All tests passed (452 tests).",
      "[18:07:16] Build completed: dist/ folder generated.",
      "[18:08:01] Deployment successful to staging environment."
    ]
  },
  {
    id: "INT-CICD-002",
    name: "Backend Core Pipeline",
    platform: "INT-PLT-001",
    repository: "REP-002",
    linkedBuild: "DB-002",
    stages: [
      { id: "S1", name: "Linting", status: "SUCCESS", duration: "30s" },
      { id: "S2", name: "Unit Tests", status: "SUCCESS", duration: "5m 12s" },
      { id: "S3", name: "Integration Tests", status: "FAILED", duration: "10m 05s" },
      { id: "S4", name: "Dockerize", status: "PENDING" }
    ],
    successRate: 65,
    lastExecution: "2026-02-14T09:30:00Z",
    status: "FAILED",
    logs: [
      "[09:30:05] Starting backend pipeline...",
      "[09:30:35] Linting passed.",
      "[09:35:47] Unit tests passed.",
      "[09:45:52] ERROR: Integration tests failed at stage 'Database Connection'.",
      "[09:45:53] Pipeline aborted."
    ]
  },
  {
    id: "INT-CICD-003",
    name: "ML Models Training",
    platform: "INT-PLT-001",
    repository: "REP-003",
    linkedBuild: "DB-003",
    stages: [
      { id: "S1", name: "Data Validation", status: "SUCCESS", duration: "15m" },
      { id: "S2", name: "Model Training", status: "IN_PROGRESS", duration: "4h 20m" },
      { id: "S3", name: "Evaluation", status: "PENDING" },
      { id: "S4", name: "Model Export", status: "PENDING" }
    ],
    successRate: 92,
    lastExecution: "2026-02-14T11:00:00Z",
    status: "IN_PROGRESS",
    logs: [
      "[11:00:10] Training session started.",
      "[11:15:10] Data validation complete.",
      "[11:15:11] Epoch 1/50 started...",
      "[15:35:20] Epoch 42/50 in progress: Loss 0.024"
    ]
  }
];
