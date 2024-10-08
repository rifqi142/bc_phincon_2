require("dotenv").config();
require("module-alias/register");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

const authRoutes = require("@/routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
