export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  manager: string;
  timezone: string;
  lastLogin: string;
  avatar?: string;
  role: string;
  roleTier: 'Tier 1' | 'Tier 2' | 'Tier 3';
}

export interface AgentPreference {
  id: string;
  name: string;
  status: boolean;
  description: string;
}

export interface NotificationPreference {
  channel: string;
  enabled: boolean;
  events: {
    event: string;
    enabled: boolean;
  }[];
}

export interface ActivityTrace {
  id: string;
  action: string;
  module: string;
  date: string;
}

export interface AccessScope {
  category: string;
  privilege: string;
  status: 'GRANTED' | 'RESTRICTED' | 'DENIED';
}

export const userProfile: UserProfile = {
  id: "USR-001",
  firstName: "Peter",
  lastName: "Johnson",
  email: "peter.j@platform.ai",
  phone: "+1 (555) 012-3456",
  jobTitle: "Senior AI Engineer",
  department: "Platform AI",
  manager: "Sivaganesh",
  timezone: "IST (UTC+5:30)",
  lastLogin: "2026-02-14T08:45:00Z",
  role: "Senior AI Engineer",
  roleTier: "Tier 1"
};

export const agentPreferences: AgentPreference[] = [
  { id: "AP-001", name: "Auto Task Assignment", status: true, description: "Allow AI to automatically assign relevant development tasks to you." },
  { id: "AP-002", name: "AI Code Suggestions", status: true, description: "Enable real-time code optimization and snippet suggestions." },
  { id: "AP-003", name: "Escalation Alerts", status: false, description: "Receive immediate alerts when an agent requires manual intervention." },
  { id: "AP-004", name: "Prompt History Tracking", status: true, description: "Keep a searchable history of all prompt interactions for audit." }
];

export const notificationPreferences: NotificationPreference[] = [
  {
    channel: "Email",
    enabled: true,
    events: [
      { event: "Approval requests", enabled: true },
      { event: "Code reviews", enabled: true },
      { event: "Deployment alerts", enabled: false }
    ]
  },
  {
    channel: "Slack",
    enabled: true,
    events: [
      { event: "AI execution failures", enabled: true },
      { event: "Sandbox build completion", enabled: true }
    ]
  },
  {
    channel: "Teams",
    enabled: false,
    events: []
  },
  {
    channel: "In-App",
    enabled: true,
    events: [
      { event: "All operational updates", enabled: true }
    ]
  }
];

export const activityTraces: ActivityTrace[] = [
  { id: "TRC-001", action: "Approved Architecture ADR-042", module: "Governance", date: "2026-02-10" },
  { id: "TRC-002", action: "Triggered Demo Build", module: "Sandbox", date: "2026-02-11" },
  { id: "TRC-003", action: "Reviewed AI Prompt", module: "Agents", date: "2026-02-12" },
  { id: "TRC-004", action: "Modified Cloud Config", module: "Integrations", date: "2026-02-13" }
];

export const accessScopes: AccessScope[] = [
  { category: "Governance", privilege: "Approval Authority", status: "GRANTED" },
  { category: "Sandbox", privilege: "Environment Creation", status: "GRANTED" },
  { category: "Deployment", privilege: "Production Rollout", status: "RESTRICTED" },
  { category: "Administration", privilege: "User Management", status: "DENIED" }
];

export const profileStats = {
  tasksCompleted: 142,
  approvalsHandled: 28,
  promptsExecuted: 1240,
  reviewsPerformed: 45
};
