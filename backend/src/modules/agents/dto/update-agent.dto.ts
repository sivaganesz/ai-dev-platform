import { IsString, IsOptional, IsNumber, IsBoolean, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAgentDto {
  @ApiPropertyOptional({ enum: ['Active', 'Idle', 'Failed'] })
  @IsOptional()
  @IsIn(['Active', 'Idle', 'Failed'])
  status?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  executionCount?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  successRate?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  avgCompletionTime?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  deploymentLinked?: boolean;
}
