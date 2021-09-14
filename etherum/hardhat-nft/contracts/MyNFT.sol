//Contract based on [https://docs.openzeppelin.com/contracts/4.x/erc721]
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // @first : 스마트 컨트랙트 이름
    // @seconde : 심볼명
    constructor() ERC721("MyNFT", "NFT") {}

    // @recipient : 민팅된 NFT 받는 주소
    // @tokenURI : NFT 이미지 저장주소
    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {

        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
