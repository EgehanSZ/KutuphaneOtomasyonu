/*
  Warnings:

  - A unique constraint covering the columns `[ad]` on the table `YayinEvi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ad,soyad]` on the table `Yazar` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "YayinEvi_ad_key" ON "YayinEvi"("ad");

-- CreateIndex
CREATE UNIQUE INDEX "Yazar_ad_soyad_key" ON "Yazar"("ad", "soyad");
