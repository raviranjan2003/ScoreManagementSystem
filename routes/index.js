const express = require('express');

const router = express.Router();

router.post('/players', (req, res) => {
    res.status(200).send("Post request on /players ")
})

router.get('/players', (req, res) => {
    res.status(200).send("Get request on /players ")
})

router.put('/players/:id',(req,res) => {
    const id = req.params;
    res.status(200).send(`Put request on /players/${id} `);
})

router.delete('/players/:id',(req,res) => {
    const id = req.params;
    res.status(200).send(`Delete request on /players/${id} `);
})

router.get('/players/rank/:val',(req,res) => {
    const val = req.params;
    res.status(200).send(`Get request on /players/${val} `);
})

router.get('/players/random',(req,res) => {
    res.status(200).send(`Get request on /players/random `);
})

module.exports = router;