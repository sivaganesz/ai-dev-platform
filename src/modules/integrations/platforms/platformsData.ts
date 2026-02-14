export interface Repository {
  id: string;
  name: string;
  linkedProject: string;
  visibility: 'public' | 'private';
  stars: number;
  forks: number;
  lastUpdate: string;
}

export interface PlatformActivity {
  id: string;
  type: 'SYNC' | 'PR_OPENED' | 'PUSH' | 'CONNECTION_UPDATE';
  description: string;
  timestamp: string;
  user: string;
}

export interface Platform {
  id: string;
  platformName: 'GitHub' | 'GitLab' | 'Bitbucket' | 'Azure DevOps';
  organization: string;
  repositories: Repository[];
  status: 'CONNECTED' | 'DISCONNECTED' | 'SYNCING' | 'ERROR';
  lastSync: string;
  linkedPipelines: string[];
  avatarUrl?: string;
}

export const platformsData: Platform[] = [
  {
    id: "INT-PLT-001",
    platformName: "GitHub",
    organization: "ai-dev-platform",
    repositories: [
      { id: "REP-001", name: "frontend-ui", linkedProject: "PRJ-1001", visibility: 'public', stars: 124, forks: 45, lastUpdate: "2026-02-14T09:30:00Z" },
      { id: "REP-002", name: "backend-core", linkedProject: "PRJ-1002", visibility: 'private', stars: 89, forks: 12, lastUpdate: "2026-02-14T08:15:00Z" },
      { id: "REP-003", name: "ml-models", linkedProject: "PRJ-1003", visibility: 'private', stars: 210, forks: 67, lastUpdate: "2026-02-13T18:45:00Z" }
    ],
    status: "CONNECTED",
    lastSync: "2026-02-14T10:00:00Z",
    linkedPipelines: ["INT-CICD-001"],
    avatarUrl: "https://github.com/github.png"
  },
  {
    id: "INT-PLT-002",
    platformName: "GitLab",
    organization: "ai-enterprise",
    repositories: [
      { id: "REP-004", name: "internal-tools", linkedProject: "PRJ-1004", visibility: 'private', stars: 12, forks: 2, lastUpdate: "2026-02-12T11:00:00Z" }
    ],
    status: "CONNECTED",
    lastSync: "2026-02-13T15:20:00Z",
    linkedPipelines: ["INT-CICD-002"],
    avatarUrl: "https://gitlab.com/assets/gitlab_logo.png"
  },
  {
    id: "INT-PLT-003",
    platformName: "Azure DevOps",
    organization: "cloud-ops",
    repositories: [
      { id: "REP-005", name: "infrastructure-as-code", linkedProject: "PRJ-1005", visibility: 'private', stars: 5, forks: 1, lastUpdate: "2026-02-10T14:30:00Z" }
    ],
    status: "DISCONNECTED",
    lastSync: "2026-02-08T09:00:00Z",
    linkedPipelines: [],
    avatarUrl: "https://cdn.vsassets.io/content/icons/favicon.ico"
  }
];

export const platformsActivityLogs: PlatformActivity[] = [
  {
    id: "LOG-001",
    type: "SYNC",
    description: "Successfully synced 3 repositories from GitHub",
    timestamp: "2026-02-14T10:00:00Z",
    user: "System"
  },
  {
    id: "LOG-002",
    type: "PR_OPENED",
    description: "New PR #45 opened in frontend-ui",
    timestamp: "2026-02-14T09:45:00Z",
    user: "siva-muthu"
  },
  {
    id: "LOG-003",
    type: "PUSH",
    description: "Pushed 2 commits to backend-core:main",
    timestamp: "2026-02-14T08:30:00Z",
    user: "ai-agent-v2"
  },
  {
    id: "LOG-004",
    type: "CONNECTION_UPDATE",
    description: "GitHub connection re-authorized",
    timestamp: "2026-02-14T07:00:00Z",
    user: "admin"
  }
];
