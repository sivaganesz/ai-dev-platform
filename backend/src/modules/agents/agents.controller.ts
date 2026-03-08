import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AgentsService } from './agents.service';
import { UpdateAgentDto } from './dto/update-agent.dto';

@ApiTags('AI Agents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('agents')
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Get('overview')
  @ApiOperation({ summary: 'Get agents overview — execution graph, trends, activities' })
  getOverview() {
    return this.agentsService.getOverview();
  }

  @Get()
  @ApiOperation({ summary: 'Get all agents (list)' })
  findAll() {
    return this.agentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get full agent detail by ID (e.g. AG-001)' })
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update agent status/metrics (admin)' })
  update(@Param('id') id: string, @Body() dto: UpdateAgentDto) {
    return this.agentsService.update(id, dto);
  }
}
