const jwt = require("jsonwebtoken");

const columns = {
  id: "us_id",
  email: "us_email",
  active: "us_is_active",
};
const generateToken = (id, email, name, expiresIn) => {
  const token = jwt.sign(
    {
      [columns.id]: id,
      [columns.email]: email,
      name: name,
      [columns.active]: true,
    },
    process.env.JWT_SECRET,
    {
      expiresIn,
    }
  );
  return token;
};

module.exports = {
  generateToken,
};
