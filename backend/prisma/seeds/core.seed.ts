import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

export async function seedCore() {
  // Projects
  const p1 = await prisma.project.create({
    data: {
      name: 'AI Chatbot',
      description: 'Enterprise-level AI customer support chatbot',
      status: 'ACTIVE',
      startDate: new Date('2026-01-01'),
      endDate: new Date('2026-06-30'),
      team: ['Frontend', 'Backend', 'ML'],
      owner: 'Alice Johnson',
      tasksCount: 50,
      completedTasks: 20,
    },
  });

  const p2 = await prisma.project.create({
    data: {
      name: 'Workflow Automation',
      description: 'Automate sales and internal workflows',
      status: 'ON_HOLD',
      startDate: new Date('2026-02-01'),
      endDate: new Date('2026-07-31'),
      team: ['Backend', 'DevOps'],
      owner: 'Bob Smith',
      tasksCount: 30,
      completedTasks: 10,
    },
  });

  const p3 = await prisma.project.create({
    data: {
      name: 'Data Analytics Platform',
      description: 'Platform for real-time business analytics',
      status: 'COMPLETED',
      startDate: new Date('2025-08-01'),
      endDate: new Date('2026-01-15'),
      team: ['Frontend', 'Backend', 'QA'],
      owner: 'Charlie Lee',
      tasksCount: 40,
      completedTasks: 40,
    },
  });

  const p4 = await prisma.project.create({
    data: {
      name: 'Cloud Migration',
      description: 'Migrating legacy systems to AWS',
      status: 'ACTIVE',
      startDate: new Date('2026-03-01'),
      endDate: new Date('2026-12-31'),
      team: ['DevOps', 'Backend'],
      owner: 'David Miller',
      tasksCount: 60,
      completedTasks: 5,
    },
  });

  // Workflows
  await prisma.workflow.createMany({
    data: [
      {
        projectId: p1.id,
        name: 'Intent Recognition Setup',
        description: 'Setup NLP models for intent recognition',
        status: 'RUNNING',
        assignedTo: ['ML', 'Backend'],
        startDate: new Date('2026-01-05'),
        endDate: new Date('2026-03-10'),
        tasksCount: 10,
        completedTasks: 3,
      },
      {
        projectId: p2.id,
        name: 'Email Automation Workflow',
        description: 'Automate email sending for leads',
        status: 'FAILED',
        assignedTo: ['Backend', 'DevOps'],
        startDate: new Date('2026-02-10'),
        endDate: new Date('2026-04-15'),
        tasksCount: 8,
        completedTasks: 5,
      },
      {
        projectId: p3.id,
        name: 'Report Generation',
        description: 'Generate daily business analytics reports',
        status: 'COMPLETED',
        assignedTo: ['Backend', 'QA'],
        startDate: new Date('2025-08-10'),
        endDate: new Date('2026-01-10'),
        tasksCount: 15,
        completedTasks: 15,
      },
      {
        projectId: p4.id,
        name: 'S3 Bucket Configuration',
        description: 'Configure secure S3 buckets for data storage',
        status: 'RUNNING',
        assignedTo: ['DevOps'],
        startDate: new Date('2026-03-05'),
        endDate: new Date('2026-04-01'),
        tasksCount: 5,
        completedTasks: 1,
      },
    ],
  });

  // Dashboard activities
  await prisma.dashboardActivity.createMany({
    data: [
      {
        type: 'DEPLOYMENT',
        title: 'Production Deploy',
        description: 'Alpha AI successfully deployed to production',
        status: 'SUCCESS',
        user: 'DevOps Agent',
        timestamp: new Date('2026-02-13T09:00:00Z'),
      },
      {
        type: 'WORKFLOW',
        title: 'UI Component Library',
        description: 'Build failed due to linting errors',
        status: 'FAILED',
        user: 'Frontend Agent',
        timestamp: new Date('2026-02-13T08:45:00Z'),
      },
      {
        type: 'PROJECT',
        title: 'New Project: Zeta',
        description: 'Project Zeta initialized by admin',
        status: 'SUCCESS',
        user: 'Siva Muthu',
        timestamp: new Date('2026-02-13T08:30:00Z'),
      },
      {
        type: 'AGENT',
        title: 'QA Agent assigned',
        description: 'Assigned to Project Delta for regression testing',
        status: 'IN_PROGRESS',
        user: 'System',
        timestamp: new Date('2026-02-13T08:15:00Z'),
      },
    ],
  });

  console.log('✅ Core seed complete');
}
