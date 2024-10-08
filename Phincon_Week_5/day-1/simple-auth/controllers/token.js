const jwt = require("jsonwebtoken");
const { users } = require("@/models");

const columns = {
  id: "us_id",
  email: "us_email",
  active: "us_active",
};

const generateToken = (id, email, name, expiresIn) => {
  const token = jwt.sign(
    { [columns.id]: id, [columns.email]: email, name: name },
    process.env.JWT_SECRET,
    {
      expiresIn: expiresIn,
    }
  );
  return token;
};

const verifyToken = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.VERIFICATION_SECRET);
    const user = await users.findOne({
      where: { [column.id]: decoded.id, [column.email]: decoded.email },
    });
    if (!user) {
      return res.status(404).send({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }
    if (user.us_active) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "User already activated",
      });
    }
    await users.update(
      { us_active: true },
      { where: { [column.id]: decoded.id } }
    );
    res.status(200).send({
      status: "success",
      code: 200,
      message: "User activated successfully",
    });
  } catch (error) {
    res.status(500).json({ status: "failed", code: 500, error: error.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await users.findOne({
      where: { [columns.id]: decoded.id, [columns.email]: decoded.email },
    });
    if (!user) {
      return res.status(404).send({
        status: "failed",
        code: 404,
        message: "User not found",
      });
    }
    if (user.us_active) {
      return res.status(400).send({
        status: "failed",
        code: 400,
        message: "User already activated",
      });
    }
    await users.update(
      { us_active: true },
      { where: { [columns.id]: decoded.id } }
    );
    res.status(200).send({
      status: "success",
      code: 200,
      message: "User activated successfully",
    });
  } catch (error) {
    res.status(500).json({ status: "failed", code: 500, error: error.message });
  }
};

module.exports = { generateToken, verifyToken, verifyEmail };
