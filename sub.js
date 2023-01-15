// This IP address is a PubSub service eg. a cloud service or a friend's computer
const ip = "192.168.1.115";

const Redis = require("ioredis");
const redis = new Redis(); // To use local redis if run `redis-server` locally
// const redis = new Redis(6379, ip); // To use redis running elsewhere

// console.log(redis); // test connection

// "Coco" and "Cherry" are the names of channels
redis.subscribe("Coco", "Cherry", (err, count) => {
  if (err) {
    console.log(err);
  }
  console.log(`Subscribing to ${count} number of channels`);
});

redis.on("message", (channel, message) => {
  console.log(`Getting message: ${message} on channel: ${channel}`);
});
