import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getAllOduncs(req, res) {
    try {
        const oduncs = await prisma.odunc.findMany({
            include: {
                uye: true,
                kitap: true,
            },
        });
        res.status(200).json(oduncs);
    } catch (error) {
        res.status(500).json({ message: "Ödünçler getirilemedi", error });
    }
}


export async function getOduncById(req, res) {
    const { uye_id } = req.params;

    try {
        const oduncler = await prisma.odunc.findMany({
            where: { uye_id: parseInt(uye_id) },
            include: {
                kitap: true,
            },
        });

        res.status(200).json(oduncler);
    } catch (error) {
        res.status(500).json({ message: "Ödünç kayıtları getirilemedi", error });
    }
}


export async function createOdunc(req, res) {
    const { isbn, odunc_tarihi, iade_tarihi } = req.body;
    const uye_id = req.user.uye_id;

    try {
        const yeniOdunc = await prisma.odunc.create({
            data: {
                uye_id,
                isbn,
                odunc_tarihi: odunc_tarihi ? new Date(odunc_tarihi) : undefined,
                iade_tarihi: iade_tarihi ? new Date(iade_tarihi) : undefined,
            },
        });

        res.status(201).json(yeniOdunc);
    } catch (error) {
        console.error("Odunc oluşturulamadı:", error);
        res.status(500).json({ message: "Ödünç oluşturulamadı", error });
    }
}



export async function updateOdunc(req, res) {
    const { id } = req.params;
    const { uye_id, isbn, odunc_tarihi, iade_tarihi } = req.body;

    try {
        const guncellenenOdunc = await prisma.odunc.update({
            where: { odunc_id: parseInt(id) },
            data: {
                uye_id,
                isbn,
                odunc_tarihi: odunc_tarihi ? new Date(odunc_tarihi) : undefined,
                iade_tarihi: iade_tarihi ? new Date(iade_tarihi) : null,
            },
        });

        res.status(200).json(guncellenenOdunc);
    } catch (error) {
        res.status(500).json({ message: "Ödünç güncellenemedi", error });
    }
}


export async function deleteOdunc(req, res) {
    const { id } = req.params;

    try {
        await prisma.odunc.delete({
            where: { odunc_id: parseInt(id) },
        });
        res.status(200).json({ message: "Ödünç silindi" });
    } catch (error) {
        res.status(500).json({ message: "Ödünç silinemedi", error });
    }
}
