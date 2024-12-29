# BlockChainAITU
by SE-2320 (Ernar Khanapin, Dmitriy Kairgeldin, Adilzhan Kurmet)

BlockChainAITU is a blockchain-based smart contract written in Solidity, deployed using Ganache and Remix. It supports receiving and withdrawing Ether tokens, checking the contract balance, and interacting with a local blockchain network. The following documentation provides a comprehensive guide to the setup, development, and deployment of this smart contract.

---

## Table of Contents
- [Features]
- [Setup Instructions]
- [Usage]
- [Project Structure]
- [Demo]
- [References]
- [License]

---

## Features

- Receive Ether: Allows the contract to accept Ether tokens from users.
- Withdraw Funds: Enables the owner to withdraw all Ether from the contract.
- Balance Check: Provides the functionality to view the contract's balance.
- Local Blockchain Deployment: Configurable with Ganache and Remix for testing.
- MetaMask Integration: Supports interaction via MetaMask.

---

## Setup Instructions

1. Clone the Repository:

   git clone https://github.com/bwjson/BlockChainAITU.git

   cd BlockChainAITU


2. Install Dependencies:

   npm install


3. Start Ganache:

   ganache-cli -p 7545


4. Compile and Deploy the Contract:

   node compile.js
   node deploy.js


5. Configure MetaMask:
   - Network Name: Ganache Local Network
   - RPC URL: http://127.0.0.1:7545
   - Chain ID: 1337
   - Currency Symbol: ETH

---

## Usage

### Interact with the Smart Contract

1. Access the Contract:

   const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);


2. Get Balance:

   const balance = await contract.methods.getBalance().call();
   console.log(Contract Balance: ${balance} ETH);


3. Withdraw Funds (Owner Only):

   await contract.methods.withdraw().send({ from: OWNER_ADDRESS });


---

## Project Structure

├── contracts <br>
│   └── Lock.sol <br>
├── ignition/modules <br>
│   └── Lock.js <br>
├── test <br>
│   └── Lock.js <br>
├── usage <br>
│   ├── image.png <br>
│   ├── image1.png <br>
│   ├── image2.png <br>
│   ├── image3.png <br>
│   ├── image4.png <br>
│   └── image5.png <br>
├── .gitignore <br>
├── LICENSE <br>
├── MyContract.sol <br>
├── MyContractAbi.json <br>
├── MyContractBytecode.bin <br>
├── README.md <br>
├── compile.js <br>
├── deploy.js <br>
├── index.js <br>
├── initialGas.js <br>
├── interact.js <br>
└── package.json <br>

---

## Demo

1. Screenshot 1: network configuration form for use with blockchain networks
     "usage/image.png"

2. Screenshot 2: Compiler panel in Remix IDE
     "usage/image1.png"

3. Screenshot 3: "Deploy & Run Transactions" panel in Remix IDE
     "usage/image2.png"

4. Screenshot 4: interface for interacting with a deployed Ethereum smart contract
     "usage/image3.png"

5. Screenshot 5: details of Ethereum transactions and contract calls
     "usage/image4.png"

6. Screenshot 6: the confirmation of a transaction in MetaMask
     "usage/image5.png"

---

## References

- [Web3.js Documentation](https://web3js.readthedocs.io/en/v1.10.0/getting-started.html)
- [Ganache CLI](https://trufflesuite.com/ganache/)
- [Remix IDE](https://remix.ethereum.org/)
- [MetaMask](https://metamask.io/)

---

## License

This project is licensed under the MIT License. See the (BlockChainAITU/LICENSE) file for details.
