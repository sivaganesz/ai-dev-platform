import 'dotenv/config';
import { seedSettings } from './seeds/settings.seed';
import { seedCore } from './seeds/core.seed';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  await seedSettings();
  await seedCore();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
