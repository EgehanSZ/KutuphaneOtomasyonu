import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getAllKategoriler(req, res) {
  try {
    const kategoriler = await prisma.kategori.findMany({
      include: {
        kitaplar: true,
      },
    });
    res.status(200).json(kategoriler);
  } catch (error) {
    res.status(500).json({ message: "Kategoriler getirilemedi", error });
  }
}


export async function getKategoriById(req, res) {
  const { id } = req.params;

  try {
    const kategori = await prisma.kategori.findUnique({
      where: { kategori_id: parseInt(id) },
      include: {
        kitaplar: true,
      },
    });

    if (!kategori) {
      return res.status(404).json({ message: "Kategori bulunamadı" });
    }

    res.status(200).json(kategori);
  } catch (error) {
    res.status(500).json({ message: "Kategori getirilemedi", error });
  }
}


export async function createKategori(req, res) {
  const { ad } = req.body;

  try {
    const yeniKategori = await prisma.kategori.create({
      data: {
        ad,
      },
    });

    res.status(201).json(yeniKategori);
  } catch (error) {
    res.status(500).json({ message: "Kategori oluşturulamadı", error });
  }
}


export async function updateKategori(req, res) {
  const { id } = req.params;
  const { ad } = req.body;

  try {
    const guncellenenKategori = await prisma.kategori.update({
      where: { kategori_id: parseInt(id) },
      data: {
        ad,
      },
    });

    res.status(200).json(guncellenenKategori);
  } catch (error) {
    res.status(500).json({ message: "Kategori güncellenemedi", error });
  }
}


export async function deleteKategori(req, res) {
  const { id } = req.params;

  try {
    await prisma.kategori.delete({
      where: { kategori_id: parseInt(id) },
    });

    res.status(200).json({ message: "Kategori silindi" });
  } catch (error) {
    res.status(500).json({ message: "Kategori silinemedi", error });
  }
}
