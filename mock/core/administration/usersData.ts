export interface User {
  id: string;
  name: string;
  email: string;
  roleId: string;
  roleName: string;
  teamId: string;
  teamName: string;
  assignedAgents: string[];
  status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  joinedAt: string;
  avatar?: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  leadId: string;
  parentTeamId?: string;
}

export const usersData: User[] = [
  {
    id: "USR-001",
    name: "Sivaganesh",
    email: "siva@platform.ai",
    roleId: "ROLE-ADMIN",
    roleName: "Administrator",
    teamId: "TEAM-CORE",
    teamName: "Core Platform",
    assignedAgents: ["AG-001", "AG-002"],
    status: "ACTIVE",
    joinedAt: "2025-08-10"
  },
  {
    id: "USR-002",
    name: "John Doe",
    email: "john@platform.ai",
    roleId: "ROLE-LEAD",
    roleName: "Team Lead",
    teamId: "TEAM-FE",
    teamName: "Frontend",
    assignedAgents: ["AG-003"],
    status: "ACTIVE",
    joinedAt: "2025-09-15"
  },
  {
    id: "USR-003",
    name: "Alice Smith",
    email: "alice@platform.ai",
    roleId: "ROLE-DEV",
    roleName: "Senior Developer",
    teamId: "TEAM-BE",
    teamName: "Backend",
    assignedAgents: ["AG-004", "AG-005"],
    status: "ACTIVE",
    joinedAt: "2025-10-01"
  },
  {
    id: "USR-004",
    name: "Bob Wilson",
    email: "bob@platform.ai",
    roleId: "ROLE-QA",
    roleName: "QA Engineer",
    teamId: "TEAM-QA",
    teamName: "Quality Assurance",
    assignedAgents: ["AG-006"],
    status: "PENDING",
    joinedAt: "2026-02-01"
  }
];

export const teamsData: Team[] = [
  {
    id: "TEAM-CORE",
    name: "Core Platform",
    description: "Infrastructure and core services",
    memberCount: 5,
    leadId: "USR-001"
  },
  {
    id: "TEAM-DEV",
    name: "Engineering",
    description: "Product development teams",
    memberCount: 25,
    leadId: "USR-001",
    parentTeamId: "TEAM-CORE"
  },
  {
    id: "TEAM-FE",
    name: "Frontend",
    description: "User interface and experience",
    memberCount: 8,
    leadId: "USR-002",
    parentTeamId: "TEAM-DEV"
  },
  {
    id: "TEAM-BE",
    name: "Backend",
    description: "Server-side logic and APIs",
    memberCount: 12,
    leadId: "USR-003",
    parentTeamId: "TEAM-DEV"
  },
  {
    id: "TEAM-QA",
    name: "Quality Assurance",
    description: "Testing and automation",
    memberCount: 5,
    leadId: "USR-004",
    parentTeamId: "TEAM-DEV"
  }
];

export const adminStats = {
  totalUsers: 48,
  activeTeams: 6,
  pendingInvites: 3,
  assignedAgents: 12
};
