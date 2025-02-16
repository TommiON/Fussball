import express, { Application } from 'express';
import cors from 'cors';
import { SequelizeConnection } from "./utils/sequelize";
import Club from './models/club'

import { PORT } from './utils/config';

import healthCheckRouter from './routes/healthCheckRouter';

const app: Application = express();

/**
 * Initialize sequelize connection and set singleton instance
 */
SequelizeConnection.getInstance();

app.use(cors());
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);

// nää pitää siirtää tästä pois...
app.get('/api/club', async (req, res) => {
  const allClubs = await Club.findAll({
     // Avoid getting sequelize fields
     raw: true
  })

  res.status(200).send(allClubs);
})

app.post('/api/club', async (req, res) => {
  const newClub = await Club.create({
    name: 'FC Orvokki'
  })
  res.status(200).send(newClub);
})


const start = async () => {
  app.listen(PORT, () => {
    console.log(`Sovellus käynnissä ja vastaa portissa ${PORT}`);
  });
}

start();