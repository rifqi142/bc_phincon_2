const express = require("express");
const router = express.Router();
const { registerUser } = require("@/controllers/auth");
const {
  bodyValidation,
  checkDuplicate,
} = require("@/controllers/validation/auth");

const { verifyEmail } = require("@/controllers/token");

router.post("/register", bodyValidation, checkDuplicate, registerUser);
router.get("/verify-email", verifyEmail);

module.exports = router;
