/*
  Warnings:

  - A unique constraint covering the columns `[ad]` on the table `Kategori` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Kategori_ad_key" ON "Kategori"("ad");
