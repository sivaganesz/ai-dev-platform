import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { WorkflowsService } from './workflows.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@ApiTags('Core - Workflows')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('core/workflows')
export class WorkflowsController {
  constructor(private workflowsService: WorkflowsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all workflows with optional filters' })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'projectId', required: false })
  @ApiQuery({ name: 'search', required: false })
  findAll(
    @Query('status') status?: string,
    @Query('projectId') projectId?: string,
    @Query('search') search?: string,
  ) {
    return this.workflowsService.findAll(status, projectId, search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get workflow by ID' })
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new workflow' })
  create(@Body() dto: CreateWorkflowDto) {
    return this.workflowsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update workflow' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateWorkflowDto,
  ) {
    return this.workflowsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete workflow' })
  remove(@Param('id') id: string) {
    return this.workflowsService.remove(id);
  }
}
