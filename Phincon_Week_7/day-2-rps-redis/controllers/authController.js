require("module-alias/register");
const bcrypt = require("bcrypt");
const { generateToken } = require("@/controllers/tokenController");
const { Op } = require("sequelize");
const { user, token } = require("@/models");
const redis = require("@/controllers/redisController");

const authRegister = async (req, res) => {
  try {
    const { us_username, us_fullname, us_email, us_phone_number, us_password } =
      req.body;

    console.log("req body", req.body);

    if (
      !us_username ||
      !us_fullname ||
      !us_email ||
      !us_phone_number ||
      !us_password
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const us_created_at = new Date();
    const us_updated_at = new Date();

    const hashedPassword = await bcrypt.hash(us_password, 10);

    // Create a new user
    const newUser = await user.create({
      us_username,
      us_fullname,
      us_email,
      us_phone_number,
      us_password: hashedPassword,
      us_is_active: true,
      us_created_at,
      us_updated_at,
    });

    console.log("New user created:", newUser);

    // Generate token
    const tokenValue = generateToken(
      newUser.us_id,
      newUser.us_email,
      newUser.us_fullname,
      "1h"
    );

    // Save the token
    await token.create({
      tkn_value: tokenValue,
      tkn_type: "REGISTER_TOKEN",
      tkn_description: `Successfully created token for user ${newUser.us_email}`,
      tkn_us_id: newUser.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 60 * 60 * 1000), // Token expires in 1 hour
      tkn_is_active: true,
      tkn_created_at: new Date(),
      tkn_updated_at: new Date(),
    });

    // Remove password from the response
    delete newUser.dataValues.us_password;

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

const authLogin = async (req, res) => {
  try {
    const { input, us_password } = req.body;

    const foundUser = await user.findOne({
      where: {
        [Op.or]: [
          { us_username: input },
          { us_email: input },
          { us_phone_number: input },
        ],
      },
      attributes: [
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_password",
        "us_is_active",
      ],
    });

    if (!foundUser) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      us_password,
      foundUser.us_password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        status: "failed",
        code: 401,
        message: "Password not match",
      });
    }

    // generate token for login
    const loginToken = generateToken(
      foundUser.us_id,
      foundUser.us_email,
      foundUser.us_fullname,
      "1h"
    );

    // save token
    await token.create({
      tkn_value: loginToken,
      tkn_type: "LOGIN_TOKEN",
      tkn_description: `Successfully created token for user ${foundUser.us_email}`,
      tkn_us_id: foundUser.us_id,
      tkn_expired_on: new Date(new Date().getTime() + 60 * 60 * 1000), // expired token 1 hour
      tkn_is_active: true,
      tkn_created_at: new Date(),
      tkn_updated_at: new Date(),
    });

    // remove password from response
    delete foundUser.dataValues.us_password;
    foundUser.dataValues.token = loginToken;

    const userRedis = await redis.set(
      "user",
      JSON.stringify(foundUser),
      "EX",
      60 * 60 * 1000
    );

    return res.status("user", foundUser).status(200).send({
      status: "success",
      code: 200,
      message: "Login successfully",
      data: foundUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

const authLogout = async (req, res) => {
  try {
    const isUser = await redis.get("user");

    if (isUser) {
      const { token: redisToken } = JSON.parse(isUser);
      await token.update(
        { tkn_is_active: false },
        {
          where: {
            tkn_value: redisToken,
          },
        }
      );
    }
    await redis.del("user");
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Logout successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      code: 500,
      message: error.message,
    });
  }
};

module.exports = {
  authRegister,
  authLogin,
  authLogout,
};
