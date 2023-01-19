const Block = require("./block.js");
const cryptoHash = require("./crypto-hash.js");
class Blockchain {
  constructor() {
    //chain is a array of objects which are blocks foming blockchain
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  replaceChain(chain) {
    // longest chain rule
    if (chain <= this.chain.length) {
      console.error("the incoming chain is not longer");
      return;
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("the incoming chain is not valid");
      return;
    }
    this.chain = chain;
  }

  static isValidChain(chain) {
    //json stringify as cannot compare 2 instances of objects
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      //check valid genesis block
      return false;
    }
    for (let i = 1; i < chain.length; i++) {
      //check other blocks
      const { timestamp, prevHash, hash, data, nonce, difficulty } = chain[i];
      const realLastHash = chain[i - 1].hash;
      if (prevHash !== realLastHash) {
        return false;
      }
      const validateHash = cryptoHash(
        timestamp,
        data,
        nonce,
        prevHash,
        difficulty
      );
      if (hash !== validateHash) {
        return false;
      }
    }
    return true;
  }
}
const blockchain = new Blockchain();
blockchain.addBlock({ data: "block 1" });
console.log(blockchain);
const result = Blockchain.isValidChain(blockchain.chain);
console.log(result);
// console.log(blockchain.chain);
module.exports = Blockchain;
