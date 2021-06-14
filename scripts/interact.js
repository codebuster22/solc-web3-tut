const deploy = require('./deploy.js');
const input = require('prompt-sync')();

const interact = async (contract) => {
    const dayInFuture = input("Enter a day in future:- ");
    const newTimestamp = Date.now() + (dayInFuture * 84600);
    console.log(newTimestamp);
    await contract.methods.setTimestamp(newTimestamp).send(
        {
            from: '0x563838364a14A307F4d943e977AB5325E5311888',
            gasPrice: 2000000000,
            gas: 3000000
        }
    );
    const timestamp = await contract.methods.getTimestamp().call();
    console.log(timestamp);
}

deploy().then(
    (storage) => {
        interact(storage);
    }
);
