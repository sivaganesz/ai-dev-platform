
export type PreviewStatus = "RUNNING" | "STOPPED" | "ERROR";

export interface LivePreview {
  id: string;
  name: string;
  sandboxId: string; // SB-001, SB-002
  url: string;
  status: PreviewStatus;
  lastUpdated: string;
  version: string;
  agentResponsible: string; // AG-001, AG-002
  linkedWorkflow: string; // WF-2001
}

export interface PreviewVersion {
  id: string;
  previewId: string;
  version: string;
  updatedAt: string;
  notes: string;
  agentId: string;
}

export interface PreviewActivity {
  id: string;
  previewId: string;
  previewName: string;
  action: "START" | "STOP" | "UPDATE" | "ERROR";
  agentId: string;
  timestamp: string;
  details?: string;
}

export const liveUIPreviews: LivePreview[] = [
  {
    id: "LP-001",
    name: "Frontend Sandbox Preview",
    sandboxId: "SB-001",
    url: "https://sandbox.ai-platform.com/frontend-preview",
    status: "RUNNING",
    lastUpdated: "2026-02-12T10:45:00Z",
    version: "v1.0.3",
    agentResponsible: "AG-001",
    linkedWorkflow: "WF-2001"
  },
  {
    id: "LP-002",
    name: "Backend API Preview",
    sandboxId: "SB-002",
    url: "https://sandbox.ai-platform.com/backend-preview",
    status: "STOPPED",
    lastUpdated: "2026-02-12T11:05:00Z",
    version: "v1.0.1",
    agentResponsible: "AG-002",
    linkedWorkflow: "WF-2002"
  },
  {
    id: "LP-003",
    name: "FullStack Demo Preview",
    sandboxId: "SB-003",
    url: "https://sandbox.ai-platform.com/fullstack-preview",
    status: "ERROR",
    lastUpdated: "2026-02-11T16:50:00Z",
    version: "v0.9.5",
    agentResponsible: "AG-004",
    linkedWorkflow: "WF-2003"
  }
];

export const previewVersionHistory: PreviewVersion[] = [
  {
    id: "PV-001",
    previewId: "LP-001",
    version: "v1.0.3",
    updatedAt: "2026-02-12T10:45:00Z",
    notes: "Updated UI theme to match corporate standards.",
    agentId: "AG-001"
  },
  {
    id: "PV-002",
    previewId: "LP-001",
    version: "v1.0.2",
    updatedAt: "2026-02-11T09:30:00Z",
    notes: "Fixed navigation bug in mobile view.",
    agentId: "AG-001"
  },
  {
    id: "PV-003",
    previewId: "LP-002",
    version: "v1.0.1",
    updatedAt: "2026-02-12T11:05:00Z",
    notes: "Added new endpoints for user authentication.",
    agentId: "AG-002"
  }
];

export const previewActivities: PreviewActivity[] = [
  {
    id: "LPA-001",
    previewId: "LP-001",
    previewName: "Frontend Sandbox Preview",
    action: "START",
    agentId: "AG-001",
    timestamp: "2026-02-12T10:45:00Z",
    details: "Preview environment started successfully."
  },
  {
    id: "LPA-002",
    previewId: "LP-002",
    previewName: "Backend API Preview",
    action: "STOP",
    agentId: "AG-002",
    timestamp: "2026-02-12T11:05:00Z",
    details: "Manual stop requested by agent."
  },
  {
    id: "LPA-003",
    previewId: "LP-003",
    previewName: "FullStack Demo Preview",
    action: "ERROR",
    agentId: "AG-004",
    timestamp: "2026-02-11T16:50:00Z",
    details: "Connection timeout while fetching resources."
  }
];
