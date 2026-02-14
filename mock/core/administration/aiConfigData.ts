export interface AIConfig {
  id: string;
  provider: string;
  model: string;
  temperature: number;
  maxTokens: number;
  orchestrationMode: 'Single-Agent' | 'Multi-Agent' | 'Sequential' | 'Hierarchical';
  lastUpdatedBy: string;
  lastUpdated: string;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
}

export interface OrchestrationRule {
  id: string;
  name: string;
  logic: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  enabled: boolean;
}

export interface ConfigHistory {
  id: string;
  version: string;
  updatedAt: string;
  updatedBy: string;
  changeSummary: string;
}

export const aiConfigs: AIConfig[] = [
  {
    id: "AI-CONFIG-001",
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.4,
    maxTokens: 8000,
    orchestrationMode: "Multi-Agent",
    lastUpdatedBy: "Sivaganesh",
    lastUpdated: "2026-02-10T14:30:00Z",
    status: "ACTIVE"
  },
  {
    id: "AI-CONFIG-002",
    provider: "Anthropic",
    model: "Claude 3.5 Sonnet",
    temperature: 0.7,
    maxTokens: 4000,
    orchestrationMode: "Sequential",
    lastUpdatedBy: "Alice Smith",
    lastUpdated: "2026-02-12T09:15:00Z",
    status: "DRAFT"
  },
  {
    id: "AI-CONFIG-003",
    provider: "Google",
    model: "Gemini 1.5 Pro",
    temperature: 0.5,
    maxTokens: 12000,
    orchestrationMode: "Hierarchical",
    lastUpdatedBy: "Sivaganesh",
    lastUpdated: "2026-02-14T10:00:00Z",
    status: "ACTIVE"
  }
];

export const orchestrationRules: OrchestrationRule[] = [
  {
    id: "RULE-001",
    name: "QA-Dev Handoff",
    logic: "Auto-trigger QA Agent after DevOps Agent reports deployment success.",
    priority: "HIGH",
    enabled: true
  },
  {
    id: "RULE-002",
    name: "Architect Approval Gate",
    logic: "Pause all sequential execution if ADR is in PENDING state.",
    priority: "MEDIUM",
    enabled: true
  },
  {
    id: "RULE-003",
    name: "Cost Optimization",
    logic: "Switch to lower-tier models for non-production sandbox simulations.",
    priority: "LOW",
    enabled: false
  }
];

export const configHistory: ConfigHistory[] = [
  {
    id: "HIST-001",
    version: "v2.1.0",
    updatedAt: "2026-02-14T10:00:00Z",
    updatedBy: "Sivaganesh",
    changeSummary: "Upgraded primary model to Gemini 1.5 Pro for improved context handling."
  },
  {
    id: "HIST-002",
    version: "v2.0.5",
    updatedAt: "2026-02-10T14:30:00Z",
    updatedBy: "Sivaganesh",
    changeSummary: "Adjusted temperature to 0.4 for higher precision in code generation."
  }
];
