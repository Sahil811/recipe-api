import { Sequelize, Dialect } from 'sequelize';
import { config } from '../config';

const dbHost = config.database.host || '';
const dbUser = config.database.username || '';
const dbPassword = config.database.password || '';
const dbName = config.database.database || '';
const dbDialect: Dialect = config.database.dialect as Dialect;

if (!dbHost || !dbUser || !dbPassword || !dbName || !dbDialect) {
    throw new Error(
        'Database connection details are not defined. Please check your .env file.'
    );
}

const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
});

const testConnection = async () => {
    try {
        await db.authenticate();
        console.log(
            'Connection to the database has been established successfully.'
        );
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

export default db;
