export interface Role {
  id: string;
  name: string;
  permissions: string[];
  modulesAccess: string[];
  description: string;
}

export interface Permission {
  id: string;
  name: string;
  module: string;
  action: 'VIEW' | 'EDIT' | 'APPROVE' | 'DEPLOY';
}

export const rolesData: Role[] = [
  {
    id: "ROLE-ADMIN",
    name: "Platform Administrator",
    description: "Full access to all modules and system configurations.",
    permissions: ["VIEW", "EDIT", "APPROVE", "DEPLOY"],
    modulesAccess: ["Dashboard", "Projects", "Workflows", "Agents", "Governance", "Sandbox", "Integrations", "Operations", "Administration"]
  },
  {
    id: "ROLE-ARCH",
    name: "Architecture Reviewer",
    description: "Can review and approve architectural decisions.",
    permissions: ["ADR_APPROVE", "CODE_REVIEW", "GOV_ANALYZE", "VIEW"],
    modulesAccess: ["Governance", "Projects", "Dashboard"]
  },
  {
    id: "ROLE-DEVOPS",
    name: "DevOps Engineer",
    description: "Manages deployments, pipelines, and cloud resources.",
    permissions: ["DEPLOY", "EDIT", "VIEW"],
    modulesAccess: ["Operations", "Integrations", "Sandbox", "Dashboard"]
  },
  {
    id: "ROLE-DEV",
    name: "Developer",
    description: "Standard developer access to projects and agents.",
    permissions: ["EDIT", "VIEW"],
    modulesAccess: ["Projects", "Agents", "Workflows", "Sandbox", "Dashboard"]
  }
];

export const permissionsList: Permission[] = [
  { id: "P-001", name: "View Dashboard", module: "Dashboard", action: "VIEW" },
  { id: "P-002", name: "Edit Projects", module: "Projects", action: "EDIT" },
  { id: "P-003", name: "Approve ADRs", module: "Governance", action: "APPROVE" },
  { id: "P-004", name: "Deploy to Production", module: "Operations", action: "DEPLOY" },
  { id: "P-005", name: "Configure AI Agents", module: "Administration", action: "EDIT" },
];

export const modulesList = [
  "Dashboard",
  "Projects",
  "Workflows",
  "Agents",
  "Governance",
  "Sandbox",
  "Integrations",
  "Operations",
  "Administration"
];

export const actionsList: ('VIEW' | 'EDIT' | 'APPROVE' | 'DEPLOY')[] = [
  "VIEW", "EDIT", "APPROVE", "DEPLOY"
];
