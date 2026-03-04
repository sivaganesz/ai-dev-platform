import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional() @IsOptional() @IsString()
  firstName?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  lastName?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  phone?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  jobTitle?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  department?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  manager?: string;

  @ApiPropertyOptional() @IsOptional() @IsString()
  timezone?: string;
}

export class UpdateAgentPrefsDto {
  @ApiPropertyOptional() @IsOptional() @IsArray()
  agentPreferences?: any[];
}

export class UpdateNotificationPrefsDto {
  @ApiPropertyOptional() @IsOptional() @IsArray()
  notificationPreferences?: any[];
}
