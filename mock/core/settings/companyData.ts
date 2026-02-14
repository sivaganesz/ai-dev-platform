export interface CompanyProfile {
  name: string;
  legalName: string;
  industry: string;
  size: string;
  hq: string;
  founded: number;
  website: string;
  supportEmail: string;
  logo?: string;
}

export interface BrandingConfig {
  brandColor: string;
  platformDisplayName: string;
  favicon?: string;
  emailBranding: boolean;
}

export interface OrgHierarchy {
  id: string;
  department: string;
  head: string;
  teams: string[];
}

export interface ComplianceSettings {
  requireArchApproval: boolean;
  requireSecurityReview: boolean;
  mandatoryQAValidation: boolean;
  promptAuditLogging: boolean;
  dataRetentionDays: number;
  standards: {
    name: string;
    enabled: boolean;
  }[];
}

export interface DeploymentPolicy {
  environment: string;
  region: string;
  provider: string;
}

export interface EnvironmentStrategy {
  type: string;
  policy: string;
}

export interface AIGovernanceDefaults {
  allowAutonomousExecution: boolean;
  requireHumanApproval: boolean;
  promptLoggingLevel: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
  tokenCapPerMonth: number;
}

export interface LicenseOverview {
  planType: string;
  agentCredits: string;
  sandboxHours: number;
  apiSimulationCalls: string;
}

export const companyProfile: CompanyProfile = {
  name: "Cognation AI Labs",
  legalName: "Cognation Artificial Intelligence Corporation",
  industry: "Enterprise AI Platforms",
  size: "2,500 Employees",
  hq: "San Francisco, USA",
  founded: 2016,
  website: "https://cognation.ai",
  supportEmail: "support@cognation.ai"
};

export const brandingConfig: BrandingConfig = {
  brandColor: "#3b82f6",
  platformDisplayName: "Cognation DevPlatform",
  emailBranding: true
};

export const orgHierarchy: OrgHierarchy[] = [
  { id: "ORG-001", department: "Engineering", head: "David Kim", teams: ["Frontend", "Backend", "Mobile"] },
  { id: "ORG-002", department: "AI Research", head: "Elena Ross", teams: ["ML", "Agents", "NLP"] },
  { id: "ORG-003", department: "DevOps", head: "Mark Chen", teams: ["Infra", "SRE", "Security"] },
  { id: "ORG-004", department: "Product", head: "Sarah Chen", teams: ["Design", "Analytics"] }
];

export const complianceSettings: ComplianceSettings = {
  requireArchApproval: true,
  requireSecurityReview: true,
  mandatoryQAValidation: true,
  promptAuditLogging: true,
  dataRetentionDays: 180,
  standards: [
    { name: "SOC 2", enabled: true },
    { name: "ISO 27001", enabled: true },
    { name: "GDPR", enabled: true },
    { name: "HIPAA", enabled: false }
  ]
};

export const deploymentPolicies: DeploymentPolicy[] = [
  { environment: "Production", region: "US East", provider: "AWS" },
  { environment: "Staging", region: "India", provider: "Azure" },
  { environment: "Sandbox", region: "Singapore", provider: "GCP" }
];

export const environmentStrategies: EnvironmentStrategy[] = [
  { type: "Sandbox", policy: "Auto-expire after 7 days" },
  { type: "Demo Builds", policy: "Retention for 30 days" },
  { type: "Production", policy: "Human approval required for rollout" }
];

export const aiGovernanceDefaults: AIGovernanceDefaults = {
  allowAutonomousExecution: false,
  requireHumanApproval: true,
  promptLoggingLevel: "INFO",
  tokenCapPerMonth: 10000000
};

export const licenseOverview: LicenseOverview = {
  planType: "Enterprise",
  agentCredits: "2M/month",
  sandboxHours: 5000,
  apiSimulationCalls: "Unlimited"
};

export const companyStats = {
  deploymentsByRegion: [
    { region: "US East", count: 45 },
    { region: "Europe", count: 32 },
    { region: "India", count: 28 },
    { region: "Singapore", count: 15 }
  ],
  sandboxUsageByTeam: [
    { team: "Frontend", hours: 1200 },
    { team: "Backend", hours: 1800 },
    { team: "AI Research", hours: 950 },
    { team: "QA", hours: 450 }
  ]
};
