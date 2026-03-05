import { IsString, IsOptional, IsObject } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCompanyDto {
  @ApiPropertyOptional() @IsOptional() @IsString()
  name?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  industry?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  website?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  supportEmail?: string;

  @ApiPropertyOptional() @IsOptional() @IsObject()
  branding?: {
    brandColor?: string;
    platformDisplayName?: string;
    emailBranding?: boolean;
  };

  @ApiPropertyOptional() @IsOptional() @IsObject()
  compliance?: {
    requireArchApproval?: boolean;
    requireSecurityReview?: boolean;
    mandatoryQAValidation?: boolean;
    promptAuditLogging?: boolean;
    dataRetentionDays?: number;
    standards?: { name: string; enabled: boolean }[];
  };
}
