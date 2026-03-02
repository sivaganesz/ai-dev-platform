export interface APIKey {
  id: string;
  name: string;
  scope: string;
  owner: string;
  createdDate: string;
  expiryDate: string;
  status: 'ACTIVE' | 'EXPIRED' | 'REVOKED';
  lastUsed: string;
  environment: 'Development' | 'Sandbox' | 'Staging' | 'Production';
  permissions: ('READ' | 'WRITE' | 'EXECUTE' | 'ADMIN')[];
  keyId: string; // Friendly short ID like key_abcd1234
}

export interface KeyScope {
  name: string;
  count: number;
  lastExecution: string;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface KeyActivityLog {
  id: string;
  keyId: string;
  module: string;
  action: string;
  status: 'SUCCESS' | 'FAILED';
  timestamp: string;
  ipAddress: string;
}

export const apiKeysData: APIKey[] = [
  {
    id: "AK-001",
    name: "Agents Execution Key",
    keyId: "key_agt_8829",
    scope: "AI Agents",
    owner: "Peter Johnson",
    createdDate: "2026-01-10",
    expiryDate: "2026-04-10",
    status: "ACTIVE",
    lastUsed: "2026-02-14T10:30:00Z",
    environment: "Production",
    permissions: ["EXECUTE", "READ"]
  },
  {
    id: "AK-002",
    name: "Workflow Trigger Key",
    keyId: "key_wf_1102",
    scope: "Workflows",
    owner: "System",
    createdDate: "2026-01-15",
    expiryDate: "2026-03-15",
    status: "ACTIVE",
    lastUsed: "2026-02-14T09:15:00Z",
    environment: "Staging",
    permissions: ["EXECUTE"]
  },
  {
    id: "AK-003",
    name: "Sandbox Runner Key",
    keyId: "key_sbx_4491",
    scope: "Sandbox",
    owner: "Alice Smith",
    createdDate: "2026-02-01",
    expiryDate: "2026-05-01",
    status: "ACTIVE",
    lastUsed: "2026-02-13T17:00:00Z",
    environment: "Sandbox",
    permissions: ["READ", "WRITE", "EXECUTE"]
  },
  {
    id: "AK-004",
    name: "GitHub Sync Key",
    keyId: "key_git_0023",
    scope: "Integrations",
    owner: "DevOps Agent",
    createdDate: "2025-11-10",
    expiryDate: "2026-02-10",
    status: "EXPIRED",
    lastUsed: "2026-02-10T23:59:00Z",
    environment: "Production",
    permissions: ["READ", "WRITE"]
  },
  {
    id: "AK-005",
    name: "Demo Build Key",
    keyId: "key_db_7712",
    scope: "Demo Builds",
    owner: "Sarah Lee",
    createdDate: "2026-02-10",
    expiryDate: "2026-05-10",
    status: "ACTIVE",
    lastUsed: "2026-02-14T11:45:00Z",
    environment: "Development",
    permissions: ["EXECUTE"]
  },
  {
    id: "AK-006",
    name: "Legacy Analytics Key",
    keyId: "key_leg_9901",
    scope: "Monitoring & Logs",
    owner: "System",
    createdDate: "2025-08-10",
    expiryDate: "2025-11-10",
    status: "REVOKED",
    lastUsed: "2025-11-05T14:20:00Z",
    environment: "Production",
    permissions: ["READ"]
  }
];

export const keyScopes: KeyScope[] = [
  { name: "AI Agents", count: 5, lastExecution: "2 mins ago", riskLevel: "HIGH" },
  { name: "Workflows", count: 3, lastExecution: "1 hour ago", riskLevel: "MEDIUM" },
  { name: "Governance Systems", count: 2, lastExecution: "Yesterday", riskLevel: "HIGH" },
  { name: "Sandbox Environments", count: 8, lastExecution: "4 hours ago", riskLevel: "LOW" },
  { name: "Integrations", count: 4, lastExecution: "3 days ago", riskLevel: "MEDIUM" }
];

export const keyActivityLogs: KeyActivityLog[] = [
  { id: "L-001", keyId: "key_agt_8829", module: "AI Agents", action: "Execution", status: "SUCCESS", timestamp: "2026-02-14T10:30:00Z", ipAddress: "192.168.1.45" },
  { id: "L-002", keyId: "key_wf_1102", module: "Workflows", action: "Trigger", status: "SUCCESS", timestamp: "2026-02-14T09:15:00Z", ipAddress: "10.0.0.12" },
  { id: "L-003", keyId: "key_db_7712", module: "Demo Builds", action: "Access", status: "FAILED", timestamp: "2026-02-14T11:45:00Z", ipAddress: "45.22.11.9" },
  { id: "L-004", keyId: "key_agt_8829", module: "AI Agents", action: "Execution", status: "SUCCESS", timestamp: "2026-02-14T10:25:00Z", ipAddress: "192.168.1.45" }
];

export const keyUsageStats = [
  { name: 'Feb 08', executions: 450 },
  { name: 'Feb 09', executions: 520 },
  { name: 'Feb 10', executions: 840 },
  { name: 'Feb 11', executions: 610 },
  { name: 'Feb 12', executions: 720 },
  { name: 'Feb 13', executions: 980 },
  { name: 'Feb 14', executions: 1240 },
];

export const apiKeysSummary = {
  total: 24,
  active: 18,
  expired: 4,
  revoked: 2
};
