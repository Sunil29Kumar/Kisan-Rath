

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export async function connectdb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

process.on("SIGINT", async () => {
    await mongoose.disconnect();
    console.log("Database Disconnected!");
    process.exit(0);
});
