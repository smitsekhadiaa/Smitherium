const { GENESIS_DATA, MINE_RATE } = require("./config.js");
const cryptoHash = require("./crypto-hash.js");
class Block {
  constructor({ timestamp, prevHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  //   made genesis a static function so no need for calling by object below

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ prevBlock, data }) {
    let hash, timestamp;

    const prevHash = prevBlock.hash;
    const { difficulty } = prevBlock;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(timestamp, data, nonce, prevHash, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

    return new this({
      timestamp,
      prevHash,
      data,
      hash,
      nonce,
      difficulty,
    });
  }

  //difficulty is adjusted in bitcoin as if miner take more time in mining than 10 mins then it next time it should be less to keep the avg as 10 mins.
//here instead of 10 mins we will keep 1 min
  static adjustDifficulty({ originalBlock, timestamp }) {
    const { difficulty } = originalBlock;
    if (difficulty < 1) {
      return 1;
    }
    const difference = timestamp - originalBlock.timestamp;
    if (difference > MINE_RATE) {
      return difficulty--;
    }
    return difficulty++;
  }
}
// const block1 = new Block({
//   timestamp: "18/01/23",
//   hash: "0xabc",
//   prevHash: "0x123",
//   data: "hello",
// });
// console.log(block1);

// Genesis block-> the first block in blockchain is called genesis block

// const genesisBlock = Block.genesis();
// // console.log("genesis block:",genesisBlock);

// const result1 = Block.mineBlock({ prevBlock: block1, data: "block2" });
// console.log(result1);
module.exports = Block;
