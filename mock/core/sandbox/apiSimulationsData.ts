
export type SimulationStatus = "SUCCESS" | "FAILED" | "IN_PROGRESS";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiSimulation {
  id: string;
  name: string;
  linkedSandbox: string;
  linkedBuild: string;
  linkedWorkflow: string;
  agentResponsible: string;
  method: HttpMethod;
  endpoint: string;
  requestPayload: any;
  responsePayload: any;
  status: SimulationStatus;
  logs: string[];
  timestamp: string;
}

export const apiSimulations: ApiSimulation[] = [
  {
    id: "API-001",
    name: "User Profile Retrieval",
    linkedSandbox: "SBX-101",
    linkedBuild: "DB-001",
    linkedWorkflow: "WF-2001",
    agentResponsible: "AG-001",
    method: "GET",
    endpoint: "/api/v1/users/profile",
    requestPayload: { userId: "USR-5001" },
    responsePayload: { 
      id: "USR-5001", 
      name: "John Doe", 
      role: "Developer", 
      status: "ACTIVE" 
    },
    status: "SUCCESS",
    logs: [
      "2026-02-13 10:00:00 - [INFO] Initializing request",
      "2026-02-13 10:00:01 - [INFO] Routing through SBX-101 Gateway",
      "2026-02-13 10:00:02 - [INFO] Authorization successful",
      "2026-02-13 10:00:03 - [INFO] Data retrieved from mock database",
      "2026-02-13 10:00:04 - [INFO] Response status: 200 OK"
    ],
    timestamp: "2026-02-13T10:00:04Z"
  },
  {
    id: "API-002",
    name: "Project Asset Upload",
    linkedSandbox: "SBX-102",
    linkedBuild: "DB-002",
    linkedWorkflow: "WF-2002",
    agentResponsible: "AG-002",
    method: "POST",
    endpoint: "/api/v1/assets/upload",
    requestPayload: { fileName: "logo.png", fileSize: "2MB", type: "image/png" },
    responsePayload: { error: "Storage quota exceeded", code: "STORAGE_FULL" },
    status: "FAILED",
    logs: [
      "2026-02-13 11:15:00 - [INFO] Starting file stream upload",
      "2026-02-13 11:15:02 - [INFO] Validating permissions",
      "2026-02-13 11:15:05 - [ERROR] Request failed: Storage quota exceeded",
      "2026-02-13 11:15:06 - [INFO] Response status: 403 Forbidden"
    ],
    timestamp: "2026-02-13T11:15:06Z"
  },
  {
    id: "API-003",
    name: "Workflow Step Update",
    linkedSandbox: "SBX-101",
    linkedBuild: "DB-001",
    linkedWorkflow: "WF-2003",
    agentResponsible: "AG-004",
    method: "PATCH",
    endpoint: "/api/v1/workflows/steps/42",
    requestPayload: { status: "COMPLETED", duration: "120s" },
    responsePayload: { success: true, updatedStepId: 42 },
    status: "SUCCESS",
    logs: [
      "2026-02-13 12:30:00 - [INFO] Patch request received",
      "2026-02-13 12:30:01 - [INFO] Updating internal state machine",
      "2026-02-13 12:30:02 - [INFO] Database write complete",
      "2026-02-13 12:30:03 - [INFO] Response status: 200 OK"
    ],
    timestamp: "2026-02-13T12:30:03Z"
  }
];
