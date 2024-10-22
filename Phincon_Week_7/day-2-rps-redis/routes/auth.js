const express = require("express");
const router = express.Router();

const {
  authBodyValidation,
  authCheckDuplicate,
} = require("@/controllers/validation/authValidation");

const {
  authRegister,
  authLogin,
  authLogout,
} = require("@/controllers/authController");

router.post("/register", authBodyValidation, authCheckDuplicate, authRegister);
router.post("/login", authLogin);
router.post("/logout", authLogout);

module.exports = router;
