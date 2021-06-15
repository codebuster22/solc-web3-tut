// truffle deploy
require('dotenv').config({path: './.env'});
const {abi, bytecode} = require('../artifacts/Storage.json');
const provider = process.env.PROVIDER;
const Web3 = require('web3');

const web3 = new Web3(provider);

const Storage = new web3.eth.Contract(abi);

const main = async () => {
    const storage = await Storage.deploy({
        data: `0x${bytecode}`,
        arguments: []
    }).send(
        {
            from: '0x563838364a14A307F4d943e977AB5325E5311888',
            gasPrice: 2000000000,
            gas: 3000000
        }
    );

    return storage;
};

module.exports = main;
