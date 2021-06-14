pragma solidity ^0.8.0;

contract Storage{

    uint256 timestamp;

    event StorageUpdated(address sender, uint256 newTimestamp);

    function setTimestamp(uint256 _newTimestamp) public {
        timestamp = _newTimestamp;
        emit StorageUpdated(msg.sender, timestamp);
    }

    function getTimestamp() public view returns(uint256 timestamp_){
        timestamp_ = timestamp;
    }

}