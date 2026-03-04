import {
  Injectable,
  NotFoundException,
  ForbiddenException,
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
      { name: 'AI Agents', count: 5, lastExecution: '2 mins ago', riskLevel: 'HIGH' },
      { name: 'Workflows', count: 3, lastExecution: '1 hour ago', riskLevel: 'MEDIUM' },
      { name: 'Governance Systems', count: 2, lastExecution: 'Yesterday', riskLevel: 'HIGH' },
      { name: 'Sandbox Environments', count: 8, lastExecution: '4 hours ago', riskLevel: 'LOW' },
      { name: 'Integrations', count: 4, lastExecution: '3 days ago', riskLevel: 'MEDIUM' },
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
    const rawKey = `ak_${crypto.randomBytes(24).toString('hex')}`;
    const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');

    const prefix = dto.scope ? dto.scope.substring(0, 3).toLowerCase() : 'gen';
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

    return {
      keyId: keyIdDisplay,
      rawKey,
      message: 'Copy this key now. It will not be shown again.',
    };
  }

  async revokeApiKey(keyId: string, userId: string) {
    const key = await this.prisma.apiKey.findUnique({ where: { id: keyId } });
    if (!key) throw new NotFoundException('API key not found');
    if (key.ownerId !== userId) throw new ForbiddenException('Not your API key');

    await this.prisma.apiKey.update({
      where: { id: keyId },
      data: { status: 'REVOKED' },
    });

    return { success: true };
  }
}
