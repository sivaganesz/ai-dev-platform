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
