-- CreateEnum
CREATE TYPE "status" AS ENUM ('ACTIVED', 'DISACTIVED', 'DELETED');

-- CreateEnum
CREATE TYPE "transactionType" AS ENUM ('EGRESS', 'INCOME');

-- CreateTable
CREATE TABLE "roles" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "permmissionsId" BIGINT NOT NULL,
    "status" "status" NOT NULL DEFAULT 'ACTIVED',

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permmissions" (
    "id" BIGSERIAL NOT NULL,
    "roleId" BIGINT NOT NULL,
    "rolesId" BIGINT NOT NULL,
    "canAccessReports" BOOLEAN NOT NULL DEFAULT false,
    "canModifyUsers" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "permmissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "lastname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "roleId" BIGINT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" BIGSERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(11,2) NOT NULL DEFAULT 0.0,
    "concept" VARCHAR(300) NOT NULL,
    "type" "transactionType" NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "permmissions_rolesId_key" ON "permmissions"("rolesId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "permmissions" ADD CONSTRAINT "permmissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
