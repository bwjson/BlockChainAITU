Smart Contract Project
This project is a smart contract written in Solidity, developed using Ganache and Remix. This README provides a step-by-step guide for setting up, developing, and deploying the contract.

Step 1: Install Dependencies
First, clone the repository to your local machine:

bash
git clone https://github.com/bwjson/BlockChainAITU.git
cd smart-contract-tutorial
Then, install all dependencies:

bash
npm install
Step 2: Start Ganache
For development and testing of smart contracts, use Ganache CLI. Run the following command to start Ganache:

bash
Копировать код
ganache-cli -p 7545
This will start a local Ethereum network on port 7545, and you'll get a list of accounts with their private keys to use for testing.

Step 3: Compile and Deploy
Now that your local network is running, use the following commands to compile, deploy, and initialize the smart contracts:

Compile the contracts:
bash
node compile.js
Deploy the contracts to the local network:
bash
node deploy.js
Initialize the contract with initial values (for testing purposes):
bash
node initialGas.js

Step 4: Deploy via Remix with Paris Configuration
Once your smart contracts are ready and deploying locally through Ganache, you can use Remix to deploy with the Paris configuration.

Go to Remix IDE.
In the Solidity Compiler section, make sure the correct compiler version is selected for your contract (e.g., 0.8.4).
In the Deploy & Run Transactions section:
Select Injected Web3 to use MetaMask.
In the Environment settings, select Paris to use the correct configuration for deployment.
Click Deploy and confirm the transaction in MetaMask.

Step 5: Create a New Network in MetaMask
To interact with the local network, you need to add a new network in MetaMask.

Open MetaMask and go to Settings.
Select Networks and click Add Network.
Enter the following details:
Network Name: For example, Ganache Local Network.
RPC URL: http://127.0.0.1:7545 (This is the address of your Ganache server).
Chain ID: 1337 (This is the default Chain ID for Ganache).
Currency Symbol: ETH.
Block Explorer URL: Leave this field empty.
After adding the network, MetaMask will be connected to your local network.

Step 6: Confirm the Transaction in MetaMask
Once you click Deploy in Remix, MetaMask will prompt you to confirm the transaction. You will need to accept the transaction and confirm the deployment in MetaMask.

Step 7: Interact with the Contract
After deploying the contract to the local network, you can interact with it using its address and ABI. Here's an example code in JavaScript that shows how to interact with the contract:

javascript
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');
const contractABI = [ /* Contract ABI */ ];
const contractAddress = '<your contract address>';

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example of calling a contract method
async function getValue() {
  const value = await contract.methods.getValue().call();
  console.log(value);
}

getValue();
Replace <your contract address> with the actual address of your deployed contract.

Step 8: Monitor the Network
For transaction monitoring and contract interaction, use tools like Etherscan if your contract is deployed on the main Ethereum network.

Notes:
This project uses Paris in Remix for deployment, which may require some configuration changes and environment adjustments.
Make sure you have enough funds (ETH) in your local Ganache account for testing and deployment.
MetaMask should be connected to the local network for transaction confirmation.
