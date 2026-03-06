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
    return projects.map(p => this.format(p));
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

    await this.prisma.dashboardActivity.create({
      data: {
        type: 'PROJECT',
        title: `New Project: ${p.name}`,
        description: 'Project created',
        status: 'SUCCESS',
        user: userId,
      },
    });

    return this.format(p);
  }

  async update(id: string, dto: UpdateProjectDto) {
    const existing = await this.prisma.project.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Project not found');

    const p = await this.prisma.project.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.startDate !== undefined && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate !== undefined && { endDate: new Date(dto.endDate) }),
        ...(dto.team !== undefined && { team: dto.team }),
        ...(dto.owner !== undefined && { owner: dto.owner }),
        ...(dto.tasksCount !== undefined && { tasksCount: dto.tasksCount }),
        ...(dto.completedTasks !== undefined && { completedTasks: dto.completedTasks }),
      },
    });
    return this.format(p);
  }

  async remove(id: string) {
    const existing = await this.prisma.project.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Project not found');

    await this.prisma.workflow.deleteMany({ where: { projectId: id } });
    await this.prisma.project.delete({ where: { id } });
    return { success: true, id };
  }
}
