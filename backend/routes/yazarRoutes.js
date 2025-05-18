import { getAllYazarlar, getYazarById, createYazar, updateYazar, deleteYazar } from "../controllers/yazarController.js";
import express from "express";
const router = express.Router();

router.get("/", getAllYazarlar);
router.get("/:id", getYazarById);
router.post("/", createYazar);
router.put("/:id", updateYazar);
router.delete("/:id", deleteYazar);

export default router;