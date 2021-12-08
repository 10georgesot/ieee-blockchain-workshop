const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0,10)}
        Hash     : ${this.hash.substring(0,10)}
        Data     : ${this.data}`;
    }

    static genesis(){
        //Creates the firs block of the blockchain which
        //has empty values
        // ayto einai ena psema
        return new this("Genesis time", "-----", "f1r57-h45h", []);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        // o fivos gamietai
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp,lastHash,data);
        o_fivos_ton_troei = True;
        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
    
    static blockHash(block) {
        const { timestamp, lastHash, data } = block;
      return Block.hash(timestamp, lastHash, data);
    }
}

module.exports = Block;
