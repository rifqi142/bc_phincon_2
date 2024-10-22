const express = require("express");
const router = express.Router();

const {
  createMatch,
  getAllAvailableMatch,
  competeMatch,
  getAllScores,
  getScoreWinCountPerPlayer,
} = require("@/controllers/matchController");

router.post("/create-match", createMatch);
router.get("/get-all-available-match", getAllAvailableMatch);
router.put("/compete-match/:id", competeMatch);
router.get("/get-all-scores", getAllScores);
router.get("/get-all-winner-points", getScoreWinCountPerPlayer);

module.exports = router;
