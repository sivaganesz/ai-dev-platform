export interface PerformanceMetric {
  id: string;
  metric: string;
  averageMs: number;
  peakMs: number;
  status: 'OPTIMAL' | 'DEGRADED' | 'CRITICAL';
}

export interface LatencyPoint {
  time: string;
  latency: number;
}

export interface BuildDuration {
  date: string;
  duration: number;
}

export interface AgentMetric {
  id: string;
  agentName: string;
  avgExecutionTime: number;
  taskThroughput: number;
  successRate: number;
}

export interface WorkflowCompletion {
  name: string;
  avgTime: number;
  maxTime: number;
}

export interface PerformanceInsight {
  id: string;
  type: 'BOTTLENECK' | 'OPTIMIZATION' | 'SUCCESS';
  title: string;
  description: string;
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
}

export const performanceMetrics: PerformanceMetric[] = [
  { id: "PRF-001", metric: "API Latency", averageMs: 240, peakMs: 620, status: "OPTIMAL" },
  { id: "PRF-002", metric: "Build Duration", averageMs: 320, peakMs: 450, status: "OPTIMAL" },
  { id: "PRF-003", metric: "Agent Execution", averageMs: 1200, peakMs: 3500, status: "DEGRADED" },
  { id: "PRF-004", metric: "Workflow Completion", averageMs: 850, peakMs: 1200, status: "OPTIMAL" },
];

export const latencyHistory: LatencyPoint[] = [
  { time: "00:00", latency: 180 },
  { time: "04:00", latency: 210 },
  { time: "08:00", latency: 450 },
  { time: "12:00", latency: 320 },
  { time: "16:00", latency: 280 },
  { time: "20:00", latency: 240 },
  { time: "23:59", latency: 200 },
];

export const buildDurations: BuildDuration[] = [
  { date: "2026-02-08", duration: 310 },
  { date: "2026-02-09", duration: 305 },
  { date: "2026-02-10", duration: 420 },
  { date: "2026-02-11", duration: 315 },
  { date: "2026-02-12", duration: 310 },
  { date: "2026-02-13", duration: 300 },
  { date: "2026-02-14", duration: 295 },
];

export const agentMetrics: AgentMetric[] = [
  { id: "A-001", agentName: "Frontend Agent", avgExecutionTime: 850, taskThroughput: 45, successRate: 98 },
  { id: "A-002", agentName: "Backend Agent", avgExecutionTime: 1450, taskThroughput: 38, successRate: 95 },
  { id: "A-003", agentName: "DevOps Agent", avgExecutionTime: 2200, taskThroughput: 12, successRate: 92 },
  { id: "A-004", agentName: "QA Agent", avgExecutionTime: 1800, taskThroughput: 25, successRate: 96 },
];

export const workflowCompletionTimes: WorkflowCompletion[] = [
  { name: "Auth Pipeline", avgTime: 240, maxTime: 450 },
  { name: "Data Sync", avgTime: 1200, maxTime: 2500 },
  { name: "Security Scan", avgTime: 450, maxTime: 900 },
  { name: "UI Regression", avgTime: 1800, maxTime: 3600 },
];

export const performanceInsights: PerformanceInsight[] = [
  {
    id: "INS-001",
    type: "BOTTLENECK",
    title: "Database Connection Pool Exhaustion",
    description: "Backend Agent execution time is spiking due to connection pool limits during peak hours (08:00-10:00).",
    impact: "HIGH"
  },
  {
    id: "INS-002",
    type: "OPTIMIZATION",
    title: "CI Cache Potential",
    description: "Enabling layer caching for Docker builds could reduce average build duration by 15%.",
    impact: "MEDIUM"
  },
  {
    id: "INS-003",
    type: "SUCCESS",
    title: "API Optimization Rollout",
    description: "Recent API Gateway optimizations have reduced baseline latency by 20% across all endpoints.",
    impact: "LOW"
  }
];

export const performanceStats = {
  overallHealth: "98.2%",
  activeBottlenecks: 1,
  optimizationOps: 3,
  trend: "Improving"
};
