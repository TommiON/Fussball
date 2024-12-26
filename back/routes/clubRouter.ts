import express = require('express');

import { test, getAll } from '../business/clubService';

const router = express.Router();

router.get('/test', (_request, response) => {
    response.status(200).send(test())
});

router.get('/', (_request, response) => {
    console.log('* router: ', _request);
    response.status(200).send(getAll());
})

export default router;