import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { WorkflowsController } from './workflows/workflows.controller';
import { WorkflowsService } from './workflows/workflows.service';

@Module({
  controllers: [
    DashboardController,
    ProjectsController,
    WorkflowsController,
  ],
  providers: [
    DashboardService,
    ProjectsService,
    WorkflowsService,
  ],
  exports: [ProjectsService, WorkflowsService],
})
export class CoreModule {}
