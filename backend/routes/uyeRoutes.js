import { createUye, deleteUye, getAllUyeler, getUyeById, updateUye, } from "../controllers/uyeController.js";
import express from "express";
const router = express.Router();

router.get("/", getAllUyeler);
router.get("/:id", getUyeById);
router.post("/", createUye);
router.put("/:id", updateUye);
router.delete("/:id", deleteUye);

export default router;