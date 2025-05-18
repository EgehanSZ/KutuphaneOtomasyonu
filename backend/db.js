import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

const connectDB = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log(" PostgreSQL bağlantısı başarılı");
    } catch (err) {
        console.error(" PostgreSQL bağlantı hatası:", err.message);
        throw err;
    }
};
export { pool, connectDB };