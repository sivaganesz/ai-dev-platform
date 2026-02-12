export interface Workflow {
  id: string;
  projectId: string;
  name: string;
  status: "RUNNING" | "COMPLETED" | "FAILED";
  timestamp: string;
}

export const workflowsData: Workflow[] = [
  { id: "w1", projectId: "p1", name: "Deploy Frontend", status: "COMPLETED", timestamp: "2026-02-12T10:00:00Z" },
  { id: "w2", projectId: "p1", name: "Build Assets", status: "RUNNING", timestamp: "2026-02-13T08:00:00Z" },
  { id: "w3", projectId: "p4", name: "Run Unit Tests", status: "FAILED", timestamp: "2026-02-12T15:30:00Z" },
  { id: "w4", projectId: "p5", name: "CI Pipeline", status: "COMPLETED", timestamp: "2026-02-11T09:00:00Z" },
  { id: "w5", projectId: "p5", name: "Security Scan", status: "RUNNING", timestamp: "2026-02-13T10:15:00Z" },
];
