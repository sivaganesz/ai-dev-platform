You are setting up the backend for an Enterprise AI Dev Platform.
This is Phase 0 — Project Initialization only.
Do NOT build any feature modules yet.

════════════════════════════════════════════════════════════
PROJECT CONTEXT
════════════════════════════════════════════════════════════

This backend serves a React 19 + Vite frontend that has:
- 8 modules: CORE, AI AGENTS, DEVELOPMENT GOVERNANCE,
  SANDBOX & DEMO, INTEGRATIONS, OPERATIONS, ADMINISTRATION, SETTINGS
- Axios client reading JWT from localStorage['token']
- baseURL: http://localhost:3001/api/v1
- TanStack Query v5 for data fetching

════════════════════════════════════════════════════════════
TECH STACK (ALL FREE & OPEN SOURCE)
════════════════════════════════════════════════════════════

- Runtime       → Node.js 20 LTS
- Framework     → NestJS 10
- Language      → TypeScript 5 (strict mode)
- HTTP Server   → Fastify (@nestjs/platform-fastify)
- ORM           → Prisma 5
- Database      → PostgreSQL 16
- Cache / Queue → Redis 7
- Job Queues    → BullMQ
- Auth          → Passport.js + passport-jwt
- Validation    → class-validator + class-transformer
- API Docs      → Swagger (@nestjs/swagger)
- Logging       → Winston
- Testing       → Jest + Supertest
- Container     → Docker + Docker Compose

════════════════════════════════════════════════════════════
STEP 1 — SCAFFOLD THE PROJECT
════════════════════════════════════════════════════════════

npm install -g @nestjs/cli
nest new ai-dev-platform-backend --package-manager npm
cd ai-dev-platform-backend

════════════════════════════════════════════════════════════
STEP 2 — INSTALL ALL DEPENDENCIES
════════════════════════════════════════════════════════════

# Switch to Fastify
npm install @nestjs/platform-fastify
npm uninstall @nestjs/platform-express @types/express

# Config
npm install @nestjs/config

# Auth
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install bcrypt
npm install -D @types/passport-jwt @types/bcrypt

# Database
npm install prisma @prisma/client

# Validation
npm install class-validator class-transformer

# API Docs
npm install @nestjs/swagger

# Queues
npm install @nestjs/bull bullmq ioredis
npm install -D @types/ioredis

# WebSocket
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io

# Logging
npm install winston nest-winston

# Utilities
npm install rxjs uuid
npm install -D @types/uuid

════════════════════════════════════════════════════════════
STEP 3 — FOLDER STRUCTURE
════════════════════════════════════════════════════════════

Create this exact folder structure inside src/:

src/
├── main.ts
├── app.module.ts
│
├── common/
│   ├── guards/
│   │   ├── jwt-auth.guard.ts
│   │   └── roles.guard.ts
│   ├── decorators/
│   │   ├── current-user.decorator.ts
│   │   └── roles.decorator.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   │   ├── logging.interceptor.ts
│   │   └── transform.interceptor.ts
│   └── pipes/
│       └── validation.pipe.ts
│
├── config/
│   └── configuration.ts
│
├── database/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── redis/
│   └── redis.module.ts
│
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   └── dto/
│       ├── login.dto.ts
│       └── register.dto.ts
│
└── modules/
    ├── core/
    │   ├── dashboard/
    │   ├── projects/
    │   └── workflows/
    ├── agents/
    ├── governance/
    │   ├── approvals/
    │   ├── code-reviews/
    │   ├── architecture-decisions/
    │   └── senior-developers/
    ├── sandbox/
    │   ├── environments/
    │   ├── demo-builds/
    │   ├── live-previews/
    │   └── api-simulations/
    ├── integrations/
    │   ├── platforms/
    │   ├── cicd/
    │   ├── cloud/
    │   └── notifications/
    ├── operations/
    │   ├── deployments/
    │   ├── logs/
    │   ├── monitoring/
    │   └── performance/
    ├── administration/
    │   ├── users/
    │   ├── roles/
    │   ├── ai-config/
    │   ├── prompt-templates/
    │   └── billing/
    └── settings/
        ├── profile/
        ├── company/
        ├── theme/
        ├── api-keys/
        └── security/

════════════════════════════════════════════════════════════
STEP 4 — ENVIRONMENT FILE
════════════════════════════════════════════════════════════

Create .env in project root:

# Server
PORT=3001
NODE_ENV=development
API_PREFIX=api/v1

# Database
DATABASE_URL=postgresql://admin:secret@localhost:5432/ai_dev_platform

# Redis
REDIS_URL=redis://localhost:6379

# Kafka (for later phases)
KAFKA_BROKERS=localhost:9092
KAFKA_CLIENT_ID=ai-dev-platform
KAFKA_GROUP_ID=ai-dev-group

# JWT
JWT_ACCESS_SECRET=ai-dev-platform-access-secret-min-32-chars
JWT_REFRESH_SECRET=ai-dev-platform-refresh-secret-min-32-chars
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# MinIO (for later phases)
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
MINIO_BUCKET=ai-dev-artifacts

# CORS
CORS_ORIGIN=http://localhost:5174

Create .env.example with same keys but empty values.

════════════════════════════════════════════════════════════
STEP 5 — DOCKER COMPOSE
════════════════════════════════════════════════════════════

Create docker-compose.yml in project root:

version: '3.9'
services:

  postgres:
    image: postgres:16-alpine
    container_name: ai_dev_postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_DB: ai_dev_platform
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U admin']
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: ai_dev_redis
    ports:
      - '6379:6379'
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

  minio:
    image: minio/minio:latest
    container_name: ai_dev_minio
    ports:
      - '9000:9000'
      - '9001:9001'
    command: server /data --console-address ':9001'
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    volumes:
      - minio_data:/data

volumes:
  postgres_data:
  redis_data:
  minio_data:

Note: Kafka is excluded for Phase 0.
It will be added in a later phase.

════════════════════════════════════════════════════════════
STEP 6 — PRISMA SETUP
════════════════════════════════════════════════════════════

Run: npx prisma init

Update prisma/schema.prisma:

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ── AUTH / USERS ─────────────────────────────
model User {
  id           String   @id @default(uuid())
  email        String   @unique
  name         String
  passwordHash String   @map("password_hash")
  roleId       String?  @map("role_id")
  teamId       String?  @map("team_id")
  status       UserStatus @default(ACTIVE)
  joinedAt     DateTime @default(now()) @map("joined_at")
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")

  role         Role?    @relation(fields: [roleId], references: [id])
  team         Team?    @relation(fields: [teamId], references: [id])
  apiKeys      ApiKey[]
  sessions     ActiveSession[]
  profileExt   UserProfileExt?
  themePrefs   ThemePreference?

  @@map("users")
}

model Role {
  id            String   @id @default(uuid())
  name          String   @unique
  description   String?
  permissions   Json     @default("[]")
  modulesAccess Json     @default("[]") @map("modules_access")
  createdAt     DateTime @default(now()) @map("created_at")

  users         User[]

  @@map("roles")
}

model Team {
  id           String   @id @default(uuid())
  name         String
  description  String?
  memberCount  Int      @default(0) @map("member_count")
  leadId       String?  @map("lead_id")
  parentTeamId String?  @map("parent_team_id")
  createdAt    DateTime @default(now()) @map("created_at")

  users        User[]

  @@map("teams")
}

model ActiveSession {
  id        String   @id @default(uuid())
  userId    String   @map("user_id")
  device    String?
  location  String?
  ip        String?
  tokenHash String   @map("token_hash")
  status    SessionStatus @default(ACTIVE)
  loginTime DateTime @default(now()) @map("login_time")
  expiresAt DateTime @map("expires_at")

  user      User     @relation(fields: [userId], references: [id])

  @@map("active_sessions")
}

model ApiKey {
  id           String   @id @default(uuid())
  name         String
  keyHash      String   @unique @map("key_hash")
  keyIdDisplay String   @map("key_id_display")
  scope        String?
  ownerId      String   @map("owner_id")
  environment  String   @default("Development")
  permissions  Json     @default("[]")
  status       ApiKeyStatus @default(ACTIVE)
  createdDate  DateTime @default(now()) @map("created_date")
  expiryDate   DateTime? @map("expiry_date")
  lastUsed     DateTime? @map("last_used")

  owner        User     @relation(fields: [ownerId], references: [id])
  activityLogs KeyActivityLog[]

  @@map("api_keys")
}

model KeyActivityLog {
  id        String   @id @default(uuid())
  keyId     String   @map("key_id")
  module    String
  action    String
  status    String
  ipAddress String?  @map("ip_address")
  timestamp DateTime @default(now())

  key       ApiKey   @relation(fields: [keyId], references: [id])

  @@map("key_activity_logs")
}

model UserProfileExt {
  id                    String   @id @default(uuid())
  userId                String   @unique @map("user_id")
  phone                 String?
  jobTitle              String?  @map("job_title")
  department            String?
  manager               String?
  timezone              String?
  roleTier              String?  @map("role_tier")
  agentPreferences      Json     @default("[]") @map("agent_preferences")
  notificationPrefs     Json     @default("[]") @map("notification_preferences")
  accessScopes          Json     @default("[]") @map("access_scopes")
  updatedAt             DateTime @updatedAt @map("updated_at")

  user                  User     @relation(fields: [userId], references: [id])

  @@map("user_profile_ext")
}

model ThemePreference {
  id                 String   @id @default(uuid())
  userId             String   @unique @map("user_id")
  mode               String   @default("dark")
  accentColor        String?  @map("accent_color")
  uiDensity          String?  @map("ui_density")
  codeTheme          String?  @map("code_theme")
  visualizationStyle String?  @map("visualization_style")
  updatedAt          DateTime @updatedAt @map("updated_at")

  user               User     @relation(fields: [userId], references: [id])

  @@map("theme_preferences")
}

model SecurityIncident {
  id        String   @id @default(uuid())
  type      String
  severity  String
  module    String?
  status    String   @default("OPEN")
  timestamp DateTime @default(now())

  @@map("security_incidents")
}

model SecurityAuditLog {
  id        String   @id @default(uuid())
  userId    String?  @map("user_id")
  action    String
  module    String?
  ipAddress String?  @map("ip_address")
  result    String?
  timestamp DateTime @default(now())

  @@map("security_audit_logs")
}

model CompanyProfile {
  id                 String   @id @default(uuid())
  name               String
  legalName          String?  @map("legal_name")
  industry           String?
  size               String?
  hq                 String?
  founded            Int?
  website            String?
  supportEmail       String?  @map("support_email")
  branding           Json?
  compliance         Json?
  deploymentPolicies Json?    @map("deployment_policies")
  aiGovernance       Json?    @map("ai_governance")
  updatedAt          DateTime @updatedAt @map("updated_at")

  @@map("company_profile")
}

// ── ENUMS ────────────────────────────────────
enum UserStatus {
  ACTIVE
  INACTIVE
  PENDING
}

enum SessionStatus {
  ACTIVE
  IDLE
  EXPIRED
}

enum ApiKeyStatus {
  ACTIVE
  EXPIRED
  REVOKED
}

════════════════════════════════════════════════════════════
STEP 7 — CORE FILES
════════════════════════════════════════════════════════════

--- src/config/configuration.ts ---

export default () => ({
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: process.env.API_PREFIX || 'api/v1',
  database: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiry: process.env.JWT_ACCESS_EXPIRY || '15m',
    refreshExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5174',
  },
});

--- src/database/prisma.service.ts ---

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

--- src/database/prisma.module.ts ---

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

--- src/redis/redis.module.ts ---

import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

export const REDIS_CLIENT = 'REDIS_CLIENT';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (configService: ConfigService) => {
        return new Redis(configService.get<string>('redis.url'));
      },
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}

--- src/common/interceptors/transform.interceptor.ts ---

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  timestamp: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>> {

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        success: true,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}

--- src/common/filters/http-exception.filter.ts ---

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const reply = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    reply.status(status).send({
      success: false,
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

--- src/common/guards/jwt-auth.guard.ts ---

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

--- src/common/guards/roles.guard.ts ---

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user?.roleName);
  }
}

--- src/common/decorators/current-user.decorator.ts ---

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

--- src/common/decorators/roles.decorator.ts ---

import { SetMetadata } from '@nestjs/common';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

════════════════════════════════════════════════════════════
STEP 8 — AUTH MODULE
════════════════════════════════════════════════════════════

--- src/auth/dto/register.dto.ts ---

import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  roleId?: string;
}

--- src/auth/dto/login.dto.ts ---

import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@platform.ai' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;
}

--- src/auth/strategies/jwt.strategy.ts ---

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.accessSecret'),
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: { role: true },
    });
    if (!user) throw new UnauthorizedException();
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      roleId: user.roleId,
      roleName: user.role?.name,
    };
  }
}

--- src/auth/auth.service.ts ---

import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new ConflictException('Email already registered');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        passwordHash,
        roleId: dto.roleId || null,
      },
      include: { role: true },
    });

    return this.generateTokens(user);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { role: true },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.generateTokens(user);
  }

  async getMe(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { role: true, team: true },
    });
  }

  private generateTokens(user: any) {
    const payload = { sub: user.id, email: user.email };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('jwt.accessSecret'),
      expiresIn: this.configService.get<string>('jwt.accessExpiry'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('jwt.refreshSecret'),
      expiresIn: this.configService.get<string>('jwt.refreshExpiry'),
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roleName: user.role?.name || null,
      },
    };
  }
}

--- src/auth/auth.controller.ts ---

import {
  Controller, Post, Get, Body, UseGuards, HttpCode, HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register new user' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login and receive JWT tokens' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current logged-in user' })
  getMe(@CurrentUser() user: any) {
    return this.authService.getMe(user.id);
  }
}

--- src/auth/auth.module.ts ---

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

════════════════════════════════════════════════════════════
STEP 9 — MAIN.TS (Bootstrap)
════════════════════════════════════════════════════════════

--- src/main.ts ---

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port') || 3001;
  const apiPrefix = configService.get<string>('apiPrefix') || 'api/v1';
  const corsOrigin = configService.get<string>('cors.origin');

  // Global prefix
  app.setGlobalPrefix(apiPrefix);

  // CORS — allow frontend
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Global response transform
  app.useGlobalInterceptors(new TransformInterceptor());

  // Swagger docs
  const swaggerConfig = new DocumentBuilder()
    .setTitle('AI Dev Platform API')
    .setDescription('Backend API for Enterprise AI Development Platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${apiPrefix}/docs`, app, document);

  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📚 Swagger docs: http://localhost:${port}/${apiPrefix}/docs`);
}

bootstrap();

════════════════════════════════════════════════════════════
STEP 10 — APP MODULE
════════════════════════════════════════════════════════════

--- src/app.module.ts ---

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaModule } from './database/prisma.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    RedisModule,
    AuthModule,
  ],
})
export class AppModule {}

════════════════════════════════════════════════════════════
STEP 11 — RUN MIGRATION AND START
════════════════════════════════════════════════════════════

# 1. Start Docker services
docker compose up -d

# 2. Wait for postgres to be healthy (about 10 seconds)
docker compose ps

# 3. Run Prisma migration
npx prisma migrate dev --name init

# 4. Generate Prisma client
npx prisma generate

# 5. Start the backend
npm run start:dev

════════════════════════════════════════════════════════════
STEP 12 — VERIFY EVERYTHING IS WORKING
════════════════════════════════════════════════════════════

After server starts, verify these:

✅ Server running:
   http://localhost:3001

✅ Swagger UI accessible:
   http://localhost:3001/api/v1/docs

✅ Health check — test register endpoint via Swagger:
   POST /api/v1/auth/register
   Body: {
     "email": "admin@platform.ai",
     "password": "Admin@123456",
     "name": "Sivaganesh"
   }
   Expected: 201 with { data: { accessToken, refreshToken, user } }

✅ Test login endpoint:
   POST /api/v1/auth/login
   Body: {
     "email": "admin@platform.ai",
     "password": "Admin@123456"
   }
   Expected: 200 with { data: { accessToken, refreshToken, user } }

✅ Test protected route:
   GET /api/v1/auth/me
   Header: Authorization: Bearer <accessToken from login>
   Expected: 200 with user object

════════════════════════════════════════════════════════════
PHASE 0 COMPLETION CHECKLIST
════════════════════════════════════════════════════════════

Before marking Phase 0 complete, confirm ALL of these:

[ ] docker compose up -d → all 3 services running (postgres, redis, minio)
[ ] npx prisma migrate dev → migration applied with no errors
[ ] npm run start:dev → server starts on port 3001 with no errors
[ ] Swagger UI loads at http://localhost:3001/api/v1/docs
[ ] POST /auth/register → returns accessToken
[ ] POST /auth/login → returns accessToken
[ ] GET /auth/me with Bearer token → returns user object
[ ] GET /auth/me without token → returns 401

Once all 8 items are checked, Phase 0 is complete.
Reply with "Phase 0 complete" and we move to Phase 1 — SETTINGS module.

════════════════════════════════════════════════════════════
IMPORTANT NOTES
════════════════════════════════════════════════════════════

1. Do NOT create any feature module controllers or services yet.
   Only the infrastructure listed above is needed for Phase 0.

2. The modules/ folder should be created with empty directories only.
   No files inside them yet.

3. tsconfig.json must have strict: true and these paths:
   "paths": { "@/*": ["src/*"] }

4. Do NOT add any mock data or seed scripts in Phase 0.
   Data seeding happens per module starting Phase 1.

5. If any package install fails, check Node.js version is 20 LTS.