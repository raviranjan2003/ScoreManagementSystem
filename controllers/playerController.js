const mongoose = require("mongoose");
const Player = require("../models/playerModel");

module.exports.createPlayer = async (req, res) => {
  const { name, country, score } = req.body;

  try {
    // Create a new player
    const newPlayer = new Player({
      name,
      country,
      score,
    });

    // Save the new player
    await newPlayer.save();

    return res.json({
      message: "Player created successfully",
      player: newPlayer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.updatePlayer = async (req, res) => {
  const playerId = req.params.id;
  const { name, score } = req.body;

  try {
    // Find the player by ID
    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    if (name) {
      player.name = name;
    }

    if (score) {
      player.score = score;
    }

    // Save the updated player
    await player.save();

    return res.json({ message: "Player updated successfully", player });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deletePlayer = async (req, res) => {
  const playerId = req.params.id;

  try {
    // Find and delete the player by ID
    const deletedPlayer = await Player.findByIdAndDelete(playerId);

    if (!deletedPlayer) {
      return res.status(404).json({ error: "Player not found" });
    }

    return res.json({
      message: "Player deleted successfully",
      player: deletedPlayer,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getPlayers = async (req, res) => {
    try {
        // Find all players and sort by score in descending order
        const players = await Player.find().sort({ score: -1 });

        return res.json({ players });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.playerRank = async (req, res) => {
    const rank = parseInt(req.params.val);

    try {
    // Find the player at the specified rank
    const player = await Player.find().sort({ score: -1 }).skip(rank - 1).limit(1);

    if (!player || player.length === 0) {
        return res.status(404).json({ error: 'Player not found at the specified rank' });
    }

    return res.json({ player: player[0] });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.randomPlayer = async (req, res) => {
//   res.status(200).send(`Get request on /players/random `);
    try {
        // Using $sample aggregation to fetch a random player
        const randomPlayer = await Player.aggregate([{ $sample: { size: 1 } }]);

        if (!randomPlayer || randomPlayer.length === 0) {
            return res.status(404).json({ error: 'No players found' });
        }

        return res.json({ player: randomPlayer[0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
