import dotenv from 'dotenv';

dotenv.config();

export const config = {
    database: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: 'mysql',
    },
    server: {
        port: process.env.DB_PORT,
    },
};
