require("module-alias/register");
const joi = require("joi");
const { user } = require("@/models");

const authBodyValidation = (req, res, next) => {
  const bodySchema = joi.object({
    us_username: joi.string().min(3).max(20).required(),
    us_fullname: joi.string().min(3).max(50).required(),
    us_email: joi.string().email().required(),
    us_password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    us_phone_number: joi.string().min(10).max(15).required(),
  });
  const validationErrors = bodySchema.validate(req.body);
  if (validationErrors.error) {
    return res.status(400).json({
      message: validationErrors.error.details[0].message,
    });
  }
  next();
};

const authCheckDuplicate = async (req, res, next) => {
  const { us_email, us_phone_number, us_username } = req.body;
  try {
    const userByEmail = await user.findOne({
      where: {
        us_email,
      },
    });
    if (userByEmail) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

    const userByPhoneNumber = await user.findOne({
      where: {
        us_phone_number,
      },
    });
    if (userByPhoneNumber) {
      return res.status(400).json({
        message: "Phone number already taken",
      });
    }

    const userByUsername = await user.findOne({
      where: {
        us_username,
      },
    });
    if (userByUsername) {
      return res.status(400).json({
        message: "Username already taken",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  authBodyValidation,
  authCheckDuplicate,
};
