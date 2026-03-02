export interface BillingSummary {
  id: string;
  month: string;
  tokensUsed: number;
  totalCost: number;
  topAgent: string;
  apiCalls: number;
  activeAgents: number;
  costByProvider: Record<string, number>;
}

export interface TokenUsagePoint {
  date: string;
  tokens: number;
}

export interface CostBreakdown {
  id: string;
  category: 'AGENT' | 'WORKFLOW' | 'SANDBOX' | 'DEPLOYMENT';
  name: string;
  tokens: number;
  cost: number;
  trend: 'UP' | 'DOWN' | 'STABLE';
}

export interface AgentCost {
  agentId: string;
  agentName: string;
  executionCount: number;
  avgCostPerExecution: number;
  totalCost: number;
}

export interface BillingEvent {
  id: string;
  date: string;
  type: 'INVOICE' | 'PAYMENT' | 'LIMIT_REACHED' | 'QUOTA_INCREASE';
  amount?: number;
  description: string;
}

export const billingSummary: BillingSummary = {
  id: "BILL-001",
  month: "Feb 2026",
  tokensUsed: 2400000,
  totalCost: 482.30,
  topAgent: "Backend Agent",
  apiCalls: 45200,
  activeAgents: 12,
  costByProvider: {
    "OpenAI": 320.15,
    "Anthropic": 162.15
  }
};

export const tokenUsageTrend: TokenUsagePoint[] = [
  { date: "2026-02-08", tokens: 150000 },
  { date: "2026-02-09", tokens: 180000 },
  { date: "2026-02-10", tokens: 320000 },
  { date: "2026-02-11", tokens: 240000 },
  { date: "2026-02-12", tokens: 210000 },
  { date: "2026-02-13", tokens: 450000 },
  { date: "2026-02-14", tokens: 850000 },
];

export const costBreakdown: CostBreakdown[] = [
  { id: "CB-001", category: "AGENT", name: "Backend Agent", tokens: 850000, cost: 145.20, trend: "UP" },
  { id: "CB-002", category: "AGENT", name: "Frontend Agent", tokens: 420000, cost: 84.50, trend: "STABLE" },
  { id: "CB-003", category: "WORKFLOW", name: "Main CI Pipeline", tokens: 350000, cost: 62.40, trend: "DOWN" },
  { id: "CB-004", category: "SANDBOX", name: "API Simulation Env", tokens: 280000, cost: 45.10, trend: "UP" },
  { id: "CB-005", category: "DEPLOYMENT", name: "Production Rollout", tokens: 150000, cost: 32.80, trend: "STABLE" },
];

export const agentCostAnalysis: AgentCost[] = [
  { agentId: "AG-001", agentName: "Frontend Agent", executionCount: 154, avgCostPerExecution: 0.55, totalCost: 84.50 },
  { agentId: "AG-002", agentName: "Backend Agent", executionCount: 210, avgCostPerExecution: 0.69, totalCost: 145.20 },
  { agentId: "AG-003", agentName: "QA Agent", executionCount: 85, avgCostPerExecution: 0.42, totalCost: 35.70 },
  { agentId: "AG-004", agentName: "DevOps Agent", executionCount: 42, avgCostPerExecution: 1.15, totalCost: 48.30 },
];

export const billingHistory: BillingEvent[] = [
  { id: "EV-001", date: "2026-02-14T09:00:00Z", type: "LIMIT_REACHED", description: "Daily soft limit (80%) reached for Backend Agent." },
  { id: "EV-002", date: "2026-02-01T00:00:00Z", type: "INVOICE", amount: 1240.50, description: "Monthly invoice for January 2026 generated." },
  { id: "EV-003", date: "2026-01-25T15:00:00Z", type: "QUOTA_INCREASE", description: "OpenAI GPT-4o token quota increased to 10M per month." },
  { id: "EV-004", date: "2026-01-02T10:30:00Z", type: "PAYMENT", amount: 1240.50, description: "Automatic payment for December 2025 successful." },
];
