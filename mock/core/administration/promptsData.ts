export interface PromptTemplate {
  id: string;
  name: string;
  agent: string;
  version: string;
  usageCount: number;
  lastUpdated: string;
  content: string;
  category: 'GENERATION' | 'ANALYSIS' | 'REVIEW' | 'SIMULATION';
}

export interface PromptVersion {
  id: string;
  promptId: string;
  version: string;
  updatedAt: string;
  updatedBy: string;
  changes: string;
}

export interface PromptUsage {
  id: string;
  promptId: string;
  workflowId: string;
  workflowName: string;
  executionDate: string;
  status: 'SUCCESS' | 'FAILED';
}

export const promptsData: PromptTemplate[] = [
  {
    id: "PRMPT-001",
    name: "Frontend Code Generator",
    agent: "Frontend Agent",
    version: "v3.1",
    usageCount: 124,
    lastUpdated: "2026-02-10",
    category: "GENERATION",
    content: "You are an expert React developer. Generate a clean, accessible, and performant component based on the following requirements..."
  },
  {
    id: "PRMPT-002",
    name: "ADR Analysis Logic",
    agent: "Senior Developer",
    version: "v2.0",
    usageCount: 85,
    lastUpdated: "2026-02-12",
    category: "ANALYSIS",
    content: "Analyze the provided Architectural Decision Record (ADR). Identify potential risks, technical debt, and cross-team dependencies..."
  },
  {
    id: "PRMPT-003",
    name: "API Simulation Mock",
    agent: "Sandbox Agent",
    version: "v1.5",
    usageCount: 210,
    lastUpdated: "2026-02-14",
    category: "SIMULATION",
    content: "Generate a realistic JSON response for the following API endpoint specification. Include common edge cases and error status codes..."
  },
  {
    id: "PRMPT-004",
    name: "PR Review Checklist",
    agent: "Code Reviewer",
    version: "v4.2",
    usageCount: 56,
    lastUpdated: "2026-02-08",
    category: "REVIEW",
    content: "Review the attached Pull Request diff. Check for security vulnerabilities, naming convention adherence, and unit test coverage..."
  }
];

export const promptVersions: PromptVersion[] = [
  {
    id: "VER-001",
    promptId: "PRMPT-001",
    version: "v3.1",
    updatedAt: "2026-02-10T14:00:00Z",
    updatedBy: "Sivaganesh",
    changes: "Added Tailwind CSS v4 support and improved accessibility checks."
  },
  {
    id: "VER-002",
    promptId: "PRMPT-001",
    version: "v3.0",
    updatedAt: "2026-01-25T10:30:00Z",
    updatedBy: "Alice Smith",
    changes: "Initial v3 release with multi-file generation capabilities."
  }
];

export const promptUsages: PromptUsage[] = [
  {
    id: "USE-001",
    promptId: "PRMPT-001",
    workflowId: "WF-101",
    workflowName: "Auth Module Scaffold",
    executionDate: "2026-02-14T09:00:00Z",
    status: "SUCCESS"
  },
  {
    id: "USE-002",
    promptId: "PRMPT-003",
    workflowId: "WF-205",
    workflowName: "Payments API Stress Test",
    executionDate: "2026-02-14T11:30:00Z",
    status: "SUCCESS"
  },
  {
    id: "USE-003",
    promptId: "PRMPT-002",
    workflowId: "WF-502",
    workflowName: "Database Migration Review",
    executionDate: "2026-02-13T16:45:00Z",
    status: "FAILED"
  }
];
