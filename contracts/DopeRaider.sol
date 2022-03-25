// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

contract DopeRaider {
    address public player1;
    address public player2;

    function playDopeRaiders() external payable {
        require(msg.value == 0.1 ether, "Need 0.1eth to play game");
        if (address(this).balance == 0.1 ether) {
            player1 = msg.sender;
        } else {
            player2 = msg.sender;
            _chooseWinnerAndSendFunds();
        }
    }

    function _chooseWinnerAndSendFunds() internal {
        address winner;
        if (_getRandomNumberZeroOrOne() == 0) {
            winner = player1;
        } else {
            winner = player2;
        }
        (bool sent, bytes memory data) = winner.call{ value: 0.2 ether }("21000");
        require(sent, "Failed to send Ether");
    }

    function _getRandomNumberZeroOrOne() internal view returns (uint256) {
        return block.number % 2;
    }
}
