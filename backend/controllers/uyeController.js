import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllUyeler(req, res) {
    try {
        const uyeler = await prisma.uye.findMany({
            include: {
                oduncs: {
                    include: {
                        kitap: true
                    }
                }
            }
        });
        res.status(200).json(uyeler);
    } catch (error) {
        res.status(500).json({ message: "Üyeler getirilemedi", error });
    }
}


export async function getUyeById(req, res) {
    const { id } = req.params;

    try {
        const uye = await prisma.uye.findUnique({
            where: { uye_id: parseInt(id) },
            include: {
                oduncs: {
                    include: {
                        kitap: true
                    }
                }
            }
        });

        if (!uye) {
            return res.status(404).json({ message: "Üye bulunamadı" });
        }

        res.status(200).json(uye);
    } catch (error) {
        res.status(500).json({ message: "Üye getirilemedi", error });
    }
}


export async function createUye(req, res) {
    const { isim, soyisim, eposta, telefon } = req.body;

    try {
        const yeniUye = await prisma.uye.create({
            data: {
                isim,
                soyisim,
                eposta,
                telefon
            }
        });
        res.status(201).json(yeniUye);
    } catch (error) {
        res.status(500).json({ message: "Üye oluşturulamadı", error });
    }
}


export async function updateUye(req, res) {
    const { id } = req.params;
    const { isim, soyisim, eposta, telefon } = req.body;

    try {
        const guncellenenUye = await prisma.uye.update({
            where: { uye_id: parseInt(id) },
            data: {
                isim,
                soyisim,
                eposta,
                telefon
            }
        });

        res.status(200).json(guncellenenUye);
    } catch (error) {
        res.status(500).json({ message: "Üye güncellenemedi", error });
    }
}


export async function deleteUye(req, res) {
    const { id } = req.params;

    try {
        await prisma.uye.delete({
            where: { uye_id: parseInt(id) }
        });
        res.status(200).json({ message: "Üye silindi" });
    } catch (error) {
        res.status(500).json({ message: "Üye silinemedi", error });
    }
}