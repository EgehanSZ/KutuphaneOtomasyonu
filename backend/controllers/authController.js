import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

function generateToken(uye_id) {
    return jwt.sign({ uye_id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

export async function register(req, res) {
    const { isim, soyisim, eposta, telefon, parola } = req.body

    try {
        const hashedPassword = await bcrypt.hash(parola, 10)
        const uye = await prisma.uye.create({
            data: {
                isim,
                soyisim,
                eposta,
                telefon,
                parola: hashedPassword, // önce modelde parola eklenmeli
            },
        })

        const token = generateToken(uye.uye_id)
        res.status(201).json({ token })
    } catch (error) {
        res.status(400).json({ message: 'Kayıt işlemi başarısız', error })
    }
}

export async function login(req, res) {
    const { eposta, parola } = req.body

    try {
        const uye = await prisma.uye.findUnique({ where: { eposta } })
        if (!uye) return res.status(401).json({ message: 'Geçersiz e-posta' })

        const isMatch = await bcrypt.compare(parola, uye.parola)
        if (!isMatch) return res.status(401).json({ message: 'Parola hatalı' })

        const token = generateToken(uye.uye_id)
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Giriş işlemi başarısız', error })
    }
}
