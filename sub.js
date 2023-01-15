const Redis = require("ioredis");
const redis = new Redis(6379, "192.168.1.115");

// console.log(redis); // test connection

redis.subscribe("Coco", (err, count) => {
  if (err) {
    console.log(err);
  }
  console.log(`Subscribing to ${count} number of channels`);
});

redis.on("message", (channel, message) => {
  console.log(`Getting message(s): ${message} on channel(s): ${channel}`);
});
