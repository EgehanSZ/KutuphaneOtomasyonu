import kitapRoutes from "./kitapRoutes.js";
import yazarRoutes from "./yazarRoutes.js";
import uyeRoutes from "./uyeRoutes.js";
import oduncRoutes from "./oduncRoutes.js";
import kategoriRoutes from "./kategoriRoutes.js";
import yayineviRoutes from "./yayineviRoutes.js";
import authRoutes from "./authRoutes.js";
import { authenticateToken } from '../middlewares/authMiddlewares.js'

import express from "express";
const router = express.Router();

router.use("/kitaplar", authenticateToken, kitapRoutes);
router.use("/yazarlar", authenticateToken, yazarRoutes);
router.use("/uyeler", authenticateToken, uyeRoutes);
router.use("/odunc", authenticateToken, oduncRoutes);
router.use("/kategoriler", authenticateToken, kategoriRoutes);
router.use("/yayinevleri", authenticateToken, yayineviRoutes);
router.use("/auth", authRoutes);


export default router;
