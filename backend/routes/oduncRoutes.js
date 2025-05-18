import { createOdunc, deleteOdunc, getAllOduncs, getOduncById, updateOdunc } from "../controllers/oduncController.js"
import express from "express";
const router = express.Router();

router.get("/", getAllOduncs);
router.get("/:uye_id", getOduncById);
router.post("/", createOdunc);
router.put("/:id", updateOdunc);
router.delete("/:id", deleteOdunc);

export default router;