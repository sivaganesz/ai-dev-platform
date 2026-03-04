import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getCompany() {
    const company = await this.prisma.companyProfile.findFirst();
    if (!company) throw new NotFoundException('Company profile not found');

    const branding = (company.branding as any) || {};
    const compliance = (company.compliance as any) || {};
    const deploymentPolicies = (company.deploymentPolicies as any[]) || [];
    const aiGovernance = (company.aiGovernance as any) || {};

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
        { id: 'ORG-001', department: 'Engineering', head: 'David Kim', teams: ['Frontend', 'Backend', 'Mobile'] },
        { id: 'ORG-002', department: 'AI Research', head: 'Elena Ross', teams: ['ML', 'Agents', 'NLP'] },
        { id: 'ORG-003', department: 'DevOps', head: 'Mark Chen', teams: ['Infra', 'SRE', 'Security'] },
        { id: 'ORG-004', department: 'Product', head: 'Sarah Chen', teams: ['Design', 'Analytics'] },
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

    const existingBranding = (company.branding as any) || {};
    const existingCompliance = (company.compliance as any) || {};

    await this.prisma.companyProfile.update({
      where: { id: company.id },
      data: {
        name: dto.name ?? company.name,
        industry: dto.industry ?? company.industry,
        website: dto.website ?? company.website,
        supportEmail: dto.supportEmail ?? company.supportEmail,
        branding: dto.branding
          ? { ...existingBranding, ...dto.branding }
          : company.branding,
        compliance: dto.compliance
          ? { ...existingCompliance, ...dto.compliance }
          : company.compliance,
      },
    });

    return this.getCompany();
  }
}
