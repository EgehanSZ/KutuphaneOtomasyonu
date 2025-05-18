import { createKategori, deleteKategori, getAllKategoriler, getKategoriById, updateKategori } from "../controllers/kategoriController.js"
import express from "express";

const router = express.Router();

router.get("/", getAllKategoriler);
router.get("/:id", getKategoriById);
router.post("/", createKategori);
router.put("/:id", updateKategori);
router.delete("/:id", deleteKategori);

export default router;