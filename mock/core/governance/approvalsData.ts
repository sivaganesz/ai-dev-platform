
export interface ApprovalRequest {
  id: string
  title: string
  type:
    | "WORKFLOW"
    | "DEPLOYMENT"
    | "ARCHITECTURE"
    | "AGENT_EXECUTION"
    | "HOTFIX"

  projectId: string
  workflowId?: string
  agentId?: string
  deploymentId?: string

  requestedBy: string
  assignedTo: string // Senior Developer ID

  priority: "HIGH" | "MEDIUM" | "LOW"

  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "ESCALATED"

  createdAt: string
  decidedAt?: string
}

export interface ApprovalDecision {
  id: string
  approvalId: string
  approverId: string
  decision: "APPROVED" | "REJECTED"
  comment: string
  timestamp: string
}

export interface ApprovalSLA {
  approvalId: string
  expectedHours: number
  actualHours: number
  breached: boolean
}

export const approvalRequests: ApprovalRequest[] = [
  {
    id: "APP-001",
    title: "Production Deployment - AI Engine V2",
    type: "DEPLOYMENT",
    projectId: "PRJ-1001",
    deploymentId: "DEP-3001",
    requestedBy: "Frontend Lead Agent",
    assignedTo: "SD-001",
    priority: "HIGH",
    status: "PENDING",
    createdAt: "2024-03-22T08:00:00Z"
  },
  {
    id: "APP-002",
    title: "New Agent Execution - Data Scraper",
    type: "AGENT_EXECUTION",
    projectId: "PRJ-1002",
    agentId: "AG-005",
    requestedBy: "Marcus Thorne",
    assignedTo: "SD-003",
    priority: "MEDIUM",
    status: "APPROVED",
    createdAt: "2024-03-21T10:30:00Z",
    decidedAt: "2024-03-21T14:15:00Z"
  },
  {
    id: "APP-003",
    title: "Architecture Update: Vector DB Migration",
    type: "ARCHITECTURE",
    projectId: "PRJ-1001",
    requestedBy: "Alex Rivera",
    assignedTo: "SD-002",
    priority: "HIGH",
    status: "ESCALATED",
    createdAt: "2024-03-20T09:00:00Z"
  },
  {
    id: "APP-004",
    title: "Emergency Hotfix: Auth Token Leak",
    type: "HOTFIX",
    projectId: "PRJ-1003",
    requestedBy: "Security Agent",
    assignedTo: "SD-004",
    priority: "HIGH",
    status: "APPROVED",
    createdAt: "2024-03-22T12:00:00Z",
    decidedAt: "2024-03-22T12:30:00Z"
  },
  {
    id: "APP-005",
    title: "Workflow Update: CI/CD Pipeline optimization",
    type: "WORKFLOW",
    projectId: "PRJ-1002",
    workflowId: "WF-2001",
    requestedBy: "DevOps Agent",
    assignedTo: "SD-004",
    priority: "LOW",
    status: "PENDING",
    createdAt: "2024-03-22T15:00:00Z"
  },
  {
    id: "APP-006",
    title: "Agent Execution: Batch Image Processing",
    type: "AGENT_EXECUTION",
    projectId: "PRJ-1003",
    agentId: "AG-002",
    requestedBy: "David Kim",
    assignedTo: "SD-002",
    priority: "MEDIUM",
    status: "REJECTED",
    createdAt: "2024-03-21T16:00:00Z",
    decidedAt: "2024-03-21T17:45:00Z"
  }
]

export const approvalDecisions: ApprovalDecision[] = [
  {
    id: "DEC-001",
    approvalId: "APP-002",
    approverId: "SD-003",
    decision: "APPROVED",
    comment: "Agent parameters verified for safety. Proceed with execution.",
    timestamp: "2024-03-21T14:15:00Z"
  },
  {
    id: "DEC-002",
    approvalId: "APP-004",
    approverId: "SD-004",
    decision: "APPROVED",
    comment: "Critical security fix. Approved for immediate deployment.",
    timestamp: "2024-03-22T12:30:00Z"
  },
  {
    id: "DEC-003",
    approvalId: "APP-006",
    approverId: "SD-002",
    decision: "REJECTED",
    comment: "Resource usage exceeds current quota. Please optimize the agent code first.",
    timestamp: "2024-03-21T17:45:00Z"
  }
]

export const approvalSLAs: ApprovalSLA[] = [
  {
    approvalId: "APP-001",
    expectedHours: 4,
    actualHours: 8,
    breached: true
  },
  {
    approvalId: "APP-002",
    expectedHours: 24,
    actualHours: 3.75,
    breached: false
  },
  {
    approvalId: "APP-003",
    expectedHours: 48,
    actualHours: 52,
    breached: true
  },
  {
    approvalId: "APP-004",
    expectedHours: 1,
    actualHours: 0.5,
    breached: false
  }
]
