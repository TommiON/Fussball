import express = require('express');

import { test } from '../business/clubService';

const router = express.Router();

router.get('/test', (_request, response) => {
    response.status(200).send(test())
});

export default router;