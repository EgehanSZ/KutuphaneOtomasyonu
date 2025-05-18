import app from "./app.js";
import { connectDB } from './db.js'
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const PORT = process.env.PORT;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server Bu Portta Çalışıyor ${PORT}`);
        });



    } catch (error) {
        console.error(" Server Başlatılamadı:", err.message);
        process.exit(1);

    }
}
startServer();


