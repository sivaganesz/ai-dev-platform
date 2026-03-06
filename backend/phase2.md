You are building Phase 2 of the AI Dev Platform backend.
Phases 0 and 1 (setup + settings) are already complete.

This phase covers the CORE module:
  1. Dashboard  — read-only summary endpoint
  2. Projects   — full CRUD + frontend modal fixes
  3. Workflows  — full CRUD + frontend modal fixes

════════════════════════════════════════════════════════════
IMPORTANT RULES FOR THIS PHASE
════════════════════════════════════════════════════════════

1. FULL CRUD for Projects and Workflows — not just GET.
   The frontend has filter, search, and card components
   already built. Add Create / Edit / Delete modals.

2. The workflow-filter.tsx currently imports projectsData
   directly from mock. After migration it must load projects
   from the API instead.

3. The workflow-card.tsx currently imports projectsData from
   mock to resolve projectId → name. After migration this
   must use data from the API.

4. Dashboard charts (ProjectsOverviewChart, WorkflowStatusChart,
   TeamPerformanceChart, DeploymentSummary) are currently all
   hardcoded with static data. After migration they must use
   the real API data passed as props.

5. Return shapes must EXACTLY match what the hooks expect:
   useDashboardData → { metrics, activities, teamPerformance,
                        projects, workflows }
   useProjectsData  → Project[]
   useWorkflowsData → Workflow[]

════════════════════════════════════════════════════════════
STEP 1 — PRISMA MODELS
════════════════════════════════════════════════════════════

Add to prisma/schema.prisma:

model Project {
  id             String        @id @default(uuid())
  name           String
  description    String?
  status         ProjectStatus @default(ACTIVE)
  startDate      DateTime?     @map("start_date")
  endDate        DateTime?     @map("end_date")
  team           Json          @default("[]")
  owner          String?
  tasksCount     Int           @default(0) @map("tasks_count")
  completedTasks Int           @default(0) @map("completed_tasks")
  createdAt      DateTime      @default(now()) @map("created_at")
  updatedAt      DateTime      @updatedAt @map("updated_at")

  workflows      Workflow[]

  @@map("projects")
}

model Workflow {
  id             String         @id @default(uuid())
  projectId      String         @map("project_id")
  name           String
  description    String?
  status         WorkflowStatus @default(RUNNING)
  assignedTo     Json           @default("[]") @map("assigned_to")
  startDate      DateTime?      @map("start_date")
  endDate        DateTime?      @map("end_date")
  tasksCount     Int            @default(0) @map("tasks_count")
  completedTasks Int            @default(0) @map("completed_tasks")
  createdAt      DateTime       @default(now()) @map("created_at")
  updatedAt      DateTime       @updatedAt @map("updated_at")

  project        Project        @relation(fields: [projectId], references: [id])

  @@map("workflows")
}

model DashboardActivity {
  id          String   @id @default(uuid())
  type        String   // PROJECT | WORKFLOW | DEPLOYMENT | AGENT
  title       String
  description String?
  status      String   // SUCCESS | FAILED | IN_PROGRESS
  user        String?
  timestamp   DateTime @default(now())

  @@map("dashboard_activities")
}

Add these enums:

enum ProjectStatus {
  ACTIVE
  ON_HOLD
  COMPLETED
}

enum WorkflowStatus {
  RUNNING
  COMPLETED
  FAILED
}

Run:
  npx prisma migrate dev --name core_module
  npx prisma generate

════════════════════════════════════════════════════════════
STEP 2 — SEED DATA
════════════════════════════════════════════════════════════

Create prisma/seeds/core.seed.ts:

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

Update prisma/seed.ts to also call seedCore:

import { seedSettings } from './seeds/settings.seed';
import { seedCore } from './seeds/core.seed';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await seedSettings();
  await seedCore();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

Run: npx prisma db seed

════════════════════════════════════════════════════════════
STEP 3 — BACKEND MODULE STRUCTURE
════════════════════════════════════════════════════════════

Create inside src/modules/core/:

core/
├── core.module.ts
├── dashboard/
│   ├── dashboard.controller.ts
│   └── dashboard.service.ts
├── projects/
│   ├── projects.controller.ts
│   ├── projects.service.ts
│   └── dto/
│       ├── create-project.dto.ts
│       └── update-project.dto.ts
└── workflows/
    ├── workflows.controller.ts
    ├── workflows.service.ts
    └── dto/
        ├── create-workflow.dto.ts
        └── update-workflow.dto.ts

════════════════════════════════════════════════════════════
STEP 4 — DTOs
════════════════════════════════════════════════════════════

--- create-project.dto.ts ---

import {
  IsString, IsOptional, IsArray,
  IsDateString, IsIn, IsNumber
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'AI Chatbot' })
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ['ACTIVE', 'ON_HOLD', 'COMPLETED'] })
  @IsOptional() @IsIn(['ACTIVE', 'ON_HOLD', 'COMPLETED'])
  status?: string;

  @ApiPropertyOptional({ example: '2026-01-01' })
  @IsOptional() @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({ example: '2026-12-31' })
  @IsOptional() @IsDateString()
  endDate?: string;

  @ApiPropertyOptional({ example: ['Frontend', 'Backend'] })
  @IsOptional() @IsArray()
  team?: string[];

  @ApiPropertyOptional({ example: 'Alice Johnson' })
  @IsOptional() @IsString()
  owner?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  tasksCount?: number;
}

--- update-project.dto.ts ---

import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  completedTasks?: number;
}

--- create-workflow.dto.ts ---

import {
  IsString, IsOptional, IsArray,
  IsDateString, IsIn, IsNumber
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWorkflowDto {
  @ApiProperty()
  @IsString()
  projectId: string;

  @ApiProperty({ example: 'Intent Recognition Setup' })
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ['RUNNING', 'COMPLETED', 'FAILED'] })
  @IsOptional() @IsIn(['RUNNING', 'COMPLETED', 'FAILED'])
  status?: string;

  @ApiPropertyOptional({ example: ['ML', 'Backend'] })
  @IsOptional() @IsArray()
  assignedTo?: string[];

  @ApiPropertyOptional()
  @IsOptional() @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  tasksCount?: number;
}

--- update-workflow.dto.ts ---

import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowDto } from './create-workflow.dto';
import { IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateWorkflowDto extends PartialType(CreateWorkflowDto) {
  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  completedTasks?: number;
}

════════════════════════════════════════════════════════════
STEP 5 — SERVICES
════════════════════════════════════════════════════════════

--- dashboard.service.ts ---

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const [projects, workflows, activities] = await Promise.all([
      this.prisma.project.findMany({ orderBy: { createdAt: 'desc' } }),
      this.prisma.workflow.findMany({
        include: { project: true },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.dashboardActivity.findMany({
        orderBy: { timestamp: 'desc' },
        take: 10,
      }),
    ]);

    const metrics = {
      totalProjects: projects.length,
      activeProjects: projects.filter(p => p.status === 'ACTIVE').length,
      completedProjects: projects.filter(p => p.status === 'COMPLETED').length,
      totalWorkflows: workflows.length,
      activeWorkflows: workflows.filter(w => w.status === 'RUNNING').length,
      failedWorkflows: workflows.filter(w => w.status === 'FAILED').length,
      totalAgents: 6,
      activeAgents: 5,
      deploymentsThisWeek: 28,
    };

    const teamMap: Record<string, { completed: number; pending: number }> = {};
    projects.forEach(p => {
      const team = p.team as string[];
      team.forEach(t => {
        if (!teamMap[t]) teamMap[t] = { completed: 0, pending: 0 };
        teamMap[t].completed += p.completedTasks;
        teamMap[t].pending += (p.tasksCount - p.completedTasks);
      });
    });

    const teamPerformance = Object.entries(teamMap).map(([team, v]) => ({
      team,
      completedTasks: v.completed,
      pendingTasks: v.pending,
    }));

    const formattedProjects = projects.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      status: p.status,
      startDate: p.startDate?.toISOString().split('T')[0] || '',
      endDate: p.endDate?.toISOString().split('T')[0] || '',
      team: p.team as string[],
      owner: p.owner || '',
      tasksCount: p.tasksCount,
      completedTasks: p.completedTasks,
    }));

    const formattedWorkflows = workflows.map(w => ({
      id: w.id,
      projectId: w.projectId,
      name: w.name,
      description: w.description || '',
      status: w.status,
      assignedTo: w.assignedTo as string[],
      startDate: w.startDate?.toISOString().split('T')[0] || '',
      endDate: w.endDate?.toISOString().split('T')[0] || '',
      tasksCount: w.tasksCount,
      completedTasks: w.completedTasks,
    }));

    return {
      metrics,
      activities: activities.map(a => ({
        id: a.id,
        type: a.type,
        title: a.title,
        description: a.description || '',
        status: a.status,
        user: a.user || '',
        timestamp: a.timestamp.toISOString(),
      })),
      teamPerformance,
      projects: formattedProjects,
      workflows: formattedWorkflows,
    };
  }
}

--- projects.service.ts ---

import {
  Injectable, NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  private format(p: any) {
    return {
      id: p.id,
      name: p.name,
      description: p.description || '',
      status: p.status,
      startDate: p.startDate?.toISOString().split('T')[0] || '',
      endDate: p.endDate?.toISOString().split('T')[0] || '',
      team: p.team as string[],
      owner: p.owner || '',
      tasksCount: p.tasksCount,
      completedTasks: p.completedTasks,
    };
  }

  async findAll(status?: string, search?: string) {
    const projects = await this.prisma.project.findMany({
      where: {
        ...(status && status !== 'ALL'
          ? { status: status as any } : {}),
        ...(search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { owner: { contains: search, mode: 'insensitive' } },
              ],
            }
          : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
    return projects.map(this.format);
  }

  async findOne(id: string) {
    const p = await this.prisma.project.findUnique({
      where: { id },
      include: { workflows: true },
    });
    if (!p) throw new NotFoundException('Project not found');
    return this.format(p);
  }

  async create(dto: CreateProjectDto, userId: string) {
    const p = await this.prisma.project.create({
      data: {
        name: dto.name,
        description: dto.description,
        status: (dto.status as any) || 'ACTIVE',
        startDate: dto.startDate ? new Date(dto.startDate) : null,
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        team: dto.team || [],
        owner: dto.owner || '',
        tasksCount: dto.tasksCount || 0,
        completedTasks: 0,
      },
    });

    // Log activity
    await this.prisma.dashboardActivity.create({
      data: {
        type: 'PROJECT',
        title: `New Project: ${p.name}`,
        description: `Project created`,
        status: 'SUCCESS',
        user: userId,
      },
    });

    return this.format(p);
  }

  async update(id: string, dto: UpdateProjectDto) {
    const existing = await this.prisma.project.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Project not found');

    const p = await this.prisma.project.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.startDate !== undefined && {
          startDate: new Date(dto.startDate),
        }),
        ...(dto.endDate !== undefined && {
          endDate: new Date(dto.endDate),
        }),
        ...(dto.team !== undefined && { team: dto.team }),
        ...(dto.owner !== undefined && { owner: dto.owner }),
        ...(dto.tasksCount !== undefined && { tasksCount: dto.tasksCount }),
        ...(dto.completedTasks !== undefined && {
          completedTasks: dto.completedTasks,
        }),
      },
    });
    return this.format(p);
  }

  async remove(id: string) {
    const existing = await this.prisma.project.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Project not found');

    await this.prisma.workflow.deleteMany({ where: { projectId: id } });
    await this.prisma.project.delete({ where: { id } });
    return { success: true, id };
  }
}

--- workflows.service.ts ---

import {
  Injectable, NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@Injectable()
export class WorkflowsService {
  constructor(private prisma: PrismaService) {}

  private format(w: any) {
    return {
      id: w.id,
      projectId: w.projectId,
      name: w.name,
      description: w.description || '',
      status: w.status,
      assignedTo: w.assignedTo as string[],
      startDate: w.startDate?.toISOString().split('T')[0] || '',
      endDate: w.endDate?.toISOString().split('T')[0] || '',
      tasksCount: w.tasksCount,
      completedTasks: w.completedTasks,
    };
  }

  async findAll(status?: string, projectId?: string, search?: string) {
    const workflows = await this.prisma.workflow.findMany({
      where: {
        ...(status && status !== 'ALL'
          ? { status: status as any } : {}),
        ...(projectId && projectId !== 'ALL'
          ? { projectId } : {}),
        ...(search
          ? { name: { contains: search, mode: 'insensitive' } }
          : {}),
      },
      include: { project: true },
      orderBy: { createdAt: 'desc' },
    });
    return workflows.map(this.format);
  }

  async findOne(id: string) {
    const w = await this.prisma.workflow.findUnique({
      where: { id },
      include: { project: true },
    });
    if (!w) throw new NotFoundException('Workflow not found');
    return this.format(w);
  }

  async create(dto: CreateWorkflowDto) {
    const project = await this.prisma.project.findUnique({
      where: { id: dto.projectId },
    });
    if (!project) throw new NotFoundException('Project not found');

    const w = await this.prisma.workflow.create({
      data: {
        projectId: dto.projectId,
        name: dto.name,
        description: dto.description,
        status: (dto.status as any) || 'RUNNING',
        assignedTo: dto.assignedTo || [],
        startDate: dto.startDate ? new Date(dto.startDate) : null,
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        tasksCount: dto.tasksCount || 0,
        completedTasks: 0,
      },
    });
    return this.format(w);
  }

  async update(id: string, dto: UpdateWorkflowDto) {
    const existing = await this.prisma.workflow.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Workflow not found');

    const w = await this.prisma.workflow.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.projectId !== undefined && { projectId: dto.projectId }),
        ...(dto.assignedTo !== undefined && { assignedTo: dto.assignedTo }),
        ...(dto.startDate !== undefined && {
          startDate: new Date(dto.startDate),
        }),
        ...(dto.endDate !== undefined && {
          endDate: new Date(dto.endDate),
        }),
        ...(dto.tasksCount !== undefined && { tasksCount: dto.tasksCount }),
        ...(dto.completedTasks !== undefined && {
          completedTasks: dto.completedTasks,
        }),
      },
    });
    return this.format(w);
  }

  async remove(id: string) {
    const existing = await this.prisma.workflow.findUnique({
      where: { id },
    });
    if (!existing) throw new NotFoundException('Workflow not found');
    await this.prisma.workflow.delete({ where: { id } });
    return { success: true, id };
  }
}

════════════════════════════════════════════════════════════
STEP 6 — CONTROLLERS
════════════════════════════════════════════════════════════

--- dashboard.controller.ts ---

import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@ApiTags('Core - Dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('core/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  @ApiOperation({ summary: 'Get full dashboard summary' })
  getDashboard() {
    return this.dashboardService.getDashboard();
  }
}

--- projects.controller.ts ---

import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiTags('Core - Projects')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('core/projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all projects with optional filters' })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @Query('status') status?: string,
    @Query('search') search?: string,
  ) {
    return this.projectsService.findAll(status, search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get project by ID' })
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new project' })
  create(
    @Body() dto: CreateProjectDto,
    @CurrentUser() user: any,
  ) {
    return this.projectsService.create(dto, user.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update project' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete project and its workflows' })
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}

--- workflows.controller.ts ---

import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { WorkflowsService } from './workflows.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@ApiTags('Core - Workflows')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('core/workflows')
export class WorkflowsController {
  constructor(private workflowsService: WorkflowsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all workflows with optional filters' })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'projectId', required: false })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @Query('status') status?: string,
    @Query('projectId') projectId?: string,
    @Query('search') search?: string,
  ) {
    return this.workflowsService.findAll(status, projectId, search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get workflow by ID' })
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new workflow' })
  create(@Body() dto: CreateWorkflowDto) {
    return this.workflowsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update workflow' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateWorkflowDto,
  ) {
    return this.workflowsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete workflow' })
  remove(@Param('id') id: string) {
    return this.workflowsService.remove(id);
  }
}

════════════════════════════════════════════════════════════
STEP 7 — CORE MODULE + REGISTER IN APP
════════════════════════════════════════════════════════════

--- core.module.ts ---

import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { WorkflowsController } from './workflows/workflows.controller';
import { WorkflowsService } from './workflows/workflows.service';

@Module({
  controllers: [
    DashboardController,
    ProjectsController,
    WorkflowsController,
  ],
  providers: [
    DashboardService,
    ProjectsService,
    WorkflowsService,
  ],
  exports: [ProjectsService, WorkflowsService],
})
export class CoreModule {}

--- Update app.module.ts ---

import { CoreModule } from './modules/core/core.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    PrismaModule,
    RedisModule,
    AuthModule,
    SettingsModule,
    CoreModule,   // ← add this
  ],
})
export class AppModule {}

════════════════════════════════════════════════════════════
STEP 8 — FRONTEND HOOK MIGRATION
════════════════════════════════════════════════════════════

--- use-dashboard-data.ts ---

import { useQuery } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export function useDashboardData() {
  return useQuery({
    queryKey: ['dashboard-data'],
    queryFn: async () => {
      const { data } = await axiosClient.get('/core/dashboard');
      return data.data;
    },
  });
}

--- use-projects-data.ts ---

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export const useProjectsData = (status?: string, search?: string) => {
  return useQuery({
    queryKey: ['projects', status, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status && status !== 'ALL') params.set('status', status);
      if (search) params.set('search', search);
      const { data } = await axiosClient.get(`/core/projects?${params}`);
      return data.data;
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: any) =>
      axiosClient.post('/core/projects', dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: any) =>
      axiosClient.patch(`/core/projects/${id}`, dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      axiosClient.delete(`/core/projects/${id}`).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['projects'] }),
  });
};

--- use-workflows-data.ts ---

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '@/services/api/axios-client';

export const useWorkflowsData = (
  status?: string,
  projectId?: string,
  search?: string,
) => {
  return useQuery({
    queryKey: ['workflows', status, projectId, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (status && status !== 'ALL') params.set('status', status);
      if (projectId && projectId !== 'ALL') params.set('projectId', projectId);
      if (search) params.set('search', search);
      const { data } = await axiosClient.get(`/core/workflows?${params}`);
      return data.data;
    },
  });
};

export const useCreateWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (dto: any) =>
      axiosClient.post('/core/workflows', dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};

export const useUpdateWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...dto }: any) =>
      axiosClient.patch(`/core/workflows/${id}`, dto).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};

export const useDeleteWorkflow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      axiosClient.delete(`/core/workflows/${id}`).then(r => r.data.data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['workflows'] }),
  });
};

════════════════════════════════════════════════════════════
STEP 9 — FRONTEND COMPONENT FIXES
════════════════════════════════════════════════════════════

These 4 issues exist in the current frontend code that
must be fixed as part of this phase:

──────────────────────────────────────────────────────────
FIX 1 — workflow-filter.tsx imports projectsData from mock
──────────────────────────────────────────────────────────

Replace the hardcoded projectsData import with a prop:

// workflow-filter.tsx — add projects prop
interface WorkflowFilterProps {
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onProjectChange: (value: string) => void;
  projects: { id: string; name: string }[]; // ← ADD THIS
}

Remove the mock import line:
  import { projectsData } from "@/../mock/core/projects/projectsData";

Replace in JSX:
  {projectsData.map(...)}
  → {projects.map(...)}

Then in workflows-page.tsx pass projects down:
  const { data: projects } = useProjectsData();
  <WorkflowFilter
    projects={projects || []}
    onSearchChange={setSearch}
    onStatusChange={setStatusFilter}
    onProjectChange={setProjectFilter}
  />

──────────────────────────────────────────────────────────
FIX 2 — workflow-card.tsx imports projectsData from mock
──────────────────────────────────────────────────────────

Replace hardcoded projectsData lookup with a prop:

// workflow-card.tsx
interface WorkflowCardProps {
  workflow: Workflow;
  projectName?: string; // ← ADD THIS
}

Remove:
  import { projectsData } from "@/../mock/core/projects/projectsData";
  const projectName = projectsData.find(...)?.name || "Unknown Project";

Replace with:
  const resolvedName = projectName || 'Unknown Project';

In workflow-list.tsx, pass projectName per card:
  // Add projects prop to WorkflowList
  interface WorkflowListProps {
    workflows: Workflow[];
    projects: { id: string; name: string }[];
  }
  // In map:
  <WorkflowCard
    key={workflow.id}
    workflow={workflow}
    projectName={projects.find(p => p.id === workflow.projectId)?.name}
  />

──────────────────────────────────────────────────────────
FIX 3 — Dashboard charts are hardcoded with static data
──────────────────────────────────────────────────────────

Update these 3 components to accept real data as props:

projects-overview-chart.tsx:
  - Remove hardcoded `const data = [...]`
  - Accept prop: projects: { status: string }[]
  - Compute counts dynamically from props

workflow-status-chart.tsx (in dashboard/components):
  - Remove hardcoded `const data = [...]`
  - Accept prop: workflows: { status: string }[]
  - Compute counts dynamically from props

team-performance-chart.tsx:
  - Remove hardcoded `const data = [...]`
  - Accept prop: teamPerformance: TeamPerformance[]
  - Use prop data directly

deployment-summary.tsx:
  - Accept prop: metrics: DashboardMetrics
  - Replace hardcoded 124, 96.8%, 4 with
    metrics.deploymentsThisWeek, computed success rate

In dashboard-page.tsx pass the real data down:
  <ProjectsOverviewChart projects={data?.projects || []} />
  <WorkflowStatusChart workflows={data?.workflows || []} />
  <TeamPerformanceChart teamPerformance={data?.teamPerformance || []} />
  <DeploymentSummary metrics={data?.metrics} />

──────────────────────────────────────────────────────────
FIX 4 — recent-activities.tsx is hardcoded
──────────────────────────────────────────────────────────

Replace static `const activities = [...]` with a prop:

interface RecentActivitiesProps {
  activities: Activity[];
}

In dashboard-page.tsx:
  <RecentActivities activities={data?.activities || []} />

Format timestamp as relative time:
  // Replace hardcoded "2 hours ago" strings with:
  function timeAgo(timestamp: string) {
    const diff = Date.now() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / 3_600_000);
    const minutes = Math.floor(diff / 60_000);
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  }

════════════════════════════════════════════════════════════
STEP 10 — NEW FRONTEND CRUD MODALS
════════════════════════════════════════════════════════════

Add these new modal components to the frontend.
Use the existing ShadCN Dialog, Form, Input, Select
components that are already installed.

──────────────────────────────────────────────────────────
src/modules/projects/components/create-project-modal.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void }

Fields in the form:
  - Name (required text input)
  - Description (textarea)
  - Status (Select: ACTIVE / ON_HOLD / COMPLETED)
  - Owner (text input)
  - Start Date (date input)
  - End Date (date input)
  - Team (multi-select or comma-separated tags:
      Frontend, Backend, ML, QA, DevOps)
  - Tasks Count (number input)

On submit: call useCreateProject mutation
On success: close modal + show toast "Project created"
On error: show toast "Failed to create project"

──────────────────────────────────────────────────────────
src/modules/projects/components/edit-project-modal.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void; project: Project }

Same fields as Create but pre-filled with project data.
On submit: call useUpdateProject mutation with project.id
On success: close modal + show toast "Project updated"

──────────────────────────────────────────────────────────
src/modules/projects/components/delete-project-dialog.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void; project: Project }

Show confirmation:
  "Delete [project.name]?"
  "This will also delete all workflows in this project.
   This action cannot be undone."

Two buttons: Cancel | Delete (destructive red)
On confirm: call useDeleteProject mutation
On success: close + toast "Project deleted"

──────────────────────────────────────────────────────────
Update projects-page.tsx to wire up modals:
──────────────────────────────────────────────────────────

Add "+ New Project" button in the page header.
Add Edit and Delete buttons to each ProjectCard.
Wire all modal open/close state with useState.

Example header:
  <div className="flex items-center justify-between">
    <div>
      <h1>Projects</h1>
      <p>Manage and track all enterprise AI projects.</p>
    </div>
    <Button onClick={() => setCreateOpen(true)}>
      <Plus className="h-4 w-4 mr-2" />
      New Project
    </Button>
  </div>

Example card actions (add to ProjectCard footer):
  <div className="flex gap-2 pt-2 border-t">
    <Button size="sm" variant="outline"
      onClick={() => onEdit(project)}>
      <Pencil className="h-3 w-3 mr-1" /> Edit
    </Button>
    <Button size="sm" variant="destructive"
      onClick={() => onDelete(project)}>
      <Trash2 className="h-3 w-3 mr-1" /> Delete
    </Button>
  </div>

──────────────────────────────────────────────────────────
src/modules/workflows/components/create-workflow-modal.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void }

Fields:
  - Name (required)
  - Description (textarea)
  - Project (Select — load from useProjectsData())
  - Status (Select: RUNNING / COMPLETED / FAILED)
  - Assigned To (multi-tag: ML, Backend, Frontend,
                  DevOps, QA)
  - Start Date (date)
  - End Date (date)
  - Tasks Count (number)

On submit: call useCreateWorkflow mutation
On success: close + toast "Workflow created"

──────────────────────────────────────────────────────────
src/modules/workflows/components/edit-workflow-modal.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void; workflow: Workflow }
Same fields, pre-filled. Calls useUpdateWorkflow.

──────────────────────────────────────────────────────────
src/modules/workflows/components/delete-workflow-dialog.tsx
──────────────────────────────────────────────────────────

Props: { open: boolean; onClose: () => void; workflow: Workflow }
Confirmation dialog. Calls useDeleteWorkflow.

──────────────────────────────────────────────────────────
Update workflows-page.tsx to wire up modals:
──────────────────────────────────────────────────────────

Add "+ New Workflow" button in header.
Add Edit and Delete actions to each WorkflowCard.

════════════════════════════════════════════════════════════
STEP 11 — VERIFY ALL ENDPOINTS
════════════════════════════════════════════════════════════

Test via Swagger at http://localhost:3001/api/v1/docs
Authorize with Bearer token first.

✅ GET  /api/v1/core/dashboard
   Returns: { data: { metrics, activities, teamPerformance,
              projects, workflows } }
   metrics.totalProjects should be 4
   metrics.activeWorkflows should be 2

✅ GET  /api/v1/core/projects
   Returns: { data: Project[] } — 4 seeded projects

✅ GET  /api/v1/core/projects?status=ACTIVE
   Returns only ACTIVE projects (should be 2)

✅ GET  /api/v1/core/projects?search=chatbot
   Returns: AI Chatbot project

✅ POST /api/v1/core/projects
   Body: { "name": "Test Project", "status": "ACTIVE",
           "owner": "Test User", "team": ["Backend"],
           "tasksCount": 10 }
   Returns: created project with id

✅ PATCH /api/v1/core/projects/:id
   Body: { "status": "COMPLETED", "completedTasks": 10 }
   Returns: updated project

✅ DELETE /api/v1/core/projects/:id
   Returns: { "success": true, "id": "..." }

✅ GET  /api/v1/core/workflows
   Returns: { data: Workflow[] } — 4 seeded workflows

✅ GET  /api/v1/core/workflows?status=RUNNING
   Returns only RUNNING workflows (should be 2)

✅ GET  /api/v1/core/workflows?projectId=<id>
   Returns workflows for that specific project (should be 1)

✅ POST /api/v1/core/workflows
   Body: { "projectId": "<existing id>", "name": "Test WF",
           "status": "RUNNING", "tasksCount": 5 }
   Returns: created workflow

✅ PATCH /api/v1/core/workflows/:id
   Body: { "status": "COMPLETED", "completedTasks": 5 }
   Returns: updated workflow

✅ DELETE /api/v1/core/workflows/:id
   Returns: { "success": true, "id": "..." }

Frontend checks:
✅ Dashboard page loads real metrics from DB
✅ Projects page shows 4 seeded projects
✅ "+ New Project" button opens create modal
✅ Edit button on project card opens edit modal
✅ Delete button shows confirmation then deletes
✅ Workflows page shows 4 seeded workflows
✅ Project filter dropdown loads projects from API
✅ "+ New Workflow" button opens create modal
✅ Edit / Delete actions work on workflow cards
✅ No more mock imports in dashboard, projects,
   or workflows files

════════════════════════════════════════════════════════════
PHASE 2 COMPLETION CHECKLIST
════════════════════════════════════════════════════════════

[ ] Prisma migration ran — projects, workflows,
    dashboard_activities tables created
[ ] Seed ran — 4 projects + 4 workflows + 4 activities
[ ] All 12 API endpoints return correct shapes
[ ] Dashboard charts driven by real data
[ ] No hardcoded / mock data remains in CORE module
[ ] Create / Edit / Delete modals working for Projects
[ ] Create / Edit / Delete modals working for Workflows
[ ] Workflow filter loads projects from API (not mock)

Once all 8 items are checked, reply "Phase 2 complete"
and we move to Phase 3 — AI AGENTS module.