const express = require('express');

const router = express.Router();

const playerApis = require("../controllers/playerController");

router.post('/players', playerApis.createPlayer);

router.get('/players', playerApis.getPlayers);

router.put('/players/:id', playerApis.updatePlayer);

router.delete('/players/:id', playerApis.deletePlayer)

router.get('/players/rank/:val', playerApis.playerRank)

router.get('/players/random', playerApis.randomPlayer)

module.exports = router;