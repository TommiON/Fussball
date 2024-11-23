import express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('Elossa ollaan!');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});