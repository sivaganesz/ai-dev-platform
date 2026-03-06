import {
  IsString, IsOptional, IsArray,
  IsDateString, IsIn, IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWorkflowDto {
  @ApiProperty()
  @IsString()
  projectId!: string;

  @ApiProperty({ example: 'Intent Recognition Setup' })
  @IsString()
  name!: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ['RUNNING', 'COMPLETED', 'FAILED'] })
  @IsOptional() @IsIn(['RUNNING', 'COMPLETED', 'FAILED'])
  status?: string;

  @ApiPropertyOptional({ example: ['ML', 'Backend'] })
  @IsOptional() @IsArray()
  assignedTo?: string[];

  @ApiPropertyOptional()
  @IsOptional() @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  tasksCount?: number;
}
