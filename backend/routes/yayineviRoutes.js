import { createYayinEvi, deleteYayinEvi, getAllYayinEvleri, getYayinEviById, updateYayinEvi } from "../controllers/yayineviController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllYayinEvleri);
router.get("/:id", getYayinEviById);
router.post("/", createYayinEvi);
router.put("/:id", updateYayinEvi);
router.delete("/:id", deleteYayinEvi);

export default router;