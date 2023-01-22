const express = require("express");
const Blockchain = require("./blockchain");
const bodyParser = require("body-parser");
const app = express();
const blockchain = new Blockchain();
const PubSub = require("./publishsubscribe.js");
const pubsub = new PubSub({ blockchain });

setTimeout(() => pubsub.broadcastChain(), 1000);
app.use(bodyParser.json());

//get the list of all blockchains (read data)
app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

//writing data on blocks and adding block to the chain (write data)
app.post("/api/mine", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  pubsub.broadcastChain();
  res.redirect("/api/blocks");
});
const DEFAULT_PORT = 3000;
//to run get blockchain on other devicse you need to run on different server so peerport
let PEER_PORT;
if (process.env.GENERATE_PEER_PORT === "true") {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}
const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`listening to PORT:${PORT}`);
});
