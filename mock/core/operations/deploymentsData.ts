export interface Deployment {
  id: string;
  projectId: string;
  projectName: string;
  pipelineId: string;
  buildId: string;
  environment: 'Production' | 'Staging' | 'Sandbox';
  cloudProvider: string;
  deployedBy: string;
  version: string;
  status: 'SUCCESS' | 'FAILED' | 'IN_PROGRESS' | 'ROLLBACK';
  deployedAt: string;
  rollbackAvailable: boolean;
  metrics: {
    cpuUsage: number;
    memoryUsage: number;
    latency: number;
  };
}

export interface DeploymentEvent {
  id: string;
  deploymentId: string;
  stage: 'Build' | 'Deploy' | 'Verify' | 'Release';
  status: 'COMPLETED' | 'FAILED' | 'IN_PROGRESS';
  timestamp: string;
}

export const deploymentsData: Deployment[] = [
  {
    id: "DEP-001",
    projectId: "PRJ-1001",
    projectName: "Auth Service",
    pipelineId: "INT-CICD-001",
    buildId: "DB-001",
    environment: "Production",
    cloudProvider: "AWS",
    deployedBy: "DevOps Agent",
    version: "v2.3.1",
    status: "SUCCESS",
    deployedAt: "2026-02-14T08:30:00Z",
    rollbackAvailable: true,
    metrics: { cpuUsage: 45, memoryUsage: 62, latency: 120 }
  },
  {
    id: "DEP-002",
    projectId: "PRJ-1002",
    projectName: "Data Pipeline",
    pipelineId: "INT-CICD-002",
    buildId: "DB-002",
    environment: "Staging",
    cloudProvider: "Azure",
    deployedBy: "DevOps Agent",
    version: "v1.4.0",
    status: "FAILED",
    deployedAt: "2026-02-14T09:15:00Z",
    rollbackAvailable: false,
    metrics: { cpuUsage: 0, memoryUsage: 0, latency: 0 }
  },
  {
    id: "DEP-003",
    projectId: "PRJ-1003",
    projectName: "Frontend Dashboard",
    pipelineId: "INT-CICD-003",
    buildId: "DB-003",
    environment: "Sandbox",
    cloudProvider: "GCP",
    deployedBy: "Frontend Agent",
    version: "v0.9.5-beta",
    status: "IN_PROGRESS",
    deployedAt: "2026-02-14T10:00:00Z",
    rollbackAvailable: false,
    metrics: { cpuUsage: 20, memoryUsage: 35, latency: 85 }
  },
  {
    id: "DEP-004",
    projectId: "PRJ-1001",
    projectName: "Auth Service",
    pipelineId: "INT-CICD-001",
    buildId: "DB-004",
    environment: "Production",
    cloudProvider: "AWS",
    deployedBy: "DevOps Agent",
    version: "v2.3.0",
    status: "ROLLBACK",
    deployedAt: "2026-02-14T07:00:00Z",
    rollbackAvailable: true,
    metrics: { cpuUsage: 42, memoryUsage: 58, latency: 115 }
  }
];

export const deploymentEvents: DeploymentEvent[] = [
  { id: "EVT-001", deploymentId: "DEP-001", stage: "Build", status: "COMPLETED", timestamp: "2026-02-14T08:10:00Z" },
  { id: "EVT-002", deploymentId: "DEP-001", stage: "Deploy", status: "COMPLETED", timestamp: "2026-02-14T08:20:00Z" },
  { id: "EVT-003", deploymentId: "DEP-001", stage: "Verify", status: "COMPLETED", timestamp: "2026-02-14T08:25:00Z" },
  { id: "EVT-004", deploymentId: "DEP-001", stage: "Release", status: "COMPLETED", timestamp: "2026-02-14T08:30:00Z" },
];

export const deploymentStats = {
  totalDeployments: 145,
  successRate: 94.2,
  failedReleases: 6,
  rollbacks: 2
};

export const environmentHealth = [
  { environment: "Production", status: "HEALTHY", activeDeployments: 12, uptime: "99.99%" },
  { environment: "Staging", status: "DEGRADED", activeDeployments: 8, uptime: "98.5%" },
  { environment: "Sandbox", status: "HEALTHY", activeDeployments: 24, uptime: "99.2%" },
];
