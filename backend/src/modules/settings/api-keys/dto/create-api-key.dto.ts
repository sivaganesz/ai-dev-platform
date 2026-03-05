import {
  IsString, IsArray, IsOptional, IsDateString, IsIn,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateApiKeyDto {
  @ApiProperty({ example: 'My API Key' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 'AI Agents' })
  @IsOptional() @IsString()
  scope?: string;

  @ApiProperty({ enum: ['Development', 'Sandbox', 'Staging', 'Production'] })
  @IsIn(['Development', 'Sandbox', 'Staging', 'Production'])
  environment!: string;

  @ApiProperty({
    example: ['READ', 'WRITE'],
    enum: ['READ', 'WRITE', 'EXECUTE', 'ADMIN'],
    isArray: true,
  })
  @IsArray()
  permissions!: string[];

  @ApiPropertyOptional({ example: '2026-12-31' })
  @IsOptional() @IsDateString()
  expiryDate?: string;
}
