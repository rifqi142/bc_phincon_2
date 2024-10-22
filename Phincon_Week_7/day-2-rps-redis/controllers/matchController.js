const { match, user } = require("@/models");
const redis = require("@/controllers/redisController");
const sequelize = require("sequelize");

const createMatch = async (req, res) => {
  try {
    const userRedisData = await redis.get("user");
    const userRedis = JSON.parse(userRedisData);

    const { value } = req.body;

    if (!userRedis) {
      return res.status(401).json({
        status: "Failed",
        code: 401,
        error: "Unauthorized",
      });
    }

    const matchData = await match.create({
      mc_player_one: userRedis.us_id,
      mc_player_one_value: value,
      mc_active: true,
      mc_created_at: new Date(),
      mc_updated_at: new Date(),
    });

    return res.status(201).json({
      status: "Success",
      code: 201,
      data: matchData,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed to create match.",
      code: 500,
      error: error.message,
    });
  }
};

const getAllAvailableMatch = async (req, res) => {
  try {
    const userRedisData = await redis.get("user");
    if (!userRedisData) {
      return res.status(401).json({
        status: "Failed",
        code: 401,
        error: "Unauthorized. No user data found in Redis.",
      });
    }

    const userRedis = JSON.parse(userRedisData);

    if (!userRedis || !userRedis.us_id) {
      return res.status(401).json({
        status: "Failed",
        code: 401,
        error: "Unauthorized. User ID not found.",
      });
    }

    const availableMatches = await match.findAll({
      where: {
        mc_active: true,
        mc_player_two: null,
      },
      include: [
        { model: user, as: "player_one", attributes: ["us_id", "us_username"] },
        { model: user, as: "player_two", attributes: ["us_id", "us_username"] },
        { model: user, as: "winner", attributes: ["us_id", "us_username"] },
      ],
    });

    if (!availableMatches || availableMatches.length === 0) {
      return res.status(404).json({
        status: "Failed",
        code: 404,
        error: "No available matches found.",
      });
    }

    return res.status(200).json({
      status: "Success",
      code: 200,
      data: availableMatches,
    });
  } catch (error) {
    console.error("Error fetching available matches:", error);
    return res.status(500).json({
      status: "Failed",
      code: 500,
      error: `Failed to get available matches: ${error.message}`,
    });
  }
};

const competeMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const userRedisData = await redis.get("user");
    const userRedis = JSON.parse(userRedisData);

    const { value } = req.body;

    if (!userRedis) {
      return res.status(401).json({
        status: "Failed",
        code: 401,
        error: "Unauthorized. No user data found in Redis.",
      });
    }

    const matchData = await match.findOne({
      where: {
        mc_id: id,
        mc_active: true,
      },
    });

    if (!matchData) {
      return res.status(404).json({
        status: "Failed",
        code: 404,
        error: "Match not found",
      });
    }

    if (!matchData.mc_player_one_value) {
      return res.status(400).json({
        status: "Failed",
        code: 400,
        error: "Player one has not made a choice yet",
      });
    }

    await match.update(
      {
        mc_player_two: userRedis.us_id,
        mc_player_two_value: value,
      },
      {
        where: {
          mc_id: id,
        },
      }
    );

    const playerOneChoice = matchData.mc_player_one_value.toLowerCase();
    const playerTwoChoice = value.toLowerCase();

    let winnerId = null;
    let resultMessage = "";

    if (playerOneChoice === playerTwoChoice) {
      resultMessage = "The game is a tie.";
      winnerId = "No one wins, game is a tie.";
    } else if (
      (playerOneChoice === "rock" && playerTwoChoice === "scissors") ||
      (playerOneChoice === "scissors" && playerTwoChoice === "paper") ||
      (playerOneChoice === "paper" && playerTwoChoice === "rock")
    ) {
      winnerId = matchData.mc_player_one;
      resultMessage = "Player one wins!";
    } else {
      winnerId = userRedis.us_id;
      resultMessage = "Player two wins!";
    }

    await match.update(
      {
        mc_active: false,
        mc_winner: winnerId,
        mc_updated_at: new Date(),
      },
      {
        where: {
          mc_id: id,
        },
      }
    );

    const winner = winnerId
      ? await user.findOne({ where: { us_id: winnerId } })
      : null;

    return res.status(200).json({
      status: "Success",
      code: 200,
      data: {
        match_id: id,
        result: resultMessage,
        winner: winner
          ? { us_id: winner.us_id, us_username: winner.us_username }
          : null,
      },
    });
  } catch (error) {
    console.error("Error competing match:", error);
    return res.status(500).json({
      status: "Failed",
      code: 500,
      error: "Failed to complete match: " + error.message,
    });
  }
};

const getAllScores = async (req, res) => {
  try {
    const completedMatches = await match.findAll({
      where: {
        mc_active: false,
      },
      include: [
        { model: user, as: "player_one", attributes: ["us_id", "us_username"] },
        { model: user, as: "player_two", attributes: ["us_id", "us_username"] },
        { model: user, as: "winner", attributes: ["us_id", "us_username"] },
      ],
    });

    if (!completedMatches || completedMatches.length === 0) {
      return res.status(404).json({
        status: "Failed",
        code: 404,
        error: "No completed matches found.",
      });
    }

    return res.status(200).json({
      status: "Success",
      code: 200,
      data: completedMatches,
    });
  } catch (error) {
    console.error("Error fetching all scores:", error);
    return res.status(500).json({
      status: "Failed to get all scores.",
      code: 500,
      error: error.message,
    });
  }
};

const getScoreWinCountPerPlayer = async (req, res) => {
  try {
    const userRedisData = await redis.get("user");
    const userRedis = JSON.parse(userRedisData);

    if (!userRedis) {
      return res.status(401).json({
        status: "Failed",
        code: 401,
        error: "Unauthorized",
      });
    }

    // Get all wins per player
    const allWins = await match.findAll({
      attributes: [
        "mc_winner",
        [sequelize.fn("COUNT", sequelize.col("mc_winner")), "win_count"],
      ],
      group: ["mc_winner", "winner.us_id", "winner.us_username"],
      include: [
        {
          model: user,
          as: "winner",
          attributes: ["us_id", "us_username"],
        },
      ],
    });

    if (!allWins || allWins.length === 0) {
      return res.status(404).json({
        status: "Failed",
        code: 404,
        error: "No winners found.",
      });
    }

    // Format the data to only include the username and win count
    const formattedData = allWins.map((win) => ({
      us_username: win.winner ? win.winner.us_username : "Unknown",
      win_count: win.dataValues.win_count,
    }));

    return res.status(200).json({
      status: "Success",
      code: 200,
      data: formattedData,
    });
  } catch (error) {
    console.error("Error fetching win count per player:", error);
    return res.status(500).json({
      status: "Failed",
      code: 500,
      error: error.message,
    });
  }
};

module.exports = {
  createMatch,
  getAllAvailableMatch,
  competeMatch,
  getAllScores,
  getScoreWinCountPerPlayer,
};
