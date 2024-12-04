import express = require('express');
import cors = require('cors');

import healthCheckRouter from './routes/healthCheckRouter';
import clubRouter from './routes/clubRouter';

import { Player } from './domain/player/player';
import { Team } from './domain/team/team';
import { Club } from './domain/club/club';
import { formattedDate } from './utils/formattedDate';

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/club', clubRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});