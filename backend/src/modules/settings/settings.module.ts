import { Module } from '@nestjs/common';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { ThemeController } from './theme/theme.controller';
import { ThemeService } from './theme/theme.service';
import { ApiKeysController } from './api-keys/api-keys.controller';
import { ApiKeysService } from './api-keys/api-keys.service';
import { SecurityController } from './security/security.controller';
import { SecurityService } from './security/security.service';

@Module({
  controllers: [
    ProfileController,
    CompanyController,
    ThemeController,
    ApiKeysController,
    SecurityController,
  ],
  providers: [
    ProfileService,
    CompanyService,
    ThemeService,
    ApiKeysService,
    SecurityService,
  ],
})
export class SettingsModule {}
