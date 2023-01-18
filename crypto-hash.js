const crypto = require("crypto"); // inbuilt js module for cryption

const cryptoHash=(...inputs)=>{   //...inputs as it accepts any number of parameters then
    const hash=crypto.createHash('sha256');  //use sha256 algo from crypto
    hash.update(inputs.sort().join('')); //concatinating the string
    return hash.digest('hex');
}
// result=cryptoHash("hello",'world');
// console.log(result);
module.exports=cryptoHash;