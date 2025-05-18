import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllYazarlar(req, res) {
    try {
        const yazarlar = await prisma.yazar.findMany({
            include: {
                kitaplar: {
                    include: {
                        kitap: true
                    }
                }
            }
        });
        res.status(200).json(yazarlar);
    } catch (error) {
        res.status(500).json({ message: "Yazarlar getirilemedi", error });
    }
};


export async function getYazarById(req, res) {
    const { id } = req.params;
    try {
        const yazar = await prisma.yazar.findUnique({
            where: { yazar_id: parseInt(id) },
            include: {
                kitaplar: {
                    include: {
                        kitap: true
                    }
                }
            }
        });

        if (!yazar) {
            return res.status(404).json({ message: "Yazar bulunamadı" });
        }

        res.status(200).json(yazar);
    } catch (error) {
        res.status(500).json({ message: "Yazar getirilemedi", error });
    }
};


export async function createYazar(req, res) {
    const { ad, soyad } = req.body;

    try {
        const yeniYazar = await prisma.yazar.create({
            data: {
                ad,
                soyad
            }
        });

        res.status(201).json(yeniYazar);
    } catch (error) {
        res.status(500).json({ message: "Yazar oluşturulamadı", error });
    }
};

export async function updateYazar(req, res) {
    const { id } = req.params;
    const { ad, soyad } = req.body;

    try {
        const guncellenen = await prisma.yazar.update({
            where: { yazar_id: parseInt(id) },
            data: {
                ad,
                soyad
            }
        });

        res.status(200).json(guncellenen);
    } catch (error) {
        res.status(500).json({ message: "Yazar güncellenemedi", error });
    }
};


export async function deleteYazar(req, res) {
    const { id } = req.params;

    try {
        await prisma.yazar.delete({
            where: { yazar_id: parseInt(id) }
        });

        res.status(200).json({ message: "Yazar silindi" });
    } catch (error) {
        res.status(500).json({ message: "Yazar silinemedi", error });
    }
};