
pragma solidity 0.8.6;

contract Test2 {
    
    address owner;
    
    constructor() payable {
      owner = msg.sender;   
    }
    
    function changeOwner() public {
        owner = msg.sender;
    }
    
    function getCurrentOwner() public view returns (address) {
        return owner;
    }
    
    function withdraw() public {
        payable(owner).transfer(0.001 ether);
    }
    
}