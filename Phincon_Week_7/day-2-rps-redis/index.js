require("dotenv").config();
require("module-alias/register");
const express = require("express");
const Redis = require("ioredis");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

const authRoutes = require("@/routes/auth");
const matchRoutes = require("@/routes/match");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;
const redis_password = process.env.REDIS_PASSWORD;

const redis = new Redis({
  host: redis_host,
  password: redis_password,
  port: redis_port,
});

redis.on("connect", () => {
  console.log("Connected Redis connected");
});

redis.on("error", async (error) => {
  console.log("Error connecting to Redis", error);
  await redis.quit();
});

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/match", matchRoutes);

app.get("/", async (req, res) => {
  res.send("Hello Redis with Express JS and Node JS");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
