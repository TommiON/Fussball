import express = require('express');
import cors = require('cors');
import { Sequelize, QueryTypes } from 'sequelize';
require('dotenv').config()

import healthCheckRouter from './routes/healthCheckRouter';
import clubRouter from './routes/clubRouter';

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/club', clubRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// tietokantatestiä
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate()
    const testi = await sequelize.query('SELECT * FROM testi', { type: QueryTypes.SELECT });
    console.log('Kannasta löytyypi: ', testi);
    sequelize.close()
  } catch (error) {
    console.error('Kantaan ei saada yhteyttä:', error)
  }
}

connectToDb();