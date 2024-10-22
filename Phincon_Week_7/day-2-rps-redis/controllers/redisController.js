const { Redis } = require("ioredis");
require("dotenv").config();
require("module-alias/register");

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

module.exports = redis;
