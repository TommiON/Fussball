import express = require('express');
import Club from '../models/club';

const router = express.Router();

router.get('/', async (req, res) => {
    const allClubs = await Club.findAll({
        raw: true
    })

    res.status(200).send(allClubs);
})

router.post('/', async (req, res) => {
    const newClub = await Club.create({
        name: req.body.name,
        established: Date.now()
    })
  
    res.status(200).send(newClub);
})

export default router;
