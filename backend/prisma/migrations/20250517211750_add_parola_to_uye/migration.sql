/*
  Warnings:

  - Added the required column `parola` to the `Uye` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Uye" ADD COLUMN     "parola" TEXT NOT NULL;
