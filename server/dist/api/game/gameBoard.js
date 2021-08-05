"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameBoard = void 0;
function getGameBoard(gameID) {
    const gameBoard = [
        [
            'O', 'X', ''
        ],
        [
            '', 'o', 'o'
        ],
        [
            '', '', 'x'
        ]
    ];
    return {
        gameID,
        gameBoard
    };
}
exports.getGameBoard = getGameBoard;
//# sourceMappingURL=gameBoard.js.map