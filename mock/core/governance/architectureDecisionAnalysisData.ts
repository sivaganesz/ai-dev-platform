
export interface DecisionAnalysis {
  decisionId: string
  impactedAgents: {
    id: string
    name: string
    changeType: string
    impactLevel: "LOW" | "MEDIUM" | "HIGH"
  }[]
  impactedWorkflows: {
    id: string
    name: string
    changeType: string
    impactLevel: "LOW" | "MEDIUM" | "HIGH"
  }[]
  impactedProjects: string[]
  deploymentImpact: "LOW" | "MEDIUM" | "HIGH"
  infraChanges: string[]
  aiExecutionChanges: string[]
  estimatedCostImpact: number // percentage change or relative value
  performanceImpactScore: number // 0-100
  riskPropagationLevel: number // 0-100
  
  architectureBreakdown: {
    oldModel: string
    newModel: string
    layers: {
      name: string
      oldValue: string
      newValue: string
      status: "STABLE" | "MODIFIED" | "ADDED" | "REMOVED"
    }[]
  }
  
  executionImpactMap: {
    nodes: { id: string; label: string; type: "DECISION" | "AGENT" | "WORKFLOW" | "DEPLOYMENT" }[]
    edges: { source: string; target: string; label?: string }[]
  }
  
  deploymentDetails: {
    infraChanges: string[]
    pipelineUpdates: string[]
    containerScaling: string
    cicdAdjustments: string
  }
  
  riskPropagation: {
    entity: string
    riskScore: number
    connectionType: string
  }[]
  
  costDetails: {
    infra: number
    compute: number
    storage: number
  }
  
  simulationTimeline: {
    stage: string
    description: string
    duration: string
    status: "COMPLETED" | "IN_PROGRESS" | "PENDING"
  }[]
}

export const architectureDecisionAnalysis: Record<string, DecisionAnalysis> = {
  "ADR-001": {
    decisionId: "ADR-001",
    impactedAgents: [
      { id: "AGENT-001", name: "Search Optimizer", changeType: "RAG logic update", impactLevel: "HIGH" },
      { id: "AGENT-003", name: "Knowledge Retriever", changeType: "Vector API integration", impactLevel: "HIGH" }
    ],
    impactedWorkflows: [
      { id: "WF-2001", name: "RAG Pipeline", changeType: "Data ingestion stage update", impactLevel: "HIGH" }
    ],
    impactedProjects: ["PRJ-1001"],
    deploymentImpact: "MEDIUM",
    infraChanges: ["Pinecone Instance Provisioning", "Secrets management for API keys"],
    aiExecutionChanges: ["Vector search instead of keyword search", "Embedding generation required"],
    estimatedCostImpact: 25,
    performanceImpactScore: 92,
    riskPropagationLevel: 35,
    architectureBreakdown: {
      oldModel: "PostgreSQL with ILIKE / Full-text search",
      newModel: "Pinecone Vector Store with Semantic Search",
      layers: [
        { name: "Storage Layer", oldValue: "Relational DB", newValue: "Vector Database", status: "MODIFIED" },
        { name: "Retrieval Logic", oldValue: "Keyword Match", newValue: "Cosine Similarity", status: "MODIFIED" },
        { name: "Data Processing", oldValue: "Plain Text", newValue: "Vector Embeddings", status: "ADDED" }
      ]
    },
    executionImpactMap: {
      nodes: [
        { id: "ADR-001", label: "Vector DB Migration", type: "DECISION" },
        { id: "AGENT-003", label: "Knowledge Retriever", type: "AGENT" },
        { id: "WF-2001", label: "RAG Pipeline", type: "WORKFLOW" },
        { id: "DEP-001", label: "Cloud Infra", type: "DEPLOYMENT" }
      ],
      edges: [
        { source: "ADR-001", target: "AGENT-003", label: "Updates Logic" },
        { source: "AGENT-003", target: "WF-2001", label: "Powers" },
        { source: "ADR-001", target: "DEP-001", label: "New Resource" }
      ]
    },
    deploymentDetails: {
      infraChanges: ["Provision Pinecone Index", "Update Terraform scripts"],
      pipelineUpdates: ["Add embedding generation step", "Update environment variables"],
      containerScaling: "Stable (Stateless agents)",
      cicdAdjustments: "Add integration tests for Vector Search"
    },
    riskPropagation: [
      { entity: "Knowledge Retriever Agent", riskScore: 40, connectionType: "Direct dependency" },
      { entity: "RAG Pipeline Workflow", riskScore: 30, connectionType: "Downstream impact" },
      { entity: "Data Ingestion Pipeline", riskScore: 20, connectionType: "Source dependency" }
    ],
    costDetails: {
      infra: 150,
      compute: 50,
      storage: 200
    },
    simulationTimeline: [
      { stage: "Decision Approved", description: "ADR-001 officially approved for implementation", duration: "Day 0", status: "COMPLETED" },
      { stage: "Infra Update", description: "Pinecone instance creation and network setup", duration: "Day 2", status: "COMPLETED" },
      { stage: "Agent Reconfiguration", description: "Updating Retriever agent with new SDK", duration: "Day 5", status: "IN_PROGRESS" },
      { stage: "Workflow Migration", description: "Updating RAG pipeline stages", duration: "Day 8", status: "PENDING" },
      { stage: "Deployment Rollout", description: "Production release of new search stack", duration: "Day 12", status: "PENDING" }
    ]
  },
  "ADR-002": {
    decisionId: "ADR-002",
    impactedAgents: [
      { id: "AGENT-005", name: "Latency Sensitive Agent", changeType: "Edge runtime migration", impactLevel: "HIGH" }
    ],
    impactedWorkflows: [
      { id: "WF-2002", name: "Real-time Chat", changeType: "Edge routing added", impactLevel: "MEDIUM" }
    ],
    impactedProjects: ["PRJ-1002"],
    deploymentImpact: "HIGH",
    infraChanges: ["Vercel Edge Functions setup", "DNS reconfiguration"],
    aiExecutionChanges: ["Streaming response support", "Memory constraints on Edge"],
    estimatedCostImpact: -15,
    performanceImpactScore: 95,
    riskPropagationLevel: 60,
    architectureBreakdown: {
      oldModel: "Standard Container (Docker/K8s)",
      newModel: "Vercel Edge Functions (V8 Isolates)",
      layers: [
        { name: "Compute Layer", oldValue: "Virtual Machines", newValue: "Edge Runtime", status: "MODIFIED" },
        { name: "Network Layer", oldValue: "Regional Load Balancer", newValue: "Global Edge Network", status: "MODIFIED" },
        { name: "Runtime", oldValue: "Full Node.js", newValue: "Edge (Isolate-based)", status: "MODIFIED" }
      ]
    },
    executionImpactMap: {
      nodes: [
        { id: "ADR-002", label: "Edge Deployment", type: "DECISION" },
        { id: "AGENT-005", label: "Latency Agent", type: "AGENT" },
        { id: "WF-2002", label: "Real-time Chat", type: "WORKFLOW" },
        { id: "DEP-002", label: "Edge Infrastructure", type: "DEPLOYMENT" }
      ],
      edges: [
        { source: "ADR-002", target: "DEP-002", label: "Changes Infrastructure" },
        { source: "DEP-002", target: "AGENT-005", label: "Hosts" },
        { source: "AGENT-005", target: "WF-2002", label: "Supports" }
      ]
    },
    deploymentDetails: {
      infraChanges: ["Configure Vercel Project", "Edge function routing"],
      pipelineUpdates: ["Update build scripts for Edge runtime", "Configure environment secrets"],
      containerScaling: "Serverless (Auto-scaling)",
      cicdAdjustments: "Update integration tests for global distribution"
    },
    riskPropagation: [
      { entity: "Latency Sensitive Agent", riskScore: 70, connectionType: "Runtime dependency" },
      { entity: "Real-time Chat Workflow", riskScore: 50, connectionType: "Service delivery impact" },
      { entity: "Global Routing", riskScore: 40, connectionType: "Infrastructure dependency" }
    ],
    costDetails: {
      infra: -100,
      compute: -50,
      storage: 0
    },
    simulationTimeline: [
      { stage: "Decision Approved", description: "ADR-002 approved", duration: "Day 0", status: "COMPLETED" },
      { stage: "Infra Update", description: "Vercel Edge configuration", duration: "Day 3", status: "IN_PROGRESS" },
      { stage: "Agent Reconfiguration", description: "Adapting code for Edge runtime", duration: "Day 7", status: "PENDING" },
      { stage: "Workflow Migration", description: "Updating routing logic", duration: "Day 10", status: "PENDING" },
      { stage: "Deployment Rollout", description: "Global edge rollout", duration: "Day 15", status: "PENDING" }
    ]
  },
  "ADR-004": {
    decisionId: "ADR-004",
    impactedAgents: [
      { id: "ALL", name: "All Agents", changeType: "MFA authentication required", impactLevel: "HIGH" }
    ],
    impactedWorkflows: [
      { id: "ALL", name: "All Workflows", changeType: "Security handshake update", impactLevel: "MEDIUM" }
    ],
    impactedProjects: ["PRJ-1003", "GLOBAL"],
    deploymentImpact: "MEDIUM",
    infraChanges: ["Auth0/Okta integration", "API Gateway policy update"],
    aiExecutionChanges: ["Token-based execution", "Strict permission checks"],
    estimatedCostImpact: 10,
    performanceImpactScore: 88,
    riskPropagationLevel: 15,
    architectureBreakdown: {
      oldModel: "Static API Keys / Simple Auth",
      newModel: "MFA / Zero-Trust Agent Identity",
      layers: [
        { name: "Auth Layer", oldValue: "Static Keys", newValue: "MFA + OAuth2", status: "MODIFIED" },
        { name: "Access Control", oldValue: "Permissive", newValue: "Principle of Least Privilege", status: "MODIFIED" },
        { name: "Identity", oldValue: "Service Account", newValue: "Agent-specific Identity", status: "ADDED" }
      ]
    },
    executionImpactMap: {
      nodes: [
        { id: "ADR-004", label: "MFA Enforcement", type: "DECISION" },
        { id: "GATEWAY", label: "Security Gateway", type: "DEPLOYMENT" },
        { id: "AGENTS", label: "Agent Fleet", type: "AGENT" }
      ],
      edges: [
        { source: "ADR-004", target: "GATEWAY", label: "Enforces" },
        { source: "GATEWAY", target: "AGENTS", label: "Secures" }
      ]
    },
    deploymentDetails: {
      infraChanges: ["Identity Provider setup", "Certificate rotation"],
      pipelineUpdates: ["Secret management for MFA", "Update CI/CD runner permissions"],
      containerScaling: "Stable",
      cicdAdjustments: "Enforce security scanning on all PRs"
    },
    riskPropagation: [
      { entity: "Agent Fleet", riskScore: 20, connectionType: "Authentication dependency" },
      { entity: "API Gateway", riskScore: 30, connectionType: "Policy enforcement" }
    ],
    costDetails: {
      infra: 200,
      compute: 20,
      storage: 10
    },
    simulationTimeline: [
      { stage: "Decision Approved", description: "MFA policy mandated", duration: "Day 0", status: "COMPLETED" },
      { stage: "Infra Update", description: "IDP configuration", duration: "Day 5", status: "COMPLETED" },
      { stage: "Agent Reconfiguration", description: "Updating agent auth libraries", duration: "Day 15", status: "IN_PROGRESS" },
      { stage: "Workflow Migration", description: "Updating workflow triggers", duration: "Day 30", status: "PENDING" },
      { stage: "Deployment Rollout", description: "Phased rollout to all projects", duration: "Day 45", status: "PENDING" }
    ]
  }
}
