export interface ThemeSettings {
  themeMode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
  hoverColor: string;
  buttonStyle: 'sharp' | 'rounded' | 'pill';
  uiDensity: 'comfortable' | 'compact' | 'dense';
  chartStyle: 'modern' | 'classic';
  graphAnimation: boolean;
  pipelineFlowStyle: 'linear' | 'node-graph';
  heatmapVisibility: boolean;
  fontFamily: string;
  fontSize: number;
  lineSpacing: number;
  syntaxTheme: string;
  highContrast: boolean;
  reducedMotion: boolean;
}

export interface RoleColorMapping {
  role: string;
  color: string;
}

export const defaultThemeSettings: ThemeSettings = {
  themeMode: 'dark',
  primaryColor: '#6366f1', // Indigo
  accentColor: '#06b6d4', // Cyan
  hoverColor: '#93c5fd', // Soft Blue
  buttonStyle: 'rounded',
  uiDensity: 'dense',
  chartStyle: 'modern',
  graphAnimation: true,
  pipelineFlowStyle: 'node-graph',
  heatmapVisibility: true,
  fontFamily: 'JetBrains Mono',
  fontSize: 14,
  lineSpacing: 1.5,
  syntaxTheme: 'dracula',
  highContrast: false,
  reducedMotion: false
};

export const roleColorMappings: RoleColorMapping[] = [
  { role: 'Frontend', color: '#3b82f6' }, // Blue
  { role: 'Backend', color: '#a855f7' }, // Purple
  { role: 'QA', color: '#22c55e' },      // Green
  { role: 'DevOps', color: '#f97316' },  // Orange
  { role: 'UX', color: '#ec4899' }       // Pink
];

export const themeStats = {
  activeUsersOnDark: 85,
  mostPopularAccent: 'Indigo',
  accessibilityModeUsers: 12
};
