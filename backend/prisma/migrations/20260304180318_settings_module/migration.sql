-- CreateTable
CREATE TABLE "registered_devices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "trustLevel" TEXT NOT NULL DEFAULT 'UNVERIFIED',
    "lastAccess" TEXT NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registered_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mfa_configs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DISABLED',
    "method" TEXT,
    "last_verified" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mfa_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_traces" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "module" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_traces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mfa_configs_user_id_key" ON "mfa_configs"("user_id");

-- AddForeignKey
ALTER TABLE "mfa_configs" ADD CONSTRAINT "mfa_configs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_traces" ADD CONSTRAINT "activity_traces_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
