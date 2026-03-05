import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ThemeService } from './theme.service';
import { UpdateThemeDto } from './dto/update-theme.dto';

@ApiTags('Settings - Theme')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Get()
  @ApiOperation({ summary: 'Get theme preferences' })
  getTheme(@CurrentUser() user: any) {
    return this.themeService.getTheme(user.id);
  }

  @Patch()
  @ApiOperation({ summary: 'Save theme preferences' })
  updateTheme(@CurrentUser() user: any, @Body() dto: UpdateThemeDto) {
    return this.themeService.updateTheme(user.id, dto);
  }
}
