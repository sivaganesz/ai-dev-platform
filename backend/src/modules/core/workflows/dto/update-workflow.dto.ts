import { PartialType } from '@nestjs/swagger';
import { CreateWorkflowDto } from './create-workflow.dto';
import { IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateWorkflowDto extends PartialType(CreateWorkflowDto) {
  @ApiPropertyOptional()
  @IsOptional() @IsNumber()
  completedTasks?: number;
}
