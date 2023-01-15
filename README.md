# pubsub-test

To try out PubSub and understand what it is

Uses [IORedis](https://www.npmjs.com/package//ioredis) - Reference: [manual/pubsub](https://redis.io/docs/manual/pubsub/)

## Install 🪴

`npm install`

## Run app 🚀

Start redis which will broadcast messages

- In terminal run `redis-server`

- Alternatively have another service or laptop do this

Run app for listening to messages

- In a second terminal `node sub.js`

Run app for sending a message

- In a third terminal `node pub.js`
