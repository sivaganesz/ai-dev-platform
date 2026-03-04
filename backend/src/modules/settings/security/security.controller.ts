import {
  Controller, Get, Delete, Param, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { SecurityService } from './security.service';

@ApiTags('Settings - Security')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/security')
export class SecurityController {
  constructor(private securityService: SecurityService) {}

  @Get()
  @ApiOperation({ summary: 'Get security dashboard data' })
  getSecurityData(@CurrentUser() user: any) {
    return this.securityService.getSecurityData(user.id);
  }

  @Delete('sessions/:id')
  @ApiOperation({ summary: 'Terminate an active session' })
  terminateSession(@Param('id') id: string) {
    return this.securityService.terminateSession(id);
  }
}
