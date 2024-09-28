import { Sequelize } from 'sequelize';

const db = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
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
