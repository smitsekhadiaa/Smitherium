const INITIAL_DIFFICULTY=2;
const MINE_RATE=1000; //1s=1000ms
const GENESIS_DATA={
    timestamp:1,
    prevHash:'0x000',
    nonce:0,
    hash:'0x0123',
    difficulty:INITIAL_DIFFICULTY,
    data:[],
}

module.exports={GENESIS_DATA,MINE_RATE}