import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllKitaplar(req, res) {
    try {
        const kitaplar = await prisma.kitap.findMany({
            include: {
                kategori: true,
                yayin_evi: true,
                yazarlar: {
                    include: {
                        yazar: true
                    }
                }
            }
        });
        if (!kitaplar || kitaplar.length === 0) {
            return res.status(404).json({ message: "Kitap bulunamadı" });
        }
        res.status(200).json(kitaplar);
    } catch (error) {
        res.status(500).json({ message: "Kitaplar alınamadı", error });
    }
};
export async function getKitapByISBN(req, res) {
    const { isbn } = req.params;
    try {
        const kitap = await prisma.kitap.findUnique({
            where: { isbn },
            include: {
                kategori: true,
                yayin_evi: true,
                yazarlar: {
                    include: {
                        yazar: true
                    }
                }
            }
        });

        if (!kitap) {
            return res.status(404).json({ message: "Kitap bulunamadı" });
        }

        res.status(200).json(kitap);
    } catch (error) {
        res.status(500).json({ message: "Kitap getirilemedi", error });
    }
};

export async function createKitap(req, res) {
    const {
        isbn,
        baslik,
        sayfa_sayisi,
        stok_adet,
        kategori_ad,
        yayin_evi_ad,
        yazar_list
    } = req.body;

    try {
        const yeniKitap = await prisma.kitap.create({
            data: {
                isbn,
                baslik,
                sayfa_sayisi: parseInt(sayfa_sayisi),
                yayin_tarihi: new Date(),
                stok_adet: parseInt(stok_adet),
                kategori: {
                    connectOrCreate: {
                        where: { ad: kategori_ad },
                        create: { ad: kategori_ad }
                    }
                },
                yayin_evi: {
                    connectOrCreate: {
                        where: { ad: yayin_evi_ad },
                        create: { ad: yayin_evi_ad }
                    }
                },
                yazarlar: {
                    create: yazar_list.map(({ ad, soyad }) => ({
                        yazar: {
                            connectOrCreate: {
                                where: {
                                    ad_soyad: { ad, soyad }
                                },
                                create: { ad, soyad }
                            }
                        }
                    }))
                }
            },
            include: {
                kategori: true,
                yayin_evi: true,
                yazarlar: {
                    include: {
                        yazar: true
                    }
                }
            }
        });

        res.status(201).json(yeniKitap);
    } catch (error) {
        res.status(500).json({ message: "Kitap eklenemedi", error: error.message });
    }
}




export async function updateKitap(req, res) {
    const { isbn } = req.params;
    const {
        baslik,
        sayfa_sayisi,
        yayin_tarihi,
        stok_adet,
        kategori_id,
        yayin_evi_id
    } = req.body;

    try {
        const guncellenen = await prisma.kitap.update({
            where: { isbn },
            data: {
                baslik,
                sayfa_sayisi,
                yayin_tarihi: yayin_tarihi ? new Date(yayin_tarihi) : null,
                stok_adet,
                kategori_id,
                yayin_evi_id
            }
        });

        res.status(200).json(guncellenen);
    } catch (error) {
        res.status(500).json({ message: "Kitap güncellenemedi", error });
    }
};


export async function deleteKitap(req, res) {
    const { isbn } = req.params;
    try {
        await prisma.kitap.delete({
            where: { isbn }
        });
        res.status(200).json({ message: "Kitap silindi" });
    } catch (error) {
        res.status(500).json({ message: "Kitap silinemedi", error });
    }
};
