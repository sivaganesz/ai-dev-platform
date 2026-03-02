export interface DeploymentSummary {
  totalDeployments: number;
  successful: number;
  failed: number;
  successRate: number;
  lastDeployment: string;
}

export const deploymentSummaryData: DeploymentSummary = {
  totalDeployments: 45,
  successful: 42,
  failed: 3,
  successRate: 93,
  lastDeployment: "2026-02-12T18:00:00Z",
};
