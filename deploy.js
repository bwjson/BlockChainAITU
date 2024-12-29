const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Connect to local blockchain (Ganache)
const web3 = new Web3('http://127.0.0.1:7545/');

// Read ABI and Bytecode
const abi = require('./MyContractAbi.json');
const bytecode = fs.readFileSync(path.join(__dirname, 'MyContractBytecode.bin'), 'utf8');

// Deploy the contract
const deploy = async () => {
    const accounts = await web3.eth.getAccounts(); // Get accounts from Ganache
    const deployer = accounts[0];

    console.log('Deploying contract from account:', deployer);

    const contract = new web3.eth.Contract(abi);
    const deployTx = contract.deploy({ data: '0x' + bytecode });

    // Estimate gas for deployment
    const gas = await deployTx.estimateGas({ from: deployer });

    const instance = await deployTx.send({
        from: deployer,
        gas,
        gasPrice: '10000000000', // Gas price (adjust if needed)
    });

    console.log('Contract deployed at address:', instance.options.address);

    // Save contract address
    fs.writeFileSync('MyContractAddress.txt', instance.options.address);
};

deploy().catch(console.error);
