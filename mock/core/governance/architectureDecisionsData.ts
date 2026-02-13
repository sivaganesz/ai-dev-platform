
export interface ArchitectureDecision {
  id: string
  title: string
  projectId: string
  workflowId?: string

  category:
    | "SYSTEM_DESIGN"
    | "AI_WORKFLOW"
    | "DEPLOYMENT"
    | "INTEGRATION"
    | "DATA_ARCHITECTURE"
    | "SECURITY"

  description: string
  rationale: string
  alternatives: string[]

  proposedBy: string
  reviewedBy: string[]

  decisionStatus:
    | "PROPOSED"
    | "UNDER_REVIEW"
    | "APPROVED"
    | "REJECTED"

  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL"

  impactScore: number // 0-100

  createdAt: string
  decidedAt?: string
  approvalId?: string
}

export interface TechStackDecision {
  decisionId: string
  frontend?: string
  backend?: string
  database?: string
  infrastructure?: string
  aiFramework?: string
}

export interface RiskAssessment {
  decisionId: string
  scalabilityRisk: number // 0-100
  securityRisk: number
  performanceRisk: number
  costRisk: number
}

export const architectureDecisions: ArchitectureDecision[] = [
  {
    id: "ADR-001",
    title: "Migration to Vector Database for RAG",
    projectId: "PRJ-1001",
    workflowId: "WF-2001",
    category: "DATA_ARCHITECTURE",
    description: "Switch from standard PostgreSQL to Pinecone for efficient vector search in RAG pipelines.",
    rationale: "Pinecone provides sub-millisecond latency for high-dimensional vector search which is critical for our AI responsiveness.",
    alternatives: ["pgvector", "Weaviate", "Elasticsearch"],
    proposedBy: "SD-001",
    reviewedBy: ["SD-002", "SD-004"],
    decisionStatus: "APPROVED",
    riskLevel: "MEDIUM",
    impactScore: 85,
    createdAt: "2024-03-15T10:00:00Z",
    decidedAt: "2024-03-18T14:30:00Z",
    approvalId: "APP-003"
  },
  {
    id: "ADR-002",
    title: "Edge Deployment for Inference Agents",
    projectId: "PRJ-1002",
    category: "DEPLOYMENT",
    description: "Deploy inference agents to Vercel Edge functions to reduce cold start times.",
    rationale: "Standard containers have 2s+ cold starts. Edge functions reduce this to <100ms.",
    alternatives: ["AWS Lambda", "Dedicated Kubernetes Cluster"],
    proposedBy: "SD-003",
    reviewedBy: ["SD-004"],
    decisionStatus: "UNDER_REVIEW",
    riskLevel: "HIGH",
    impactScore: 70,
    createdAt: "2024-03-20T09:00:00Z"
  },
  {
    id: "ADR-003",
    title: "Standardize on OpenAI O1-Preview for Reasoning",
    projectId: "PRJ-1001",
    workflowId: "WF-2003",
    category: "AI_WORKFLOW",
    description: "Use O1-Preview for complex logical planning steps in AI workflows.",
    rationale: "Chain-of-thought internal processing in O1 significantly reduces agent logic errors.",
    alternatives: ["GPT-4o", "Claude 3.5 Sonnet"],
    proposedBy: "SD-001",
    reviewedBy: ["SD-005"],
    decisionStatus: "PROPOSED",
    riskLevel: "LOW",
    impactScore: 90,
    createdAt: "2024-03-22T11:00:00Z"
  },
  {
    id: "ADR-004",
    title: "Implement Multi-Factor Auth for Agent APIs",
    projectId: "PRJ-1003",
    category: "SECURITY",
    description: "Enforce MFA for all programmatic access to internal agent execution APIs.",
    rationale: "Mitigate risk of credential theft resulting in autonomous agent unauthorized actions.",
    alternatives: ["Static API Keys", "IP Whitelisting"],
    proposedBy: "SD-004",
    reviewedBy: ["SD-001", "SD-002"],
    decisionStatus: "APPROVED",
    riskLevel: "CRITICAL",
    impactScore: 95,
    createdAt: "2024-03-10T08:00:00Z",
    decidedAt: "2024-03-12T10:00:00Z"
  }
]

export const techStackDecisions: TechStackDecision[] = [
  {
    decisionId: "ADR-001",
    database: "Pinecone",
    backend: "Node.js",
    aiFramework: "LangChain"
  },
  {
    decisionId: "ADR-002",
    infrastructure: "Vercel Edge",
    frontend: "Next.js"
  }
]

export const riskAssessments: RiskAssessment[] = [
  {
    decisionId: "ADR-001",
    scalabilityRisk: 20,
    securityRisk: 30,
    performanceRisk: 10,
    costRisk: 60
  },
  {
    decisionId: "ADR-002",
    scalabilityRisk: 15,
    securityRisk: 40,
    performanceRisk: 20,
    costRisk: 25
  },
  {
    decisionId: "ADR-004",
    scalabilityRisk: 10,
    securityRisk: 5,
    performanceRisk: 15,
    costRisk: 10
  }
]
