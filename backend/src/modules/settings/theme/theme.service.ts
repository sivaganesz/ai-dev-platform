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
