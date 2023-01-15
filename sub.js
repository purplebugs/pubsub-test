const Redis = require("ioredis");
const redis = new Redis(6379, "192.168.1.115");

console.log(redis);
