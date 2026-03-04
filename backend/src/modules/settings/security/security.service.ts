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
      securityIncidents: incidents.filter((i) => i.status !== 'RESOLVED').length,
      threatAlerts: 5,
    };

    const authControls = [
      { id: 'AC-001', policy: 'MFA Required', status: 'Enabled', description: 'Enforce multi-factor authentication for all users.' },
      { id: 'AC-002', policy: 'Password Length', status: '12 chars', description: 'Minimum character count for platform passwords.' },
      { id: 'AC-003', policy: 'SSO Enablement', status: 'Enabled', description: 'Allow login via enterprise identity providers.' },
      { id: 'AC-004', policy: 'Session Timeout', status: '30 mins', description: 'Automatic logout after period of inactivity.' },
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
