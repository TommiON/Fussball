import express = require('express');
const app = express();

import { Player } from './domain/player/player';
import { Team } from './domain/team/team';
import { Club } from './domain/club/club';

let c = new Club('FC Orvokki');
console.log(c.name, ', perustettu ', c.established);
c.team.players.forEach(p => console.log(p.foot.value, ' ', p.birthday.value));

app.get('/ping', (req, res) => {
  res.send('Elossa ollaan!');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});