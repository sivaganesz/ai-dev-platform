export interface HandoffStats {
  received: number;
  delivered: number;
  downstreamAgent: string;
  artifactType: string;
}

export const handoffLogs: Record<string, HandoffStats> = {
  "AG-001": { received: 45, delivered: 42, downstreamAgent: "Backend Agent", artifactType: "UI Contracts" },
  "AG-002": { received: 42, delivered: 38, downstreamAgent: "QA Agent", artifactType: "REST APIs" },
  "AG-003": { received: 38, delivered: 35, downstreamAgent: "DevOps Agent", artifactType: "QA Approved Build" },
  "AG-004": { received: 35, delivered: 35, downstreamAgent: "Production", artifactType: "Live Release" },
  "AG-005": { received: 15, delivered: 12, downstreamAgent: "Frontend Agent", artifactType: "Figma Assets" },
};
