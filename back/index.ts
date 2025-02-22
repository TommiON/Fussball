import express, { Application } from 'express';
import cors from 'cors';
import { SequelizeConnection } from "./utils/sequelize";

import { PORT } from './utils/config';

import healthCheckRouter from './routes/healthCheckRouter';
import clubRouter from './routes/clubRouter';

const app: Application = express();

/**
 * Initialize sequelize connection and set singleton instance
 */
SequelizeConnection.getInstance();

app.use(cors());
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/club', clubRouter);

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Sovellus käynnissä ja vastaa portissa ${PORT}`);
  });
}

start();