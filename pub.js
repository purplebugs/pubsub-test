const Redis = require("ioredis");
const redis = new Redis(); // To use local redis if run `redis-server` locally

redis.publish("Coco", JSON.stringify({ msg: "Coco loves hot chocolate" }));
redis.publish("Cherry", JSON.stringify({ msg: "Cherry likes 80s music" }));

setInterval(() => {
  redis.publish(
    "Coco",
    JSON.stringify({ msg: "The time is now", time: Date.now() })
  );
}, 5000); // Publish message every 5 seconds
