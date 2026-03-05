import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Settings - Company')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('settings/company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Get company profile and settings' })
  getCompany() {
    return this.companyService.getCompany();
  }

  @Patch()
  @ApiOperation({ summary: 'Update company profile' })
  updateCompany(@Body() dto: UpdateCompanyDto) {
    return this.companyService.updateCompany(dto);
  }
}
