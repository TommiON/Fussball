import { Sequelize } from 'sequelize-typescript';
import { DATABASE_URL } from './config';

export const sequelizeConnection: Sequelize = new Sequelize(DATABASE_URL, {
    host: 'localhost',
    dialect: 'postgres'
});

export const connectToDatabase = async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log('Muodostettu yhteys tietokantaan');
    } catch (error) {
        console.log('VIRHE, ei yhteyttä tietokantaan: ', error);
    }

    return null
}



