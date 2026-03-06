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
        ...(status && status !== 'ALL' ? { status: status as any } : {}),
        ...(projectId && projectId !== 'ALL' ? { projectId } : {}),
        ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
      },
      include: { project: true },
      orderBy: { createdAt: 'desc' },
    });
    return workflows.map(w => this.format(w));
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
    const existing = await this.prisma.workflow.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Workflow not found');

    const w = await this.prisma.workflow.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.status !== undefined && { status: dto.status as any }),
        ...(dto.projectId !== undefined && { projectId: dto.projectId }),
        ...(dto.assignedTo !== undefined && { assignedTo: dto.assignedTo }),
        ...(dto.startDate !== undefined && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate !== undefined && { endDate: new Date(dto.endDate) }),
        ...(dto.tasksCount !== undefined && { tasksCount: dto.tasksCount }),
        ...(dto.completedTasks !== undefined && { completedTasks: dto.completedTasks }),
      },
    });
    return this.format(w);
  }

  async remove(id: string) {
    const existing = await this.prisma.workflow.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Workflow not found');
    await this.prisma.workflow.delete({ where: { id } });
    return { success: true, id };
  }
}
