import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getAllYayinEvleri(req, res) {
    try {
        const yayinEvleri = await prisma.yayinEvi.findMany({
            include: {
                kitaplar: true,
            },
        });
        res.status(200).json(yayinEvleri);
    } catch (error) {
        res.status(500).json({ message: "Yayınevleri getirilemedi", error });
    }
}


export async function getYayinEviById(req, res) {
    const { id } = req.params;

    try {
        const yayinEvi = await prisma.yayinEvi.findUnique({
            where: { yayin_evi_id: parseInt(id) },
            include: {
                kitaplar: true,
            },
        });

        if (!yayinEvi) {
            return res.status(404).json({ message: "Yayınevi bulunamadı" });
        }

        res.status(200).json(yayinEvi);
    } catch (error) {
        res.status(500).json({ message: "Yayınevi getirilemedi", error });
    }
}


export async function createYayinEvi(req, res) {
    const { ad } = req.body;

    try {
        const yeniYayinEvi = await prisma.yayinEvi.create({
            data: {
                ad,
            },
        });

        res.status(201).json(yeniYayinEvi);
    } catch (error) {
        res.status(500).json({ message: "Yayınevi oluşturulamadı", error });
    }
}


export async function updateYayinEvi(req, res) {
    const { id } = req.params;
    const { ad } = req.body;

    try {
        const guncellenenYayinEvi = await prisma.yayinEvi.update({
            where: { yayin_evi_id: parseInt(id) },
            data: {
                ad,
            },
        });

        res.status(200).json(guncellenenYayinEvi);
    } catch (error) {
        res.status(500).json({ message: "Yayınevi güncellenemedi", error });
    }
}

export async function deleteYayinEvi(req, res) {
    const { id } = req.params;

    try {
        await prisma.yayinEvi.delete({
            where: { yayin_evi_id: parseInt(id) },
        });

        res.status(200).json({ message: "Yayınevi silindi" });
    } catch (error) {
        res.status(500).json({ message: "Yayınevi silinemedi", error });
    }
}
