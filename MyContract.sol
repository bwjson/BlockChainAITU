// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    address public owner;

    // Constructor to initialize the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to get the contract's balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Function to allow receiving Ether
    receive() external payable {}

    // Function to withdraw all funds, only accessible to the owner
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }
}
