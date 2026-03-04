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
      notifications: (ext?.notificationPrefs as any[]) || [],
      activity: activity.map((a: any) => ({
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
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    if (dto.firstName || dto.lastName) {
      const nameParts = user.name.split(' ');
      const newFirst = dto.firstName || nameParts[0];
      const newLast = dto.lastName || nameParts.slice(1).join(' ');
      await this.prisma.user.update({
        where: { id: userId },
        data: { name: `${newFirst} ${newLast}`.trim() },
      });
    }

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
      update: { notificationPrefs: dto.notificationPreferences },
      create: { userId, notificationPrefs: dto.notificationPreferences },
    });
    return { success: true };
  }
}
