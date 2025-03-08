/*
  Warnings:

  - You are about to drop the `permmissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "permmissions" DROP CONSTRAINT "permmissions_rolesId_fkey";

-- DropTable
DROP TABLE "permmissions";

-- CreateTable
CREATE TABLE "permissions" (
    "id" BIGSERIAL NOT NULL,
    "rolesId" BIGINT NOT NULL,
    "canAccessReports" BOOLEAN NOT NULL DEFAULT false,
    "canModifyUsers" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "permissions_rolesId_key" ON "permissions"("rolesId");

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "permissions_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
