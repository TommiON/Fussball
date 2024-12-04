import express = require('express');

const router = express.Router();

router.get('/', (_request, response) => {
    response.status(200).send('Käy ja kukkuu!');
});

export default router;