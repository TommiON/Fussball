import express = require('express');
const app = express();

import { Player } from './domain/player';

let p = new Player();
console.log('Syntyi pelaaja: ', p);
console.log('toimiiks tää? ', p.foot.value)

app.get('/ping', (req, res) => {
  res.send('Elossa ollaan!');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});