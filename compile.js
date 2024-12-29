const solc = require('solc');
const path = require('path');
const fs = require('fs');

// Read the contract file
const contractPath = path.join(__dirname, 'MyContract.sol');
const sourceCode = fs.readFileSync(contractPath, 'utf8');

// Compile the contract using solc
const input = {
    language: 'Solidity',
    sources: {
        'MyContract.sol': {
            content: sourceCode,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const compiled = JSON.parse(solc.compile(JSON.stringify(input)));

// Extract ABI and Bytecode
const abi = compiled.contracts['MyContract.sol']['MyContract'].abi;
const bytecode = compiled.contracts['MyContract.sol']['MyContract'].evm.bytecode.object;

// Save ABI and Bytecode to files
fs.writeFileSync('MyContractAbi.json', JSON.stringify(abi, null, 2));
fs.writeFileSync('MyContractBytecode.bin', bytecode);

console.log('Contract compiled successfully.');


