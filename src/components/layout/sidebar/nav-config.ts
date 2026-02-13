import {
  LayoutDashboard,
  FolderKanban,
  GitBranch,
  Bot,
  UserCheck,
  ClipboardCheck,
  Box,
  FlaskConical,
  MonitorPlay,
  Hammer,
  Plug,
  Workflow,
  Cloud,
  Bell,
  Rocket,
  Activity,
  FileText,
  BarChart3,
  Users,
  ShieldCheck,
  FileCode,
  CreditCard,
  User,
  Building2,
  Palette,
  Key,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  role?: string[];
}

export interface NavGroup {
  groupLabel: string;
  items: NavItem[];
}

export const navigationConfig: NavGroup[] = [
  {
    groupLabel: "CORE",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Projects",
        href: "/projects",
        icon: FolderKanban,
      },
      {
        title: "Workflows",
        href: "/workflows",
        icon: GitBranch,
      },
    ],
  },
  {
    groupLabel: "AI AGENTS",
    items: [
      {
        title: "Agents Overview",
        href: "/agents",
        icon: Bot,
      },
      {
        title: "Frontend Agent",
        href: "/agents/frontend",
        icon: FileCode,
      },
      {
        title: "Backend Agent",
        href: "/agents/backend",
        icon: Hammer,
      },
      {
        title: "QA Agent",
        href: "/agents/qa",
        icon: ClipboardCheck,
      },
      {
        title: "DevOps Agent",
        href: "/agents/devops",
        icon: Cloud,
      },
      {
        title: "UX Agent",
        href: "/agents/ux",
        icon: Palette,
      },
    ],
  },
  {
    groupLabel: "DEVELOPMENT GOVERNANCE",
    items: [
      {
        title: "Senior Developers",
        href: "/governance/senior-developers",
        icon: Users,
      },
      {
        title: "Approvals",
        href: "/governance/approvals",
        icon: UserCheck,
        badge: "3",
      },
      {
        title: "Code Reviews",
        href: "/governance/reviews",
        icon: FileText,
      },
      {
        title: "Architecture Decisions",
        href: "/governance/architecture",
        icon: ShieldCheck,
      },
    ],
  },
  {
    groupLabel: "SANDBOX & DEMO",
    items: [
      {
        title: "Sandbox Environments",
        href: "/sandbox",
        icon: Box,
      },
      {
        title: "Live UI Previews",
        href: "/sandbox/previews",
        icon: MonitorPlay,
      },
      {
        title: "Demo Builds",
        href: "/sandbox/builds",
        icon: FlaskConical,
      },
      {
        title: "API Simulations",
        href: "/sandbox/api",
        icon: Workflow,
      },
    ],
  },
  {
    groupLabel: "INTEGRATIONS",
    items: [
      {
        title: "Platforms",
        href: "/integrations",
        icon: Plug,
      },
      {
        title: "CI/CD Pipelines",
        href: "/integrations/cicd",
        icon: Rocket,
      },
      {
        title: "Cloud Providers",
        href: "/integrations/cloud",
        icon: Cloud,
      },
      {
        title: "Notification Systems",
        href: "/integrations/notifications",
        icon: Bell,
      },
    ],
  },
  {
    groupLabel: "OPERATIONS",
    items: [
      {
        title: "Deployments",
        href: "/operations/deployments",
        icon: Rocket,
      },
      {
        title: "Monitoring",
        href: "/operations/monitoring",
        icon: Activity,
      },
      {
        title: "Logs",
        href: "/operations/logs",
        icon: FileText,
      },
      {
        title: "Performance",
        href: "/operations/performance",
        icon: BarChart3,
      },
    ],
  },
  {
    groupLabel: "ADMINISTRATION",
    items: [
      {
        title: "Users & Teams",
        href: "/admin/users",
        icon: Users,
      },
      {
        title: "Roles & Permissions",
        href: "/admin/roles",
        icon: Shield,
      },
      {
        title: "AI Configurations",
        href: "/admin/ai-config",
        icon: Bot,
      },
      {
        title: "Prompt Templates",
        href: "/admin/prompts",
        icon: FileCode,
      },
      {
        title: "Usage & Billing",
        href: "/admin/billing",
        icon: CreditCard,
      },
    ],
  },
  {
    groupLabel: "SETTINGS",
    items: [
      {
        title: "Profile",
        href: "/settings/profile",
        icon: User,
      },
      {
        title: "Company Info",
        href: "/settings/company",
        icon: Building2,
      },
      {
        title: "Theme Preferences",
        href: "/settings/theme",
        icon: Palette,
      },
      {
        title: "API Keys",
        href: "/settings/keys",
        icon: Key,
      },
      {
        title: "Security",
        href: "/settings/security",
        icon: ShieldCheck,
      },
    ],
  },
];
