export function getGameBoard(gameID) {
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
    ]
    return {
        gameID,
        gameBoard
    }
}
