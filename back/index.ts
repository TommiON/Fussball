import express, { Application } from 'express';
import cors from 'cors';

import { PORT } from './utils/config';

import healthCheckRouter from './routes/healthCheckRouter';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);
// kun alla olevan palauttaa, tietokantaongelmat palaavat
//app.use('/api/club', clubRouter);

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Sovellus käynnissä ja vastaa portissa ${PORT}`);
  });
}

start();