
export interface CodeReview {
  id: string
  title: string
  projectId: string
  workflowId: string
  agentId?: string

  reviewerId: string // Senior Developer ID

  reviewType:
    | "FEATURE"
    | "BUG_FIX"
    | "HOTFIX"
    | "REFACTOR"
    | "ARCHITECTURE"

  status:
    | "PENDING"
    | "APPROVED"
    | "CHANGES_REQUESTED"
    | "REJECTED"

  qualityScore: number
  defectCount: number

  createdAt: string
  reviewedAt?: string
  approvalId?: string
}

export interface ReviewComment {
  id: string
  reviewId: string
  reviewer: string
  comment: string
  severity: "LOW" | "MEDIUM" | "HIGH"
  timestamp: string
}

export interface ReviewDefect {
  reviewId: string
  type:
    | "SECURITY"
    | "PERFORMANCE"
    | "CODE_SMELL"
    | "ARCHITECTURE"
    | "TEST_COVERAGE"

  count: number
}

export const codeReviews: CodeReview[] = [
  {
    id: "REV-001",
    title: "Implement Authentication Middleware",
    projectId: "PRJ-1001",
    workflowId: "WF-2001",
    agentId: "AG-002",
    reviewerId: "SD-002",
    reviewType: "FEATURE",
    status: "APPROVED",
    qualityScore: 92,
    defectCount: 2,
    createdAt: "2024-03-20T10:00:00Z",
    reviewedAt: "2024-03-20T14:30:00Z",
    approvalId: "APP-001"
  },
  {
    id: "REV-002",
    title: "Fix Memory Leak in Data Parser",
    projectId: "PRJ-1002",
    workflowId: "WF-2002",
    agentId: "AG-001",
    reviewerId: "SD-001",
    reviewType: "BUG_FIX",
    status: "CHANGES_REQUESTED",
    qualityScore: 65,
    defectCount: 8,
    createdAt: "2024-03-21T09:00:00Z",
    reviewedAt: "2024-03-21T11:00:00Z"
  },
  {
    id: "REV-003",
    title: "Migration to Vector DB (ADR-001)",
    projectId: "PRJ-1001",
    workflowId: "WF-2003",
    agentId: "AG-004",
    reviewerId: "SD-001",
    reviewType: "ARCHITECTURE",
    status: "PENDING",
    qualityScore: 0,
    defectCount: 0,
    createdAt: "2024-03-22T08:30:00Z"
  },
  {
    id: "REV-004",
    title: "Emergency Security Patch - CSRF",
    projectId: "PRJ-1003",
    workflowId: "WF-2004",
    agentId: "AG-003",
    reviewerId: "SD-004",
    reviewType: "HOTFIX",
    status: "APPROVED",
    qualityScore: 98,
    defectCount: 0,
    createdAt: "2024-03-22T10:00:00Z",
    reviewedAt: "2024-03-22T10:45:00Z"
  },
  {
    id: "REV-005",
    title: "Optimize Frontend Rendering",
    projectId: "PRJ-1002",
    workflowId: "WF-2005",
    agentId: "AG-005",
    reviewerId: "SD-003",
    reviewType: "REFACTOR",
    status: "REJECTED",
    qualityScore: 42,
    defectCount: 15,
    createdAt: "2024-03-21T15:00:00Z",
    reviewedAt: "2024-03-21T17:00:00Z"
  }
]

export const reviewComments: ReviewComment[] = [
  {
    id: "COM-001",
    reviewId: "REV-002",
    reviewer: "SD-001",
    comment: "Memory cleanup is missing in the catch block.",
    severity: "HIGH",
    timestamp: "2024-03-21T11:05:00Z"
  },
  {
    id: "COM-002",
    reviewId: "REV-002",
    reviewer: "SD-001",
    comment: "Variable naming could be more descriptive.",
    severity: "LOW",
    timestamp: "2024-03-21T11:07:00Z"
  },
  {
    id: "COM-003",
    reviewId: "REV-005",
    reviewer: "SD-003",
    comment: "Serious performance regressions detected in Chrome. Virtualization is broken.",
    severity: "HIGH",
    timestamp: "2024-03-21T17:05:00Z"
  }
]

export const reviewDefects: ReviewDefect[] = [
  {
    reviewId: "REV-001",
    type: "CODE_SMELL",
    count: 2
  },
  {
    reviewId: "REV-002",
    type: "PERFORMANCE",
    count: 5
  },
  {
    reviewId: "REV-002",
    type: "TEST_COVERAGE",
    count: 3
  },
  {
    reviewId: "REV-005",
    type: "PERFORMANCE",
    count: 10
  },
  {
    reviewId: "REV-005",
    type: "SECURITY",
    count: 2
  },
  {
    reviewId: "REV-005",
    type: "ARCHITECTURE",
    count: 3
  }
]
