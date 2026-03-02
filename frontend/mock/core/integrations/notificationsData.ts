export interface NotificationChannel {
  id: string;
  channel: string;
  linkedEvents: string[];
  recipients: string[];
  status: 'ACTIVE' | 'INACTIVE';
  lastTriggered: string;
}

export interface NotificationRule {
  id: string;
  event: string;
  channelId: string;
  channelName: string;
  status: 'ENABLED' | 'DISABLED';
}

export interface AlertLog {
  id: string;
  timestamp: string;
  event: string;
  channel: string;
  status: 'DELIVERED' | 'FAILED' | 'PENDING';
  message: string;
}

export const notificationChannels: NotificationChannel[] = [
  {
    id: "INT-NTF-001",
    channel: "Slack",
    linkedEvents: [
      "Pipeline Failure",
      "Deployment Success",
      "ADR Approval"
    ],
    recipients: ["dev-team", "qa-team"],
    status: "ACTIVE",
    lastTriggered: "2026-02-14T09:30:00Z"
  },
  {
    id: "INT-NTF-002",
    channel: "Microsoft Teams",
    linkedEvents: [
      "Critical Security Alert",
      "Governance Escalation"
    ],
    recipients: ["security-leads", "mgmt-ops"],
    status: "ACTIVE",
    lastTriggered: "2026-02-14T08:15:00Z"
  },
  {
    id: "INT-NTF-003",
    channel: "Email",
    linkedEvents: [
      "Weekly Summary",
      "Billing Alerts"
    ],
    recipients: ["admin@company.com"],
    status: "ACTIVE",
    lastTriggered: "2026-02-13T17:00:00Z"
  }
];

export const notificationRules: NotificationRule[] = [
  {
    id: "RULE-001",
    event: "Pipeline Failure",
    channelId: "INT-NTF-001",
    channelName: "Slack",
    status: "ENABLED"
  },
  {
    id: "RULE-002",
    event: "Critical Security Alert",
    channelId: "INT-NTF-002",
    channelName: "Microsoft Teams",
    status: "ENABLED"
  },
  {
    id: "RULE-003",
    event: "Deployment Success",
    channelId: "INT-NTF-001",
    channelName: "Slack",
    status: "ENABLED"
  }
];

export const alertLogs: AlertLog[] = [
  {
    id: "LOG-001",
    timestamp: "2026-02-14T09:30:00Z",
    event: "Pipeline Failure",
    channel: "Slack",
    status: "DELIVERED",
    message: "Pipeline 'auth-service-main' failed at stage 'Test'."
  },
  {
    id: "LOG-002",
    timestamp: "2026-02-14T09:28:00Z",
    event: "ADR Approval",
    channel: "Slack",
    status: "DELIVERED",
    message: "ADR-2024-05 approved by @tech-lead."
  },
  {
    id: "LOG-003",
    timestamp: "2026-02-14T08:15:00Z",
    event: "Critical Security Alert",
    channel: "Microsoft Teams",
    status: "DELIVERED",
    message: "High severity vulnerability detected in 'node-fetch'."
  },
  {
    id: "LOG-004",
    timestamp: "2026-02-14T07:45:00Z",
    event: "Deployment Success",
    channel: "Slack",
    status: "FAILED",
    message: "Connection timeout to Slack API."
  }
];

export const notificationStats = {
  activeChannels: 3,
  alertsSentToday: 145,
  failedDeliveries: 2
};
