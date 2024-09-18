/* eslint-disable @typescript-eslint/no-misused-promises */
import mongoose from 'mongoose';
import config from './config';
import { logger } from './logger';

class Database {
    private isConnected = false;

    async connect(): Promise<void> {
        if (this.isConnected) {
            logger.info('MongoDB is already connected');
            return;
        }

        try {
            await mongoose.connect(config.MONGODB_URL as string, {
                autoIndex: true,
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000
            });
            this.isConnected = true;
            logger.info('MongoDB connected successfully');

            mongoose.connection.on('error', (err) => {
                logger.error('MongoDB error:', err);
                this.isConnected = false;
            });

            mongoose.connection.on('disconnected', () => {
                logger.warn('MongoDB disconnected');
                this.isConnected = false;
            });

            if (config.ENV !== 'production') mongoose.set('debug', true);
        } catch (err) {
            logger.error('MongoDB connection failed:', err);
            process.exit(1);
        }
    }

    async disconnect(): Promise<void> {
        if (!this.isConnected) return;

        await mongoose.disconnect();
        this.isConnected = false;
        logger.info('MongoDB disconnected');
    }

    get status(): boolean {
        return this.isConnected;
    }
}

const db = new Database();

process.on('SIGINT', async () => {
    await db.disconnect();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await db.disconnect();
    process.exit(0);
});

export default db;

