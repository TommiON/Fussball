import express, { Application } from 'express';
import cors from 'cors';

import { PORT } from './utils/config';
import { connectToDatabase } from './utils/database';

import healthCheckRouter from './routes/healthCheckRouter';
import clubRouter from './routes/clubRouter';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/healthcheck', healthCheckRouter);
// app.use('/api/club', clubRouter);

const start = async () => {
  console.log('onko tässä?')
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Sovellus käynnissä ja vastaa portissa ${PORT}`);
  });
}

start();