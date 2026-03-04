import {
  Controller, Get, Post, Delete, Body, Param, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDto } from './dto/create-api-key.dto';

@ApiTags('Settings - API Keys')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/api-keys')
export class ApiKeysController {
  constructor(private apiKeysService: ApiKeysService) {}

  @Get()
  @ApiOperation({ summary: 'Get all API keys for current user' })
  getApiKeys(@CurrentUser() user: any) {
    return this.apiKeysService.getApiKeys(user.id);
  }

  @Post()
  @ApiOperation({ summary: 'Generate new API key — raw key shown ONCE' })
  createApiKey(@CurrentUser() user: any, @Body() dto: CreateApiKeyDto) {
    return this.apiKeysService.createApiKey(user.id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Revoke API key' })
  revokeApiKey(@Param('id') id: string, @CurrentUser() user: any) {
    return this.apiKeysService.revokeApiKey(id, user.id);
  }
}
