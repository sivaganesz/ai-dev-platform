export type AgentType = "Engineering" | "Testing" | "DevOps" | "Design";
export type AgentStatus = "Active" | "Idle" | "Failed";

export type Agent = {
  agentId: string;
  agentName: string;
  agentType: AgentType;
  status: AgentStatus;
  projectIds: string[];
  workflowIds: string[];
  executionCount: number;
  successRate: number; // percentage
  avgCompletionTime: string; // duration string
  lastExecutionAt: string; // datetime string
  deploymentLinked: boolean;
  activeWorkflowId?: string;
  capabilities?: string[];
  executionFlow?: {
    input: string;
    process: string[];
    output: string;
  };
};

export type AgentActivity = {
  activityId: string;
  agentId: string;
  workflowId: string;
  taskId: string;
  action: string;
  status: "Completed" | "Failed" | "In Progress";
  duration: string;
  timestamp: string;
};

export const agentsData: Agent[] = [
  {
    agentId: "AG-001",
    agentName: "Frontend Agent",
    agentType: "Engineering",
    status: "Active",
    projectIds: ["PRJ-1001"],
    workflowIds: ["WF-2001"],
    executionCount: 156,
    successRate: 96,
    avgCompletionTime: "14m",
    lastExecutionAt: "2026-02-13T10:30:00Z",
    deploymentLinked: true,
    activeWorkflowId: "WF-2001",
    capabilities: [
      "Convert UX wireframes → React components",
      "Build responsive layouts",
      "Integrate APIs",
      "Optimize performance",
      "Fix UI bugs",
    ],
    executionFlow: {
      input: "Design files + task specs",
      process: ["Parse UX assets", "Generate component tree", "Apply styling system", "Bind APIs"],
      output: "Production-ready UI modules",
    },
  },
  {
    agentId: "AG-002",
    agentName: "Backend Agent",
    agentType: "Engineering",
    status: "Active",
    projectIds: ["PRJ-1001"],
    workflowIds: ["WF-2001"],
    executionCount: 142,
    successRate: 94,
    avgCompletionTime: "18m",
    lastExecutionAt: "2026-02-13T11:00:00Z",
    deploymentLinked: true,
    activeWorkflowId: "WF-2001",
    capabilities: ["API generation", "DB schema design", "Auth systems", "Microservices", "Event streaming"],
    executionFlow: {
      input: "Feature spec",
      process: ["Design DB schema", "Generate API endpoints", "Implement business logic", "Add validations"],
      output: "REST/GraphQL services",
    },
  },
  {
    agentId: "AG-003",
    agentName: "QA Agent",
    agentType: "Testing",
    status: "Active",
    projectIds: ["PRJ-1001"],
    workflowIds: ["WF-2002"],
    executionCount: 89,
    successRate: 98,
    avgCompletionTime: "9m",
    lastExecutionAt: "2026-02-13T11:15:00Z",
    deploymentLinked: false,
    activeWorkflowId: "WF-2002",
    capabilities: ["Unit testing", "Integration testing", "UI automation", "Performance testing", "Regression suites"],
    executionFlow: {
      input: "Code changes + test plans",
      process: ["Execute unit tests", "Run integration suite", "Perform UI automation", "Validate performance"],
      output: "Test reports + bug logs",
    },
  },
  {
    agentId: "AG-004",
    agentName: "DevOps Agent",
    agentType: "DevOps",
    status: "Idle",
    projectIds: ["PRJ-1001"],
    workflowIds: [],
    executionCount: 45,
    successRate: 100,
    avgCompletionTime: "5m",
    lastExecutionAt: "2026-02-12T16:45:00Z",
    deploymentLinked: true,
    capabilities: ["CI/CD pipelines", "Docker builds", "Kubernetes deploy", "Monitoring setup", "Rollbacks"],
    executionFlow: {
      input: "Merged code + infrastructure config",
      process: ["Build container images", "Run security scans", "Deploy to environment", "Health checks"],
      output: "Live environment URL",
    },
  },
  {
    agentId: "AG-005",
    agentName: "UX Agent",
    agentType: "Design",
    status: "Active",
    projectIds: ["PRJ-1002"],
    workflowIds: ["WF-2001"],
    executionCount: 67,
    successRate: 92,
    avgCompletionTime: "25m",
    lastExecutionAt: "2026-02-13T09:00:00Z",
    deploymentLinked: false,
    activeWorkflowId: "WF-2001",
    capabilities: ["Wireframe generation", "Design systems", "Accessibility audits", "Interaction design", "User journey mapping"],
    executionFlow: {
      input: "User requirements + brand guidelines",
      process: ["Create user journeys", "Generate wireframes", "Define design tokens", "Accessibility audit"],
      output: "Figma assets / JSON design tokens",
    },
  },
];

export const agentActivities: AgentActivity[] = [
  {
    activityId: "ACT-9001",
    agentId: "AG-001",
    workflowId: "WF-2001",
    taskId: "UI Component Build",
    action: "Component Generation",
    status: "Completed",
    duration: "12m",
    timestamp: "2026-02-13T10:30:00Z",
  },
  {
    activityId: "ACT-9002",
    agentId: "AG-002",
    workflowId: "WF-2001",
    taskId: "API Integration",
    action: "Endpoint Creation",
    status: "Completed",
    duration: "15m",
    timestamp: "2026-02-13T11:00:00Z",
  },
  {
    activityId: "ACT-9003",
    agentId: "AG-003",
    workflowId: "WF-2002",
    taskId: "Regression Test",
    action: "Test Suite Execution",
    status: "Completed",
    duration: "8m",
    timestamp: "2026-02-13T11:15:00Z",
  },
];
