import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

export async function seedSettings() {
  // 1. Create default role
  const adminRole = await prisma.role.upsert({
    where: { name: 'Platform Administrator' },
    update: {},
    create: {
      name: 'Platform Administrator',
      description: 'Full access to all modules and system configurations.',
      permissions: ['VIEW', 'EDIT', 'APPROVE', 'DEPLOY'],
      modulesAccess: [
        'Dashboard', 'Projects', 'Workflows', 'Agents',
        'Governance', 'Sandbox', 'Integrations',
        'Operations', 'Administration', 'Settings',
      ],
    },
  });

  // 2. Create default team
  let coreTeam = await prisma.team.findFirst({ where: { name: 'Core Platform' } });
  if (!coreTeam) {
    coreTeam = await prisma.team.create({
      data: {
        name: 'Core Platform',
        description: 'Core platform engineering team',
        memberCount: 1,
      },
    });
  }

  // 3. Create admin user
  const passwordHash = await bcrypt.hash('Admin@123456', 12);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@platform.ai' },
    update: {},
    create: {
      email: 'admin@platform.ai',
      name: 'Sivaganesh',
      passwordHash,
      roleId: adminRole.id,
      teamId: coreTeam.id,
      status: 'ACTIVE',
    },
  });

  // 4. Profile extension
  await prisma.userProfileExt.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      phone: '+1 (555) 012-3456',
      jobTitle: 'Senior AI Engineer',
      department: 'Platform AI',
      manager: 'CTO',
      timezone: 'IST (UTC+5:30)',
      roleTier: 'Tier 1',
      agentPreferences: [
        { id: 'AP-001', name: 'Auto Task Assignment', status: true, description: 'Allow AI to automatically assign relevant development tasks to you.' },
        { id: 'AP-002', name: 'AI Code Suggestions', status: true, description: 'Enable real-time code optimization and snippet suggestions.' },
        { id: 'AP-003', name: 'Escalation Alerts', status: false, description: 'Receive immediate alerts when an agent requires manual intervention.' },
        { id: 'AP-004', name: 'Prompt History Tracking', status: true, description: 'Keep a searchable history of all prompt interactions for audit.' },
      ],
      notificationPrefs: [
        { channel: 'Email', enabled: true, events: [
          { event: 'Approval requests', enabled: true },
          { event: 'Code reviews', enabled: true },
          { event: 'Deployment alerts', enabled: false },
        ]},
        { channel: 'Slack', enabled: true, events: [
          { event: 'AI execution failures', enabled: true },
          { event: 'Sandbox build completion', enabled: true },
        ]},
        { channel: 'Teams', enabled: false, events: [] },
        { channel: 'In-App', enabled: true, events: [
          { event: 'All operational updates', enabled: true },
        ]},
      ],
      accessScopes: [
        { category: 'Governance', privilege: 'Approval Authority', status: 'GRANTED' },
        { category: 'Sandbox', privilege: 'Environment Creation', status: 'GRANTED' },
        { category: 'Deployment', privilege: 'Production Rollout', status: 'RESTRICTED' },
        { category: 'Administration', privilege: 'User Management', status: 'DENIED' },
      ],
    },
  });

  // 5. Activity traces
  const traces = [
    { action: 'Approved Architecture ADR-042', module: 'Governance' },
    { action: 'Triggered Demo Build', module: 'Sandbox' },
    { action: 'Reviewed AI Prompt', module: 'Agents' },
    { action: 'Modified Cloud Config', module: 'Integrations' },
  ];
  for (const t of traces) {
    await prisma.activityTrace.create({
      data: { userId: adminUser.id, action: t.action, module: t.module },
    });
  }

  // 6. Theme preferences
  await prisma.themePreference.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      mode: 'dark',
      accentColor: '#06b6d4',
      uiDensity: 'dense',
      codeTheme: 'dracula',
      visualizationStyle: 'modern',
    },
  });

  // 7. MFA config
  await prisma.mFAConfig.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      userId: adminUser.id,
      status: 'ENABLED',
      method: 'Authenticator App',
      lastVerified: '2 hrs ago',
    },
  });

  // 8. API Keys
  const keysToSeed = [
    { name: 'Agents Execution Key', keyIdDisplay: 'key_agt_8829', scope: 'AI Agents', environment: 'Production', permissions: ['EXECUTE', 'READ'], status: 'ACTIVE', expiryDate: new Date('2026-04-10') },
    { name: 'Workflow Trigger Key', keyIdDisplay: 'key_wf_1102', scope: 'Workflows', environment: 'Staging', permissions: ['EXECUTE'], status: 'ACTIVE', expiryDate: new Date('2026-03-15') },
    { name: 'Sandbox Runner Key', keyIdDisplay: 'key_sbx_4491', scope: 'Sandbox', environment: 'Sandbox', permissions: ['READ', 'WRITE', 'EXECUTE'], status: 'ACTIVE', expiryDate: new Date('2026-05-01') },
    { name: 'GitHub Sync Key', keyIdDisplay: 'key_git_0023', scope: 'Integrations', environment: 'Production', permissions: ['READ', 'WRITE'], status: 'EXPIRED', expiryDate: new Date('2026-02-10') },
    { name: 'Demo Build Key', keyIdDisplay: 'key_db_7712', scope: 'Demo Builds', environment: 'Development', permissions: ['EXECUTE'], status: 'ACTIVE', expiryDate: new Date('2026-05-10') },
  ];

  for (const k of keysToSeed) {
    // Skip if key already exists (idempotent)
    const existing = await prisma.apiKey.findFirst({ where: { keyIdDisplay: k.keyIdDisplay } });
    if (!existing) {
      const rawKey = `${k.keyIdDisplay}_${crypto.randomBytes(16).toString('hex')}`;
      const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');
      await prisma.apiKey.create({
        data: {
          name: k.name,
          keyHash,
          keyIdDisplay: k.keyIdDisplay,
          scope: k.scope,
          ownerId: adminUser.id,
          environment: k.environment,
          permissions: k.permissions,
          status: k.status as any,
          expiryDate: k.expiryDate,
        },
      });
    }
  }

  // 9. Company profile
  await prisma.companyProfile.upsert({
    where: { id: 'company-main' },
    update: {},
    create: {
      id: 'company-main',
      name: 'Cognation AI Labs',
      legalName: 'Cognation Artificial Intelligence Corporation',
      industry: 'Enterprise AI Platforms',
      size: '2,500 Employees',
      hq: 'San Francisco, USA',
      founded: 2016,
      website: 'https://cognation.ai',
      supportEmail: 'support@cognation.ai',
      branding: { brandColor: '#3b82f6', platformDisplayName: 'Cognation DevPlatform', emailBranding: true },
      compliance: {
        requireArchApproval: true,
        requireSecurityReview: true,
        mandatoryQAValidation: true,
        promptAuditLogging: true,
        dataRetentionDays: 180,
        standards: [
          { name: 'SOC 2', enabled: true },
          { name: 'ISO 27001', enabled: true },
          { name: 'GDPR', enabled: true },
          { name: 'HIPAA', enabled: false },
        ],
      },
      deploymentPolicies: [
        { environment: 'Production', region: 'US East', provider: 'AWS' },
        { environment: 'Staging', region: 'India', provider: 'Azure' },
        { environment: 'Sandbox', region: 'Singapore', provider: 'GCP' },
      ],
      aiGovernance: {
        allowAutonomousExecution: false,
        requireHumanApproval: true,
        promptLoggingLevel: 'INFO',
        tokenCapPerMonth: 10000000,
      },
    },
  });

  // 10. Security incidents
  const incidents = [
    { type: 'Unauthorized API Access', severity: 'HIGH', module: 'Agents', status: 'INVESTIGATING' },
    { type: 'MFA Bypass Attempt', severity: 'MEDIUM', module: 'Auth', status: 'RESOLVED' },
    { type: 'Multiple Failed Logins', severity: 'LOW', module: 'Identity', status: 'RESOLVED' },
  ];
  for (const i of incidents) {
    await prisma.securityIncident.create({ data: i });
  }

  // 11. Security audit logs
  const auditEntries = [
    { action: 'Role Updated', module: 'Administration', userId: adminUser.id, result: 'SUCCESS' },
    { action: 'Key Rotated', module: 'Settings', userId: adminUser.id, result: 'SUCCESS' },
    { action: 'Policy Changed', module: 'Security', userId: adminUser.id, result: 'SUCCESS' },
  ];
  for (const a of auditEntries) {
    await prisma.securityAuditLog.create({ data: a });
  }

  console.log('✅ Settings seed complete');
}
