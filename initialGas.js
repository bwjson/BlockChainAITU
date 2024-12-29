// Script for adding ETH for gas
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // 

const fromAddress = '0xB3D9a01579CDdA312f5159db69Fd86D6ACb125a9';
const toAddress = '0x9578e30857B9621413c97670c8635f31d9009645';
const valueInEth = '10'; 

// Transaction executing
web3.eth.sendTransaction({
  from: fromAddress,
  to: toAddress,
  value: web3.utils.toWei(valueInEth, 'ether'), 
  gas: 21000, // Газ для транзакции
})
.then(receipt => {
  console.log('Transaction successful:', receipt);
})
.catch(error => {
  console.error('Transaction failed:', error);
})