const { users } = require("@/models");
const bcrypt = require("bcrypt");
const nodeMailer = require("nodemailer");
const { generateToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { Op } = require("sequelize");

const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password, phoneNumber } = req.body;
    if (!fullname || !username || !email || !password || !phoneNumber) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "All fields are required",
      });
    }

    // Create user
    const newUser = await users.create({
      us_fullname: fullname,
      us_username: username,
      us_email: email,
      us_password: bcrypt.hashSync(password, 10),
      us_phone_number: phoneNumber,
      us_active: false,
    });

    // Generate verification token
    const verificationToken = generateToken(
      newUser.id,
      newUser.email,
      "VERIFICATION",
      "1h"
    );

    // Read and compile email template
    const emailTemplateSource = fs.readFileSync(
      path.join(__dirname, "../views/templates/emailVerification.hbs"),
      "utf-8"
    );
    const template = handlebars.compile(emailTemplateSource);

    // Generate email content
    const htmlToSend = template({
      logoUrl: `${process.env.BASE_URL}:${process.env.PORT}/images/logo-phincon-academy.png`,
      username: username,
      verificationLink: `${process.env.BASE_URL}/auth/verify-email?token=${verificationToken}`,
    });

    // Configure mail transporter
    const transporter = nodeMailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    });

    // Set up mail options
    const mailOptions = {
      from: "phinconacademy@gmail.com",
      to: email,
      subject: "Verification Mail",
      text: `Click this link to activate your account: ${process.env.CLIENT_URL}/auth/activate/${newUser.id}`,
      html: htmlToSend,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(201).send({
      status: "success",
      code: 201,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ status: "failed", code: 500, error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { input, password } = req.body;

    // Find user by username, email, or phone number using operator sequelize
    const user = await users.findOne({
      where: {
        [Op.or]: [
          { us_username: input },
          { us_email: input },
          { us_phone_number: input },
        ],
      },

      // Select specific fields to send in response
      attributes: [
        "us_password",
        "us_id",
        "us_username",
        "us_fullname",
        "us_email",
        "us_phone_number",
        "us_active",
      ],
    });

    // Generate token for login
    const loginToken = generateToken(user.us_id, user.us_email, "LOGIN", "1h");
    // Check if user exists
    if (!user) {
      return res.status(404).send({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }

    // Check if account is activated
    const isActivated = user.us_active;
    if (!isActivated) {
      return res.status(403).send({
        status: "failed",
        code: 403,
        message: "Account is not activated, please contact administrator",
      });
    }
    // Check if password is valid
    const isValidPassword = await bcrypt.compare(password, user.us_password);
    if (!isValidPassword) {
      return res.status(401).send({
        status: "failed",
        code: 401,
        message: "Invalid password",
      });
    }

    // delete response us_password field
    delete user.dataValues.us_password;

    // Set user token to cookie
    user.dataValues.token = loginToken;

    // expires in 1 hari
    const options = {
      // 24 jam * 60 menit * 60 detik * 1000 milidetik
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.cookie("user", user, options).status(200).send({
      status: "success",
      code: 200,
      data: user,
    });
  } catch (error) {}
};

module.exports = { registerUser, loginUser };
