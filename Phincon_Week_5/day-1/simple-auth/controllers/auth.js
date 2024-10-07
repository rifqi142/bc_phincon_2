const { users } = require("@/models");
const bcrypt = require("bcrypt");
const nodeMailer = require("nodemailer");
const { generateVerificationToken } = require("@/controllers/token");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

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
    const verificationToken = generateVerificationToken(
      newUser.id,
      newUser.email
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

module.exports = { registerUser };
