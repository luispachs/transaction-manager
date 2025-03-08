/*
  Warnings:

  - You are about to drop the column `roleId` on the `permmissions` table. All the data in the column will be lost.
  - You are about to drop the column `permmissionsId` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "permmissions" DROP CONSTRAINT "permmissions_roleId_fkey";

-- AlterTable
ALTER TABLE "permmissions" DROP COLUMN "roleId";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "permmissionsId";

-- AddForeignKey
ALTER TABLE "permmissions" ADD CONSTRAINT "permmissions_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
