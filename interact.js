const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');

// Connect to local blockchain
const web3 = new Web3('http://127.0.0.1:7545/');

// Load ABI and contract address
const abi = require('./MyContractAbi.json');
const address = fs.readFileSync(path.join(__dirname, 'MyContractAddress.txt'), 'utf8');

// Create contract instance
const contract = new web3.eth.Contract(abi, address);

const interact = async () => {
    const accounts = await web3.eth.getAccounts(); // Get available accounts
    const user = accounts[0];

    console.log('Current contract balance:', await web3.eth.getBalance(address));

    console.log('Sending Ether to the contract...');
    await web3.eth.sendTransaction({ from: user, to: address, value: web3.utils.toWei('1', 'ether'), gas: 3000000 });

    console.log('New contract balance:', await contract.methods.getBalance().call());

    console.log('Withdrawing funds...');
    await contract.methods.withdraw().send({ from: user });

    console.log('Balance after withdrawal:', await contract.methods.getBalance().call());
};

interact().catch(console.error);
