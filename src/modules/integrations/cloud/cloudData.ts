export interface Environment {
  id: string;
  name: string;
  region: string;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
}

export interface ResourceUsage {
  cpu: number;
  storage: number;
  bandwidth: number;
}

export interface CloudProvider {
  id: string;
  provider: 'AWS' | 'Azure' | 'GCP' | 'DigitalOcean';
  linkedPipelines: string[];
  environments: Environment[];
  resourceUsage: ResourceUsage;
  status: 'ACTIVE' | 'WARNING' | 'ERROR';
  accountName: string;
}

export const cloudProvidersData: CloudProvider[] = [
  {
    id: "INT-CLD-001",
    provider: "AWS",
    accountName: "ai-production-main",
    linkedPipelines: ["INT-CICD-001"],
    environments: [
      { id: "ENV-001", name: "Production", region: "us-east-1", status: 'ACTIVE' },
      { id: "ENV-002", name: "Staging", region: "eu-west-1", status: 'ACTIVE' }
    ],
    resourceUsage: {
      cpu: 68,
      storage: 74,
      bandwidth: 52
    },
    status: "ACTIVE"
  },
  {
    id: "INT-CLD-002",
    provider: "Azure",
    accountName: "enterprise-cloud-hub",
    linkedPipelines: ["INT-CICD-002"],
    environments: [
      { id: "ENV-003", name: "Dev-SandBox", region: "eastus", status: 'ACTIVE' },
      { id: "ENV-004", name: "QA-Cluster", region: "westeurope", status: 'MAINTENANCE' }
    ],
    resourceUsage: {
      cpu: 45,
      storage: 32,
      bandwidth: 15
    },
    status: "ACTIVE"
  },
  {
    id: "INT-CLD-003",
    provider: "GCP",
    accountName: "data-ml-services",
    linkedPipelines: [],
    environments: [
      { id: "ENV-005", name: "ML-Training-Nodes", region: "us-central1", status: 'ACTIVE' }
    ],
    resourceUsage: {
      cpu: 92,
      storage: 88,
      bandwidth: 76
    },
    status: "WARNING"
  }
];
