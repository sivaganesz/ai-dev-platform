import {
  IsString, IsOptional, IsArray,
  IsDateString, IsIn, IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ example: 'AI Chatbot' })
  @IsString()
  name!: string;

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
