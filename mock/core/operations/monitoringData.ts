export interface ServiceHealth {
  id: string;
  service: string;
  uptime: number;
  incidents: number;
  lastIncident: string;
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  load: number;
}

export interface AgentActivity {
  id: string;
  name: string;
  type: string;
  status: 'ACTIVE' | 'IDLE' | 'BUSY';
  currentTask?: string;
  load: number;
}

export interface WorkflowExecution {
  id: string;
  name: string;
  status: 'RUNNING' | 'COMPLETED' | 'FAILED';
  startTime: string;
  duration: string;
}

export interface MonitoringAlert {
  id: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  message: string;
  timestamp: string;
  service: string;
}

export const servicesHealth: ServiceHealth[] = [
  {
    id: "MON-001",
    service: "Workflow Engine",
    uptime: 99.4,
    incidents: 2,
    lastIncident: "2026-02-13T11:00:00Z",
    status: "HEALTHY",
    load: 45
  },
  {
    id: "MON-002",
    service: "Agent Orchestrator",
    uptime: 98.9,
    incidents: 5,
    lastIncident: "2026-02-14T04:30:00Z",
    status: "DEGRADED",
    load: 88
  },
  {
    id: "MON-003",
    service: "Deployment Service",
    uptime: 99.9,
    incidents: 0,
    lastIncident: "N/A",
    status: "HEALTHY",
    load: 12
  },
  {
    id: "MON-004",
    service: "API Gateway",
    uptime: 99.95,
    incidents: 1,
    lastIncident: "2026-02-10T09:15:00Z",
    status: "HEALTHY",
    load: 32
  }
];

export const uptimeHistory = [
  { day: "Mon", uptime: 99.8 },
  { day: "Tue", uptime: 99.5 },
  { day: "Wed", uptime: 98.2 },
  { day: "Thu", uptime: 99.9 },
  { day: "Fri", uptime: 99.7 },
  { day: "Sat", uptime: 99.4 },
  { day: "Sun", uptime: 99.6 },
];

export const agentsActivity: AgentActivity[] = [
  { id: "A-001", name: "Frontend Agent", type: "UI/UX", status: "BUSY", currentTask: "Optimizing landing page", load: 85 },
  { id: "A-002", name: "Backend Agent", type: "API", status: "ACTIVE", currentTask: "Syncing DB schema", load: 60 },
  { id: "A-003", name: "DevOps Agent", type: "Infra", status: "IDLE", load: 5 },
  { id: "A-004", name: "QA Agent", type: "Testing", status: "ACTIVE", currentTask: "Running regression suite", load: 40 },
];

export const workflowExecutions: WorkflowExecution[] = [
  { id: "WF-101", name: "Main CI Pipeline", status: "RUNNING", startTime: "2026-02-14T14:15:00Z", duration: "12m" },
  { id: "WF-102", name: "Daily Data Sync", status: "COMPLETED", startTime: "2026-02-14T02:00:00Z", duration: "45m" },
  { id: "WF-103", name: "Security Audit", status: "FAILED", startTime: "2026-02-13T23:30:00Z", duration: "5m" },
  { id: "WF-104", name: "Environment Provisioning", status: "RUNNING", startTime: "2026-02-14T14:25:00Z", duration: "2m" },
];

export const monitoringAlerts: MonitoringAlert[] = [
  { id: "AL-001", severity: "CRITICAL", message: "High latency detected in API Gateway", timestamp: "2026-02-14T14:28:00Z", service: "API Gateway" },
  { id: "AL-002", severity: "WARNING", message: "Agent Orchestrator memory usage > 90%", timestamp: "2026-02-14T14:10:00Z", service: "Agent Orchestrator" },
  { id: "AL-003", severity: "INFO", message: "Deployment of 'auth-service' completed", timestamp: "2026-02-14T13:45:00Z", service: "Deployment Service" },
];
