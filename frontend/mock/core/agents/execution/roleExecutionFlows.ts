export type ExecutionStatus = "COMPLETED" | "IN_PROGRESS" | "PENDING" | "FAILED";

export interface RoleExecutionNode {
  id: string;
  agentId: string;
  stageName: string;
  inputArtifact: string;
  outputArtifact: string;
  status: ExecutionStatus;
  timestamp: string;
}

export interface RoleExecutionEdge {
  fromStageId: string;
  toStageId: string;
  handoffType: "INTERNAL" | "EXTERNAL";
}

export interface AgentFlow {
  agentId: string;
  nodes: RoleExecutionNode[];
  edges: RoleExecutionEdge[];
}

export const roleExecutionFlows: Record<string, AgentFlow> = {
  "AG-001": {
    agentId: "AG-001",
    nodes: [
      { id: "fe-1", agentId: "AG-001", stageName: "UX Design", inputArtifact: "Figma Link", outputArtifact: "UI Specs", status: "COMPLETED", timestamp: "2026-02-13T09:00:00Z" },
      { id: "fe-2", agentId: "AG-001", stageName: "UI Implementation", inputArtifact: "UI Specs", outputArtifact: "JSX/CSS", status: "COMPLETED", timestamp: "2026-02-13T10:00:00Z" },
      { id: "fe-3", agentId: "AG-001", stageName: "Component Development", inputArtifact: "JSX/CSS", outputArtifact: "React Components", status: "IN_PROGRESS", timestamp: "2026-02-13T11:00:00Z" },
      { id: "fe-4", agentId: "AG-001", stageName: "State Integration", inputArtifact: "React Components", outputArtifact: "Wired UI", status: "PENDING", timestamp: "" },
      { id: "fe-5", agentId: "AG-001", stageName: "API Binding", inputArtifact: "Wired UI", outputArtifact: "Functional Frontend", status: "PENDING", timestamp: "" },
      { id: "fe-6", agentId: "AG-001", stageName: "Handoff → Backend", inputArtifact: "Functional Frontend", outputArtifact: "Integration Contract", status: "PENDING", timestamp: "" },
    ],
    edges: [
      { fromStageId: "fe-1", toStageId: "fe-2", handoffType: "INTERNAL" },
      { fromStageId: "fe-2", toStageId: "fe-3", handoffType: "INTERNAL" },
      { fromStageId: "fe-3", toStageId: "fe-4", handoffType: "INTERNAL" },
      { fromStageId: "fe-4", toStageId: "fe-5", handoffType: "INTERNAL" },
      { fromStageId: "fe-5", toStageId: "fe-6", handoffType: "EXTERNAL" },
    ]
  },
  "AG-002": {
    agentId: "AG-002",
    nodes: [
      { id: "be-1", agentId: "AG-002", stageName: "Receives UI Contracts", inputArtifact: "UI Contract", outputArtifact: "API Spec", status: "COMPLETED", timestamp: "2026-02-13T10:30:00Z" },
      { id: "be-2", agentId: "AG-002", stageName: "API Development", inputArtifact: "API Spec", outputArtifact: "REST Endpoints", status: "COMPLETED", timestamp: "2026-02-13T11:30:00Z" },
      { id: "be-3", agentId: "AG-002", stageName: "Business Logic", inputArtifact: "REST Endpoints", outputArtifact: "Services", status: "IN_PROGRESS", timestamp: "2026-02-13T12:00:00Z" },
      { id: "be-4", agentId: "AG-002", stageName: "Database Integration", inputArtifact: "Services", outputArtifact: "Data Layer", status: "PENDING", timestamp: "" },
      { id: "be-5", agentId: "AG-002", stageName: "Security Implementation", inputArtifact: "Data Layer", outputArtifact: "Secure API", status: "PENDING", timestamp: "" },
      { id: "be-6", agentId: "AG-002", stageName: "Handoff → QA", inputArtifact: "Secure API", outputArtifact: "QA Build", status: "PENDING", timestamp: "" },
    ],
    edges: [
      { fromStageId: "be-1", toStageId: "be-2", handoffType: "INTERNAL" },
      { fromStageId: "be-2", toStageId: "be-3", handoffType: "INTERNAL" },
      { fromStageId: "be-3", toStageId: "be-4", handoffType: "INTERNAL" },
      { fromStageId: "be-4", toStageId: "be-5", handoffType: "INTERNAL" },
      { fromStageId: "be-5", toStageId: "be-6", handoffType: "EXTERNAL" },
    ]
  },
  "AG-003": {
    agentId: "AG-003",
    nodes: [
      { id: "qa-1", agentId: "AG-003", stageName: "Receives Build", inputArtifact: "Dev Build", outputArtifact: "Test Environment", status: "COMPLETED", timestamp: "2026-02-13T11:15:00Z" },
      { id: "qa-2", agentId: "AG-003", stageName: "Test Case Generation", inputArtifact: "Requirements", outputArtifact: "Test Suite", status: "COMPLETED", timestamp: "2026-02-13T12:00:00Z" },
      { id: "qa-3", agentId: "AG-003", stageName: "Automation Execution", inputArtifact: "Test Suite", outputArtifact: "Execution Results", status: "IN_PROGRESS", timestamp: "2026-02-13T12:30:00Z" },
      { id: "qa-4", agentId: "AG-003", stageName: "Bug Detection", inputArtifact: "Execution Results", outputArtifact: "Bug Reports", status: "PENDING", timestamp: "" },
      { id: "qa-5", agentId: "AG-003", stageName: "Regression Testing", inputArtifact: "Fixes", outputArtifact: "Stability Report", status: "PENDING", timestamp: "" },
      { id: "qa-6", agentId: "AG-003", stageName: "Validation Report", inputArtifact: "Full Results", outputArtifact: "Quality Sign-off", status: "PENDING", timestamp: "" },
    ],
    edges: [
      { fromStageId: "qa-1", toStageId: "qa-2", handoffType: "INTERNAL" },
      { fromStageId: "qa-2", toStageId: "qa-3", handoffType: "INTERNAL" },
      { fromStageId: "qa-3", toStageId: "qa-4", handoffType: "INTERNAL" },
      { fromStageId: "qa-4", toStageId: "qa-5", handoffType: "INTERNAL" },
      { fromStageId: "qa-5", toStageId: "qa-6", handoffType: "INTERNAL" },
    ]
  },
  "AG-004": {
    agentId: "AG-004",
    nodes: [
      { id: "do-1", agentId: "AG-004", stageName: "QA Approved Build", inputArtifact: "QA Sign-off", outputArtifact: "Release Candidate", status: "COMPLETED", timestamp: "2026-02-12T16:00:00Z" },
      { id: "do-2", agentId: "AG-004", stageName: "CI Pipeline Trigger", inputArtifact: "RC", outputArtifact: "Build Artifacts", status: "COMPLETED", timestamp: "2026-02-12T16:30:00Z" },
      { id: "do-3", agentId: "AG-004", stageName: "Containerization", inputArtifact: "Artifacts", outputArtifact: "Docker Images", status: "COMPLETED", timestamp: "2026-02-12T16:45:00Z" },
      { id: "do-4", agentId: "AG-004", stageName: "Infra Provisioning", inputArtifact: "IaC Scripts", outputArtifact: "Cloud Resources", status: "COMPLETED", timestamp: "2026-02-12T17:00:00Z" },
      { id: "do-5", agentId: "AG-004", stageName: "Deployment Release", inputArtifact: "Images", outputArtifact: "Live App", status: "COMPLETED", timestamp: "2026-02-12T17:30:00Z" },
      { id: "do-6", agentId: "AG-004", stageName: "Monitoring & Alerts", inputArtifact: "Live App", outputArtifact: "Metrics/Logs", status: "IN_PROGRESS", timestamp: "2026-02-12T18:00:00Z" },
    ],
    edges: [
      { fromStageId: "do-1", toStageId: "do-2", handoffType: "INTERNAL" },
      { fromStageId: "do-2", toStageId: "do-3", handoffType: "INTERNAL" },
      { fromStageId: "do-3", toStageId: "do-4", handoffType: "INTERNAL" },
      { fromStageId: "do-4", toStageId: "do-5", handoffType: "INTERNAL" },
      { fromStageId: "do-5", toStageId: "do-6", handoffType: "INTERNAL" },
    ]
  },
  "AG-005": {
    agentId: "AG-005",
    nodes: [
      { id: "ux-1", agentId: "AG-005", stageName: "Requirement Intake", inputArtifact: "User Stories", outputArtifact: "Product Brief", status: "COMPLETED", timestamp: "2026-02-13T08:00:00Z" },
      { id: "ux-2", agentId: "AG-005", stageName: "User Research", inputArtifact: "Product Brief", outputArtifact: "User Personas", status: "COMPLETED", timestamp: "2026-02-13T08:30:00Z" },
      { id: "ux-3", agentId: "AG-005", stageName: "Wireframe Creation", inputArtifact: "Personas", outputArtifact: "Low-fi Wireframes", status: "COMPLETED", timestamp: "2026-02-13T09:00:00Z" },
      { id: "ux-4", agentId: "AG-005", stageName: "Design System Setup", inputArtifact: "Wireframes", outputArtifact: "UI Kit", status: "IN_PROGRESS", timestamp: "2026-02-13T09:30:00Z" },
      { id: "ux-5", agentId: "AG-005", stageName: "Accessibility Review", inputArtifact: "UI Kit", outputArtifact: "Audit Report", status: "PENDING", timestamp: "" },
      { id: "ux-6", agentId: "AG-005", stageName: "Handoff → Frontend", inputArtifact: "Final Designs", outputArtifact: "Figma Assets", status: "PENDING", timestamp: "" },
    ],
    edges: [
      { fromStageId: "ux-1", toStageId: "ux-2", handoffType: "INTERNAL" },
      { fromStageId: "ux-2", toStageId: "ux-3", handoffType: "INTERNAL" },
      { fromStageId: "ux-3", toStageId: "ux-4", handoffType: "INTERNAL" },
      { fromStageId: "ux-4", toStageId: "ux-5", handoffType: "INTERNAL" },
      { fromStageId: "ux-5", toStageId: "ux-6", handoffType: "EXTERNAL" },
    ]
  }
};
