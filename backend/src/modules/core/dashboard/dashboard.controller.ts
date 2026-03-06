import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { DashboardService } from './dashboard.service';

@ApiTags('Core - Dashboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('core/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get()
  @ApiOperation({ summary: 'Get full dashboard summary' })
  getDashboard() {
    return this.dashboardService.getDashboard();
  }
}
