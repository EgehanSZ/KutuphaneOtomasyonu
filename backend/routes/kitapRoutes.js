import { getAllKitaplar, createKitap, deleteKitap, getKitapByISBN, updateKitap } from "../controllers/kitapController.js";
import express from "express";
const router = express.Router();

router.get("/", getAllKitaplar);
router.get("/:isbn", getKitapByISBN);
router.post("/", createKitap);
router.put("/:isbn", updateKitap);
router.delete("/:isbn", deleteKitap);

export default router;
