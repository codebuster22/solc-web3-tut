// truffle compile

const solc = require('solc');
const fs = require('fs');
const path = './artifacts/Storage.json';

const Storage = fs.readFileSync('./contracts/Storage.sol').toString();

const input = {
    language: 'Solidity',
    sources: {
      'Storage.sol': {
        content: Storage
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  fs.writeFileSync(
    path,
    JSON.stringify({
      abi: output.contracts["Storage.sol"].Storage.abi,
      bytecode: output.contracts["Storage.sol"].Storage.evm.bytecode.object
    })
  );

  process.exit();
