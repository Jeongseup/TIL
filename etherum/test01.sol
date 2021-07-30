pragma solidity 0.8.6;

contract Test1 {
    
    uint nonce;
    
    constructor(uint _nonce) payable {
        nonce = _nonce;   
    }
    
    function getNonce() public view returns (uint) {
        return nonce;
    }
    
    function withdraw(uint _nonce) public {
        require(nonce == _nonce);
        payable(msg.sender).transfer(address(this).balance);
    }
    
}