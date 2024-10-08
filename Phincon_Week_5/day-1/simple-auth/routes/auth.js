const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("@/controllers/auth");
const {
  bodyValidation,
  checkDuplicate,
} = require("@/controllers/validation/auth");

const { verifyEmail } = require("@/controllers/token");

router.post("/register", bodyValidation, checkDuplicate, registerUser);
router.post("/login", loginUser);
router.get("/verify-email", verifyEmail);

router.get("/check-cookies", (req, res) => {
  res.send({
    cookies: req.cookies,
  });
});

module.exports = router;
