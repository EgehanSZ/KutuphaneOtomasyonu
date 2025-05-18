-- CreateTable
CREATE TABLE "Kategori" (
    "kategori_id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("kategori_id")
);

-- CreateTable
CREATE TABLE "YayinEvi" (
    "yayin_evi_id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,

    CONSTRAINT "YayinEvi_pkey" PRIMARY KEY ("yayin_evi_id")
);

-- CreateTable
CREATE TABLE "Yazar" (
    "yazar_id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,

    CONSTRAINT "Yazar_pkey" PRIMARY KEY ("yazar_id")
);

-- CreateTable
CREATE TABLE "Kitap" (
    "isbn" TEXT NOT NULL,
    "baslik" TEXT NOT NULL,
    "sayfa_sayisi" INTEGER NOT NULL,
    "yayin_tarihi" TIMESTAMP(3),
    "stok_adet" INTEGER NOT NULL DEFAULT 0,
    "kategori_id" INTEGER NOT NULL,
    "yayin_evi_id" INTEGER NOT NULL,

    CONSTRAINT "Kitap_pkey" PRIMARY KEY ("isbn")
);

-- CreateTable
CREATE TABLE "Uye" (
    "uye_id" SERIAL NOT NULL,
    "isim" TEXT NOT NULL,
    "soyisim" TEXT NOT NULL,
    "eposta" TEXT NOT NULL,
    "telefon" TEXT,
    "uyelik_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Uye_pkey" PRIMARY KEY ("uye_id")
);

-- CreateTable
CREATE TABLE "Odunc" (
    "odunc_id" SERIAL NOT NULL,
    "uye_id" INTEGER NOT NULL,
    "isbn" TEXT NOT NULL,
    "odunc_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iade_tarihi" TIMESTAMP(3),

    CONSTRAINT "Odunc_pkey" PRIMARY KEY ("odunc_id")
);

-- CreateTable
CREATE TABLE "Kitap_Yazar" (
    "isbn" TEXT NOT NULL,
    "yazar_id" INTEGER NOT NULL,

    CONSTRAINT "Kitap_Yazar_pkey" PRIMARY KEY ("isbn","yazar_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Uye_eposta_key" ON "Uye"("eposta");

-- AddForeignKey
ALTER TABLE "Kitap" ADD CONSTRAINT "Kitap_kategori_id_fkey" FOREIGN KEY ("kategori_id") REFERENCES "Kategori"("kategori_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kitap" ADD CONSTRAINT "Kitap_yayin_evi_id_fkey" FOREIGN KEY ("yayin_evi_id") REFERENCES "YayinEvi"("yayin_evi_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Odunc" ADD CONSTRAINT "Odunc_uye_id_fkey" FOREIGN KEY ("uye_id") REFERENCES "Uye"("uye_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Odunc" ADD CONSTRAINT "Odunc_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Kitap"("isbn") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kitap_Yazar" ADD CONSTRAINT "Kitap_Yazar_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Kitap"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kitap_Yazar" ADD CONSTRAINT "Kitap_Yazar_yazar_id_fkey" FOREIGN KEY ("yazar_id") REFERENCES "Yazar"("yazar_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Trigger fonksiyonu
CREATE OR REPLACE FUNCTION decrease_book_stock()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE "Kitap"
  SET stok_adet = stok_adet - 1
  WHERE isbn = NEW.isbn;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger oluşturma
CREATE TRIGGER trg_decrease_stock
AFTER INSERT ON "Odunc"
FOR EACH ROW
EXECUTE FUNCTION decrease_book_stock();

