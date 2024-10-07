const joi = require("joi");
const { users } = require("@/models");

const bodyValidation = (req, res, next) => {
  const schema = joi.object({
    fullname: joi.string().min(5).max(20).required(),
    username: joi.string().min(5).max(15).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    phoneNumber: joi.string().max(15).required(),
  });
  const validatorError = schema.validate(req.body).error;
  if (validatorError) {
    return res.status(400).send({
      status: "failed",
      code: 400,
      message: validatorError.details[0].message,
    });
  }
  next();
};

const checkDuplicate = async (req, res, next) => {
  const { email, username, phoneNumber } = req.body;
  try {
    const userEmail = await users.findOne({ where: { us_email: email } });
    if (userEmail) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "Email already exists",
      });
    }

    const userUsername = await users.findOne({
      where: { us_username: username },
    });
    if (userUsername) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "Username already exists",
      });
    }

    const userPhoneNumber = await users.findOne({
      where: { us_phone_number: phoneNumber },
    });
    if (userPhoneNumber) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "Phone Number already exists",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ status: "failed", code: 500, error: error.message });
  }
};

module.exports = { bodyValidation, checkDuplicate };
