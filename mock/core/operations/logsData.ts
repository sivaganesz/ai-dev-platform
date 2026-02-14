export type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
export type LogSource = 'Deployment Service' | 'Agent Orchestrator' | 'CI/CD Pipeline' | 'Workflow Engine' | 'Frontend Agent' | 'Backend Agent';

export interface LogEntry {
  id: string;
  source: LogSource;
  referenceId: string;
  level: LogLevel;
  message: string;
  timestamp: string;
  resolved?: boolean;
  metadata?: Record<string, any>;
  stackTrace?: string;
}

export const logsData: LogEntry[] = [
  {
    id: "LOG-001",
    source: "Deployment Service",
    referenceId: "DEP-001",
    level: "ERROR",
    message: "Container failed to start: health check timeout",
    timestamp: "2026-02-14T08:32:00Z",
    resolved: false,
    stackTrace: `Error: Health check failed after 30s
  at checkHealth (deploy-service/src/health.ts:12:5)
  at async deploy (deploy-service/src/index.ts:45:2)`
  },
  {
    id: "LOG-002",
    source: "Frontend Agent",
    referenceId: "A-001",
    level: "INFO",
    message: "Started landing page optimization task",
    timestamp: "2026-02-14T14:15:00Z",
    metadata: { taskId: "TASK-456", duration: "120ms" }
  },
  {
    id: "LOG-003",
    source: "CI/CD Pipeline",
    referenceId: "PIPE-088",
    level: "WARN",
    message: "Dependency 'lodash' has known security vulnerability (CVE-2024-XXXX)",
    timestamp: "2026-02-14T14:20:00Z",
    metadata: { package: "lodash", version: "4.17.21" }
  },
  {
    id: "LOG-004",
    source: "Agent Orchestrator",
    referenceId: "ORCH-99",
    level: "DEBUG",
    message: "Rebalancing agent loads across cluster 'us-east-1'",
    timestamp: "2026-02-14T14:25:00Z"
  },
  {
    id: "LOG-005",
    source: "Workflow Engine",
    referenceId: "WF-101",
    level: "INFO",
    message: "Workflow 'Main CI Pipeline' triggered by commit 'abc1234'",
    timestamp: "2026-02-14T14:15:10Z"
  },
  {
    id: "LOG-006",
    source: "Backend Agent",
    referenceId: "A-002",
    level: "ERROR",
    message: "Failed to connect to database: Connection refused",
    timestamp: "2026-02-14T14:28:30Z",
    resolved: false,
    stackTrace: `MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
  at connectionFailure (mongodb/lib/core/connection.js:123:10)`
  }
];

export const logStats = {
  totalLogs: 12540,
  errorCount: 42,
  warningCount: 128,
  volumeTrend: "+5% vs yesterday"
};
