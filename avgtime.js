const Blockchain = require("./blockchain.js");
const blockchain = new Blockchain(); //making new blockchain
blockchain.addBlock({ data: "new data" });
let prevTimeStamp, nextTimestamp, nextBlock, timeDiff, averageTime;
const times = [];
// console.log(blockchain.chain[blockchain.chain.length-1]);
for (let i = 0; i < 1000; i++) {
  prevTimeStamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  //add blocks to blockchain
  blockchain.addBlock({ data: `block ${i}` });

  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  timeDiff = nextTimestamp - prevTimeStamp;

  times.push(timeDiff); //to remove avg of timediff
  averageTime = times.reduce((total, num) => total + num) / times.length; //or use loop to calc avg
  console.log(
    `Time to mine block: ${timeDiff}ms, Difficulty: ${nextBlock.difficulty}, Average Time: ${averageTime}ms`
  ); 
}
