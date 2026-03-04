import {
  Controller, Get, Patch, Body, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ProfileService } from './profile.service';
import {
  UpdateProfileDto,
  UpdateAgentPrefsDto,
  UpdateNotificationPrefsDto,
} from './dto/update-profile.dto';

@ApiTags('Settings - Profile')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user profile + preferences' })
  getProfile(@CurrentUser() user: any) {
    return this.profileService.getProfile(user.id);
  }

  @Patch()
  @ApiOperation({ summary: 'Update personal info' })
  updateProfile(@CurrentUser() user: any, @Body() dto: UpdateProfileDto) {
    return this.profileService.updateProfile(user.id, dto);
  }

  @Patch('agent-preferences')
  @ApiOperation({ summary: 'Update agent interaction preferences' })
  updateAgentPrefs(@CurrentUser() user: any, @Body() dto: UpdateAgentPrefsDto) {
    return this.profileService.updateAgentPreferences(user.id, dto);
  }

  @Patch('notifications')
  @ApiOperation({ summary: 'Update notification preferences' })
  updateNotifications(@CurrentUser() user: any, @Body() dto: UpdateNotificationPrefsDto) {
    return this.profileService.updateNotificationPreferences(user.id, dto);
  }
}
