You are building Phase 1 of the AI Dev Platform backend.
Phase 0 (project setup, auth, prisma, docker) is already complete.

This phase covers the SETTINGS module only.
It has 5 sub-modules:
  1. Profile
  2. Company Info
  3. Theme Preferences
  4. API Keys
  5. Security

════════════════════════════════════════════════════════════
CONTEXT — HOW THE FRONTEND CONSUMES THESE APIs
════════════════════════════════════════════════════════════

All 5 hooks use useQuery (pure reads) + some mutations from
form components (PATCH). The hook return shapes are FIXED —
the backend must return exactly these shapes.

Base URL the frontend uses: http://localhost:3001/api/v1
All routes require: Authorization: Bearer <token>
The logged-in user's ID comes from the JWT (req.user.id).

════════════════════════════════════════════════════════════
STEP 1 — ADD PRISMA MODELS
════════════════════════════════════════════════════════════

Add these models to prisma/schema.prisma.
(Users, Roles, Teams, ApiKey, UserProfileExt, ThemePreference,
CompanyProfile, ActiveSession already exist from Phase 0.
Only add what is missing.)

model RegisteredDevice {
  id          String   @id @default(uuid())
  name        String
  owner       String
  trustLevel  String   @default("UNVERIFIED")
  lastAccess  String
  userId      String?  @map("user_id")
  createdAt   DateTime @default(now()) @map("created_at")

  @@map("registered_devices")
}

model MFAConfig {
  id           String   @id @default(uuid())
  userId       String   @unique @map("user_id")
  status       String   @default("DISABLED")
  method       String?
  lastVerified String?  @map("last_verified")
  updatedAt    DateTime @updatedAt @map("updated_at")

  user         User     @relation(fields: [userId], references: [id])

  @@map("mfa_configs")
}

model ActivityTrace {
  id        String   @id @default(uuid())
  userId    String   @map("user_id")
  action    String
  module    String
  date      DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])

  @@map("activity_traces")
}

Also add these relations to the existing User model:
  mfaConfig      MFAConfig?
  activityTraces ActivityTrace[]

Then run:
  npx prisma migrate dev --name settings_module
  npx prisma generate

════════════════════════════════════════════════════════════
STEP 2 — SEED DATA
════════════════════════════════════════════════════════════

Create prisma/seeds/settings.seed.ts

This seed creates one default admin user with all related
settings data so the frontend has real data to display.

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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
        'Operations', 'Administration', 'Settings'
      ],
    },
  });

  // 2. Create default team
  const coreTeam = await prisma.team.upsert({
    where: { name: 'Core Platform' },
    update: {},
    create: {
      name: 'Core Platform',
      description: 'Core platform engineering team',
      memberCount: 1,
    },
  });

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
        { id: 'AP-001', name: 'Auto Task Assignment', status: true,
          description: 'Allow AI to automatically assign relevant development tasks to you.' },
        { id: 'AP-002', name: 'AI Code Suggestions', status: true,
          description: 'Enable real-time code optimization and snippet suggestions.' },
        { id: 'AP-003', name: 'Escalation Alerts', status: false,
          description: 'Receive immediate alerts when an agent requires manual intervention.' },
        { id: 'AP-004', name: 'Prompt History Tracking', status: true,
          description: 'Keep a searchable history of all prompt interactions for audit.' },
      ],
      notificationPreferences: [
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

  // 8. API Keys (store hashed — display value is keyIdDisplay)
  const crypto = require('crypto');
  const keysToSeed = [
    {
      name: 'Agents Execution Key',
      keyIdDisplay: 'key_agt_8829',
      scope: 'AI Agents',
      environment: 'Production',
      permissions: ['EXECUTE', 'READ'],
      status: 'ACTIVE',
      expiryDate: new Date('2026-04-10'),
    },
    {
      name: 'Workflow Trigger Key',
      keyIdDisplay: 'key_wf_1102',
      scope: 'Workflows',
      environment: 'Staging',
      permissions: ['EXECUTE'],
      status: 'ACTIVE',
      expiryDate: new Date('2026-03-15'),
    },
    {
      name: 'Sandbox Runner Key',
      keyIdDisplay: 'key_sbx_4491',
      scope: 'Sandbox',
      environment: 'Sandbox',
      permissions: ['READ', 'WRITE', 'EXECUTE'],
      status: 'ACTIVE',
      expiryDate: new Date('2026-05-01'),
    },
    {
      name: 'GitHub Sync Key',
      keyIdDisplay: 'key_git_0023',
      scope: 'Integrations',
      environment: 'Production',
      permissions: ['READ', 'WRITE'],
      status: 'EXPIRED',
      expiryDate: new Date('2026-02-10'),
    },
    {
      name: 'Demo Build Key',
      keyIdDisplay: 'key_db_7712',
      scope: 'Demo Builds',
      environment: 'Development',
      permissions: ['EXECUTE'],
      status: 'ACTIVE',
      expiryDate: new Date('2026-05-10'),
    },
  ];

  for (const k of keysToSeed) {
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
      branding: {
        brandColor: '#3b82f6',
        platformDisplayName: 'Cognation DevPlatform',
        emailBranding: true,
      },
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
    { type: 'Unauthorized API Access', severity: 'HIGH',
      module: 'Agents', status: 'INVESTIGATING' },
    { type: 'MFA Bypass Attempt', severity: 'MEDIUM',
      module: 'Auth', status: 'RESOLVED' },
    { type: 'Multiple Failed Logins', severity: 'LOW',
      module: 'Identity', status: 'RESOLVED' },
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

Then create prisma/seed.ts:

import { seedSettings } from './seeds/settings.seed';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await seedSettings();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

Add to package.json:
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}

Run: npx prisma db seed

════════════════════════════════════════════════════════════
STEP 3 — SETTINGS MODULE STRUCTURE
════════════════════════════════════════════════════════════

Create this inside src/modules/settings/:

settings/
├── settings.module.ts
├── profile/
│   ├── profile.controller.ts
│   ├── profile.service.ts
│   └── dto/
│       └── update-profile.dto.ts
├── company/
│   ├── company.controller.ts
│   ├── company.service.ts
│   └── dto/
│       └── update-company.dto.ts
├── theme/
│   ├── theme.controller.ts
│   ├── theme.service.ts
│   └── dto/
│       └── update-theme.dto.ts
├── api-keys/
│   ├── api-keys.controller.ts
│   ├── api-keys.service.ts
│   └── dto/
│       └── create-api-key.dto.ts
└── security/
    ├── security.controller.ts
    └── security.service.ts

════════════════════════════════════════════════════════════
STEP 4 — DTOs
════════════════════════════════════════════════════════════

--- update-profile.dto.ts ---

import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional() @IsOptional() @IsString()
  firstName?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  lastName?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  phone?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  jobTitle?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  department?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  manager?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  timezone?: string;
}

export class UpdateAgentPrefsDto {
  @ApiPropertyOptional() @IsOptional() @IsArray()
  agentPreferences?: any[];
}

export class UpdateNotificationPrefsDto {
  @ApiPropertyOptional() @IsOptional() @IsArray()
  notificationPreferences?: any[];
}

--- update-company.dto.ts ---

import { IsString, IsOptional, IsNumber, IsObject } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCompanyDto {
  @ApiPropertyOptional() @IsOptional() @IsString()
  name?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  industry?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  website?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  supportEmail?: string;

  @ApiPropertyOptional() @IsOptional() @IsObject()
  branding?: {
    brandColor?: string;
    platformDisplayName?: string;
    emailBranding?: boolean;
  };

  @ApiPropertyOptional() @IsOptional() @IsObject()
  compliance?: {
    requireArchApproval?: boolean;
    requireSecurityReview?: boolean;
    mandatoryQAValidation?: boolean;
    promptAuditLogging?: boolean;
    dataRetentionDays?: number;
    standards?: { name: string; enabled: boolean }[];
  };
}

--- update-theme.dto.ts ---

import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateThemeDto {
  @ApiPropertyOptional({ enum: ['light', 'dark', 'system'] })
  @IsOptional() @IsString()
  themeMode?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  primaryColor?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  accentColor?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  hoverColor?: string;

  @ApiPropertyOptional({ enum: ['sharp', 'rounded', 'pill'] })
  @IsOptional() @IsString()
  buttonStyle?: string;

  @ApiPropertyOptional({ enum: ['comfortable', 'compact', 'dense'] })
  @IsOptional() @IsString()
  uiDensity?: string;

  @ApiPropertyOptional({ enum: ['modern', 'classic'] })
  @IsOptional() @IsString()
  chartStyle?: string;

  @ApiPropertyOptional() @IsOptional() @IsBoolean()
  graphAnimation?: boolean;

  @ApiPropertyOptional({ enum: ['linear', 'node-graph'] })
  @IsOptional() @IsString()
  pipelineFlowStyle?: string;

  @ApiPropertyOptional() @IsOptional() @IsBoolean()
  heatmapVisibility?: boolean;

  @ApiPropertyOptional() @IsOptional() @IsString()
  fontFamily?: string;

  @ApiPropertyOptional() @IsOptional() @IsNumber()
  fontSize?: number;

  @ApiPropertyOptional() @IsOptional() @IsNumber()
  lineSpacing?: number;

  @ApiPropertyOptional() @IsOptional() @IsString()
  syntaxTheme?: string;

  @ApiPropertyOptional() @IsOptional() @IsBoolean()
  highContrast?: boolean;

  @ApiPropertyOptional() @IsOptional() @IsBoolean()
  reducedMotion?: boolean;
}

--- create-api-key.dto.ts ---

import {
  IsString, IsArray, IsOptional, IsDateString, IsIn
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateApiKeyDto {
  @ApiProperty({ example: 'My API Key' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'AI Agents' })
  @IsOptional() @IsString()
  scope?: string;

  @ApiProperty({ enum: ['Development', 'Sandbox', 'Staging', 'Production'] })
  @IsIn(['Development', 'Sandbox', 'Staging', 'Production'])
  environment: string;

  @ApiProperty({
    example: ['READ', 'WRITE'],
    enum: ['READ', 'WRITE', 'EXECUTE', 'ADMIN'],
    isArray: true
  })
  @IsArray()
  permissions: string[];

  @ApiPropertyOptional({ example: '2026-12-31' })
  @IsOptional() @IsDateString()
  expiryDate?: string;
}

════════════════════════════════════════════════════════════
STEP 5 — SERVICES
════════════════════════════════════════════════════════════

--- profile.service.ts ---

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import {
  UpdateProfileDto,
  UpdateAgentPrefsDto,
  UpdateNotificationPrefsDto,
} from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { role: true, team: true, profileExt: true },
    });
    if (!user) throw new NotFoundException('User not found');

    const ext = user.profileExt;
    const nameParts = user.name.split(' ');

    const profile = {
      id: user.id,
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      email: user.email,
      phone: ext?.phone || '',
      jobTitle: ext?.jobTitle || '',
      department: ext?.department || '',
      manager: ext?.manager || '',
      timezone: ext?.timezone || '',
      lastLogin: new Date().toISOString(),
      role: user.role?.name || '',
      roleTier: ext?.roleTier || 'Tier 1',
    };

    const activity = await this.prisma.activityTrace.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 10,
    });

    const stats = {
      tasksCompleted: 142,
      approvalsHandled: 28,
      promptsExecuted: 1240,
      reviewsPerformed: 45,
    };

    const accessScopes = (ext?.accessScopes as any[]) || [];

    return {
      profile,
      agentPrefs: (ext?.agentPreferences as any[]) || [],
      notifications: (ext?.notificationPreferences as any[]) || [],
      activity: activity.map((a) => ({
        id: a.id,
        action: a.action,
        module: a.module,
        date: a.date.toISOString().split('T')[0],
      })),
      access: accessScopes,
      stats,
    };
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundException('User not found');

    // Update name if firstName/lastName changed
    if (dto.firstName || dto.lastName) {
      const nameParts = user.name.split(' ');
      const newFirst = dto.firstName || nameParts[0];
      const newLast = dto.lastName || nameParts.slice(1).join(' ');
      await this.prisma.user.update({
        where: { id: userId },
        data: { name: `${newFirst} ${newLast}`.trim() },
      });
    }

    // Update profile extension
    await this.prisma.userProfileExt.upsert({
      where: { userId },
      update: {
        phone: dto.phone,
        jobTitle: dto.jobTitle,
        department: dto.department,
        manager: dto.manager,
        timezone: dto.timezone,
      },
      create: {
        userId,
        phone: dto.phone,
        jobTitle: dto.jobTitle,
        department: dto.department,
        manager: dto.manager,
        timezone: dto.timezone,
      },
    });

    return this.getProfile(userId);
  }

  async updateAgentPreferences(userId: string, dto: UpdateAgentPrefsDto) {
    await this.prisma.userProfileExt.upsert({
      where: { userId },
      update: { agentPreferences: dto.agentPreferences },
      create: { userId, agentPreferences: dto.agentPreferences },
    });
    return { success: true };
  }

  async updateNotificationPreferences(
    userId: string,
    dto: UpdateNotificationPrefsDto,
  ) {
    await this.prisma.userProfileExt.upsert({
      where: { userId },
      update: { notificationPreferences: dto.notificationPreferences },
      create: {
        userId,
        notificationPreferences: dto.notificationPreferences,
      },
    });
    return { success: true };
  }
}

--- company.service.ts ---

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getCompany() {
    const company = await this.prisma.companyProfile.findFirst();
    if (!company) throw new NotFoundException('Company profile not found');

    const branding = company.branding as any || {};
    const compliance = company.compliance as any || {};
    const deploymentPolicies = company.deploymentPolicies as any[] || [];
    const aiGovernance = company.aiGovernance as any || {};

    return {
      profile: {
        name: company.name,
        legalName: company.legalName,
        industry: company.industry,
        size: company.size,
        hq: company.hq,
        founded: company.founded,
        website: company.website,
        supportEmail: company.supportEmail,
      },
      branding,
      hierarchy: [
        { id: 'ORG-001', department: 'Engineering',
          head: 'David Kim', teams: ['Frontend', 'Backend', 'Mobile'] },
        { id: 'ORG-002', department: 'AI Research',
          head: 'Elena Ross', teams: ['ML', 'Agents', 'NLP'] },
        { id: 'ORG-003', department: 'DevOps',
          head: 'Mark Chen', teams: ['Infra', 'SRE', 'Security'] },
        { id: 'ORG-004', department: 'Product',
          head: 'Sarah Chen', teams: ['Design', 'Analytics'] },
      ],
      compliance,
      deployments: deploymentPolicies,
      strategies: [
        { type: 'Sandbox', policy: 'Auto-expire after 7 days' },
        { type: 'Demo Builds', policy: 'Retention for 30 days' },
        { type: 'Production', policy: 'Human approval required for rollout' },
      ],
      aiGov: aiGovernance,
      license: {
        planType: 'Enterprise',
        agentCredits: '2M/month',
        sandboxHours: 5000,
        apiSimulationCalls: 'Unlimited',
      },
      stats: {
        deploymentsByRegion: [
          { region: 'US East', count: 45 },
          { region: 'Europe', count: 32 },
          { region: 'India', count: 28 },
          { region: 'Singapore', count: 15 },
        ],
        sandboxUsageByTeam: [
          { team: 'Frontend', hours: 1200 },
          { team: 'Backend', hours: 1800 },
          { team: 'AI Research', hours: 950 },
          { team: 'QA', hours: 450 },
        ],
      },
    };
  }

  async updateCompany(dto: UpdateCompanyDto) {
    const company = await this.prisma.companyProfile.findFirst();
    if (!company) throw new NotFoundException('Company profile not found');

    const existing = company.branding as any || {};
    const existingCompliance = company.compliance as any || {};

    await this.prisma.companyProfile.update({
      where: { id: company.id },
      data: {
        name: dto.name ?? company.name,
        industry: dto.industry ?? company.industry,
        website: dto.website ?? company.website,
        supportEmail: dto.supportEmail ?? company.supportEmail,
        branding: dto.branding
          ? { ...existing, ...dto.branding }
          : company.branding,
        compliance: dto.compliance
          ? { ...existingCompliance, ...dto.compliance }
          : company.compliance,
      },
    });

    return this.getCompany();
  }
}

--- theme.service.ts ---

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Injectable()
export class ThemeService {
  constructor(private prisma: PrismaService) {}

  async getTheme(userId: string) {
    const theme = await this.prisma.themePreference.findUnique({
      where: { userId },
    });

    const settings = {
      themeMode: theme?.mode || 'dark',
      primaryColor: '#6366f1',
      accentColor: theme?.accentColor || '#06b6d4',
      hoverColor: '#93c5fd',
      buttonStyle: 'rounded',
      uiDensity: theme?.uiDensity || 'dense',
      chartStyle: theme?.visualizationStyle || 'modern',
      graphAnimation: true,
      pipelineFlowStyle: 'node-graph',
      heatmapVisibility: true,
      fontFamily: 'JetBrains Mono',
      fontSize: 14,
      lineSpacing: 1.5,
      syntaxTheme: theme?.codeTheme || 'dracula',
      highContrast: false,
      reducedMotion: false,
    };

    const roleColors = [
      { role: 'Frontend', color: '#3b82f6' },
      { role: 'Backend', color: '#a855f7' },
      { role: 'QA', color: '#22c55e' },
      { role: 'DevOps', color: '#f97316' },
      { role: 'UX', color: '#ec4899' },
    ];

    const stats = {
      activeUsersOnDark: 85,
      mostPopularAccent: 'Indigo',
      accessibilityModeUsers: 12,
    };

    return { settings, roleColors, stats };
  }

  async updateTheme(userId: string, dto: UpdateThemeDto) {
    await this.prisma.themePreference.upsert({
      where: { userId },
      update: {
        mode: dto.themeMode,
        accentColor: dto.accentColor,
        uiDensity: dto.uiDensity,
        codeTheme: dto.syntaxTheme,
        visualizationStyle: dto.chartStyle,
      },
      create: {
        userId,
        mode: dto.themeMode || 'dark',
        accentColor: dto.accentColor,
        uiDensity: dto.uiDensity,
        codeTheme: dto.syntaxTheme,
        visualizationStyle: dto.chartStyle,
      },
    });

    return this.getTheme(userId);
  }
}

--- api-keys.service.ts ---

import {
  Injectable, NotFoundException, ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';
import * as crypto from 'crypto';

@Injectable()
export class ApiKeysService {
  constructor(private prisma: PrismaService) {}

  async getApiKeys(userId: string) {
    const keys = await this.prisma.apiKey.findMany({
      where: { ownerId: userId },
      include: { activityLogs: { orderBy: { timestamp: 'desc' }, take: 20 } },
      orderBy: { createdDate: 'desc' },
    });

    const formatted = keys.map((k) => ({
      id: k.id,
      name: k.name,
      keyId: k.keyIdDisplay,
      scope: k.scope,
      owner: 'You',
      createdDate: k.createdDate.toISOString().split('T')[0],
      expiryDate: k.expiryDate?.toISOString().split('T')[0] || '',
      status: k.status,
      lastUsed: k.lastUsed?.toISOString() || '',
      environment: k.environment,
      permissions: k.permissions,
    }));

    const allLogs = keys.flatMap((k) =>
      k.activityLogs.map((l) => ({
        id: l.id,
        keyId: k.keyIdDisplay,
        module: l.module,
        action: l.action,
        status: l.status,
        timestamp: l.timestamp.toISOString(),
        ipAddress: l.ipAddress || '',
      })),
    );

    const scopes = [
      { name: 'AI Agents', count: 5,
        lastExecution: '2 mins ago', riskLevel: 'HIGH' },
      { name: 'Workflows', count: 3,
        lastExecution: '1 hour ago', riskLevel: 'MEDIUM' },
      { name: 'Governance Systems', count: 2,
        lastExecution: 'Yesterday', riskLevel: 'HIGH' },
      { name: 'Sandbox Environments', count: 8,
        lastExecution: '4 hours ago', riskLevel: 'LOW' },
      { name: 'Integrations', count: 4,
        lastExecution: '3 days ago', riskLevel: 'MEDIUM' },
    ];

    const usageTrend = [
      { name: 'Feb 08', executions: 450 },
      { name: 'Feb 09', executions: 520 },
      { name: 'Feb 10', executions: 840 },
      { name: 'Feb 11', executions: 610 },
      { name: 'Feb 12', executions: 720 },
      { name: 'Feb 13', executions: 980 },
      { name: 'Feb 14', executions: 1240 },
    ];

    const summary = {
      total: keys.length,
      active: keys.filter((k) => k.status === 'ACTIVE').length,
      expired: keys.filter((k) => k.status === 'EXPIRED').length,
      revoked: keys.filter((k) => k.status === 'REVOKED').length,
    };

    return { keys: formatted, scopes, logs: allLogs, usageTrend, summary };
  }

  async createApiKey(userId: string, dto: CreateApiKeyDto) {
    // Generate the raw key — shown ONCE then never again
    const rawKey = `ak_${crypto.randomBytes(24).toString('hex')}`;
    const keyHash = crypto
      .createHash('sha256')
      .update(rawKey)
      .digest('hex');

    const prefix = dto.scope
      ? dto.scope.substring(0, 3).toLowerCase()
      : 'gen';
    const suffix = crypto.randomBytes(4).toString('hex');
    const keyIdDisplay = `key_${prefix}_${suffix}`;

    await this.prisma.apiKey.create({
      data: {
        name: dto.name,
        keyHash,
        keyIdDisplay,
        scope: dto.scope,
        ownerId: userId,
        environment: dto.environment,
        permissions: dto.permissions,
        expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : null,
        status: 'ACTIVE',
      },
    });

    // Return rawKey ONCE — frontend must copy it, it cannot be retrieved again
    return {
      keyId: keyIdDisplay,
      rawKey,
      message: 'Copy this key now. It will not be shown again.',
    };
  }

  async revokeApiKey(keyId: string, userId: string) {
    const key = await this.prisma.apiKey.findUnique({
      where: { id: keyId },
    });
    if (!key) throw new NotFoundException('API key not found');
    if (key.ownerId !== userId)
      throw new ForbiddenException('Not your API key');

    await this.prisma.apiKey.update({
      where: { id: keyId },
      data: { status: 'REVOKED' },
    });

    return { success: true };
  }
}

--- security.service.ts ---

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class SecurityService {
  constructor(private prisma: PrismaService) {}

  async getSecurityData(userId: string) {
    const [sessions, incidents, auditLogs, mfaConfig, devices] =
      await Promise.all([
        this.prisma.activeSession.findMany({
          where: { status: 'ACTIVE' },
          orderBy: { loginTime: 'desc' },
          take: 20,
        }),
        this.prisma.securityIncident.findMany({
          orderBy: { timestamp: 'desc' },
          take: 10,
        }),
        this.prisma.securityAuditLog.findMany({
          orderBy: { timestamp: 'desc' },
          take: 10,
        }),
        this.prisma.mFAConfig.findUnique({ where: { userId } }),
        this.prisma.registeredDevice.findMany({ take: 10 }),
      ]);

    const summary = {
      activeSessions: sessions.length,
      mfaEnabledUsers: 82,
      failedLogins7d: 43,
      securityIncidents: incidents.filter(
        (i) => i.status !== 'RESOLVED',
      ).length,
      threatAlerts: 5,
    };

    const authControls = [
      { id: 'AC-001', policy: 'MFA Required',
        status: 'Enabled',
        description: 'Enforce multi-factor authentication for all users.' },
      { id: 'AC-002', policy: 'Password Length',
        status: '12 chars',
        description: 'Minimum character count for platform passwords.' },
      { id: 'AC-003', policy: 'SSO Enablement',
        status: 'Enabled',
        description: 'Allow login via enterprise identity providers.' },
      { id: 'AC-004', policy: 'Session Timeout',
        status: '30 mins',
        description: 'Automatic logout after period of inactivity.' },
    ];

    const policies = [
      { id: 'POL-001', policy: 'MFA Mandatory', enforcement: 'Yes' },
      { id: 'POL-002', policy: 'Key Rotation', enforcement: '60 days' },
      { id: 'POL-003', policy: 'Session Timeout', enforcement: '30 mins' },
      { id: 'POL-004', policy: 'IP Restrictions', enforcement: 'Enabled' },
    ];

    const loginTrend = [
      { name: 'Mon', success: 1200, failed: 12 },
      { name: 'Tue', success: 1150, failed: 8 },
      { name: 'Wed', success: 1340, failed: 25 },
      { name: 'Thu', success: 1280, failed: 15 },
      { name: 'Fri', success: 1420, failed: 43 },
      { name: 'Sat', success: 980, failed: 5 },
      { name: 'Sun', success: 850, failed: 2 },
    ];

    const mfaUsers = [
      {
        id: mfaConfig?.id || 'MU-001',
        user: 'You',
        status: mfaConfig?.status || 'DISABLED',
        method: mfaConfig?.method || '—',
        lastVerified: mfaConfig?.lastVerified || '—',
      },
    ];

    return {
      summary,
      authControls,
      mfaUsers,
      sessions: sessions.map((s) => ({
        id: s.id,
        user: 'Session',
        device: s.device || 'Unknown',
        location: s.location || 'Unknown',
        ip: s.ip || '—',
        loginTime: s.loginTime.toISOString(),
        status: s.status,
      })),
      devices: devices.map((d) => ({
        id: d.id,
        name: d.name,
        owner: d.owner,
        trustLevel: d.trustLevel,
        lastAccess: d.lastAccess,
      })),
      incidents: incidents.map((i) => ({
        id: i.id,
        type: i.type,
        severity: i.severity,
        module: i.module,
        status: i.status,
        timestamp: i.timestamp.toISOString(),
      })),
      policies,
      auditLogs: auditLogs.map((a) => ({
        action: a.action,
        user: 'Admin',
        target: a.module,
        date: a.timestamp.toISOString(),
      })),
      loginTrend,
    };
  }

  async terminateSession(sessionId: string) {
    const session = await this.prisma.activeSession.findUnique({
      where: { id: sessionId },
    });
    if (!session) throw new NotFoundException('Session not found');

    await this.prisma.activeSession.update({
      where: { id: sessionId },
      data: { status: 'EXPIRED' },
    });

    return { success: true };
  }
}

════════════════════════════════════════════════════════════
STEP 6 — CONTROLLERS
════════════════════════════════════════════════════════════

--- profile.controller.ts ---

import {
  Controller, Get, Patch, Body, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ProfileService } from './profile.service';
import {
  UpdateProfileDto,
  UpdateAgentPrefsDto,
  UpdateNotificationPrefsDto,
} from './dto/update-profile.dto';

@ApiTags('Settings - Profile')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user profile + preferences' })
  getProfile(@CurrentUser() user: any) {
    return this.profileService.getProfile(user.id);
  }

  @Patch()
  @ApiOperation({ summary: 'Update personal info' })
  updateProfile(
    @CurrentUser() user: any,
    @Body() dto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(user.id, dto);
  }

  @Patch('agent-preferences')
  @ApiOperation({ summary: 'Update agent interaction preferences' })
  updateAgentPrefs(
    @CurrentUser() user: any,
    @Body() dto: UpdateAgentPrefsDto,
  ) {
    return this.profileService.updateAgentPreferences(user.id, dto);
  }

  @Patch('notifications')
  @ApiOperation({ summary: 'Update notification preferences' })
  updateNotifications(
    @CurrentUser() user: any,
    @Body() dto: UpdateNotificationPrefsDto,
  ) {
    return this.profileService.updateNotificationPreferences(user.id, dto);
  }
}

--- company.controller.ts ---

import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Settings - Company')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Get company profile and settings' })
  getCompany() {
    return this.companyService.getCompany();
  }

  @Patch()
  @ApiOperation({ summary: 'Update company profile' })
  updateCompany(@Body() dto: UpdateCompanyDto) {
    return this.companyService.updateCompany(dto);
  }
}

--- theme.controller.ts ---

import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ThemeService } from './theme.service';
import { UpdateThemeDto } from './dto/update-theme.dto';

@ApiTags('Settings - Theme')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Get()
  @ApiOperation({ summary: 'Get theme preferences' })
  getTheme(@CurrentUser() user: any) {
    return this.themeService.getTheme(user.id);
  }

  @Patch()
  @ApiOperation({ summary: 'Save theme preferences' })
  updateTheme(
    @CurrentUser() user: any,
    @Body() dto: UpdateThemeDto,
  ) {
    return this.themeService.updateTheme(user.id, dto);
  }
}

--- api-keys.controller.ts ---

import {
  Controller, Get, Post, Delete, Body, Param, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';

@ApiTags('Settings - API Keys')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/api-keys')
export class ApiKeysController {
  constructor(private apiKeysService: ApiKeysService) {}

  @Get()
  @ApiOperation({ summary: 'Get all API keys for current user' })
  getApiKeys(@CurrentUser() user: any) {
    return this.apiKeysService.getApiKeys(user.id);
  }

  @Post()
  @ApiOperation({ summary: 'Generate new API key — raw key shown ONCE' })
  createApiKey(
    @CurrentUser() user: any,
    @Body() dto: CreateApiKeyDto,
  ) {
    return this.apiKeysService.createApiKey(user.id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Revoke API key' })
  revokeApiKey(
    @Param('id') id: string,
    @CurrentUser() user: any,
  ) {
    return this.apiKeysService.revokeApiKey(id, user.id);
  }
}

--- security.controller.ts ---

import {
  Controller, Get, Delete, Param, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { SecurityService } from './security.service';

@ApiTags('Settings - Security')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/security')
export class SecurityController {
  constructor(private securityService: SecurityService) {}

  @Get()
  @ApiOperation({ summary: 'Get security dashboard data' })
  getSecurityData(@CurrentUser() user: any) {
    return this.securityService.getSecurityData(user.id);
  }

  @Delete('sessions/:id')
  @ApiOperation({ summary: 'Terminate an active session' })
  terminateSession(@Param('id') id: string) {
    return this.securityService.terminateSession(id);
  }
}

════════════════════════════════════════════════════════════
STEP 7 — SETTINGS MODULE + REGISTER IN APP
════════════════════════════════════════════════════════════

--- settings.module.ts ---

import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { ThemeController } from './theme/theme.controller';
import { ThemeService } from './theme/theme.service';
import { ApiKeysController } from './api-keys/api-keys.controller';
import { ApiKeysService } from './api-keys/api-keys.service';
import { SecurityController } from './security/security.controller';
import { SecurityService } from './security/security.service';

@Module({
  controllers: [
    ProfileController,
    CompanyController,
    ThemeController,
    ApiKeysController,
    SecurityController,
  ],
  providers: [
    ProfileService,
    CompanyService,
    ThemeService,
    ApiKeysService,
    SecurityService,
  ],
})
export class SettingsModule {}

--- Update src/app.module.ts — add SettingsModule ---

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaModule } from './database/prisma.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    PrismaModule,
    RedisModule,
    AuthModule,
    SettingsModule,   // ← add this
  ],
})
export class AppModule {}

════════════════════════════════════════════════════════════
STEP 8 — FRONTEND HOOK MIGRATION
════════════════════════════════════════════════════════════

After the backend is running, update these 5 hooks in the
frontend. Same pattern for all of them — remove mock import
and replace the queryFn body:

--- use-profile-data.ts ---
import axiosClient from '@/services/api/axios-client';

export function useProfileData() {
  return useQuery({
    queryKey: ['user-profile-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get('/settings/profile');
      return data.data;
    },
  });
}

--- use-company-data.ts ---
queryFn: async () => {
  const { data } = await axiosClient.get('/settings/company');
  return data.data;
}

--- use-theme-data.ts ---
queryFn: async () => {
  const { data } = await axiosClient.get('/settings/theme');
  return data.data;
}

--- use-api-keys-data.ts ---
queryFn: async () => {
  const { data } = await axiosClient.get('/settings/api-keys');
  return data.data;
}

--- use-security-data.ts ---
queryFn: async () => {
  const { data } = await axiosClient.get('/settings/security');
  return data.data;
}

Note: data.data because the backend wraps all responses in:
{ data: <payload>, success: true, timestamp: "..." }

════════════════════════════════════════════════════════════
STEP 9 — VERIFY ALL ENDPOINTS
════════════════════════════════════════════════════════════

Test all endpoints via Swagger at:
http://localhost:3001/api/v1/docs

First: POST /auth/login → copy the accessToken
Then click "Authorize" button in Swagger → paste token

Test each endpoint:

✅ GET  /api/v1/settings/profile
   Expected: { data: { profile, agentPrefs, notifications,
               activity, access, stats } }

✅ PATCH /api/v1/settings/profile
   Body: { "firstName": "Siva", "jobTitle": "Lead Engineer" }
   Expected: updated profile object

✅ PATCH /api/v1/settings/profile/agent-preferences
   Body: { "agentPreferences": [{ "id": "AP-001",
           "name": "Auto Task Assignment", "status": false,
           "description": "..." }] }
   Expected: { "success": true }

✅ PATCH /api/v1/settings/profile/notifications
   Body: { "notificationPreferences": [...] }
   Expected: { "success": true }

✅ GET  /api/v1/settings/company
   Expected: { data: { profile, branding, hierarchy,
               compliance, deployments, strategies,
               aiGov, license, stats } }

✅ PATCH /api/v1/settings/company
   Body: { "branding": { "brandColor": "#6366f1" } }
   Expected: updated company object

✅ GET  /api/v1/settings/theme
   Expected: { data: { settings, roleColors, stats } }

✅ PATCH /api/v1/settings/theme
   Body: { "themeMode": "light", "accentColor": "#f97316" }
   Expected: updated theme settings

✅ GET  /api/v1/settings/api-keys
   Expected: { data: { keys, scopes, logs,
               usageTrend, summary } }

✅ POST /api/v1/settings/api-keys
   Body: { "name": "Test Key", "scope": "AI Agents",
           "environment": "Development",
           "permissions": ["READ"] }
   Expected: { "keyId": "key_ai_xxxx",
               "rawKey": "ak_xxxxxx",
               "message": "Copy this key now..." }

✅ DELETE /api/v1/settings/api-keys/:id
   Expected: { "success": true }

✅ GET  /api/v1/settings/security
   Expected: { data: { summary, authControls, mfaUsers,
               sessions, devices, incidents, policies,
               auditLogs, loginTrend } }

✅ DELETE /api/v1/settings/security/sessions/:id
   Expected: { "success": true }

════════════════════════════════════════════════════════════
PHASE 1 COMPLETION CHECKLIST
════════════════════════════════════════════════════════════

[ ] Prisma migration ran with no errors
[ ] Seed ran — admin user created in DB
[ ] npm run start:dev — no TypeScript errors
[ ] All 12 endpoints return correct data shapes
[ ] Frontend hooks updated — Settings pages load real data
[ ] No mock imports remain in the 5 settings hooks

Once all 6 items are checked, reply "Phase 1 complete"
and we move to Phase 2 — CORE module
(Dashboard, Projects, Workflows).