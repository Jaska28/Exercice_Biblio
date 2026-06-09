/*
  Warnings:

  - You are about to drop the column `displonible` on the `Livre` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Livre" DROP COLUMN "displonible",
ADD COLUMN     "disponible" BOOLEAN NOT NULL DEFAULT true;
