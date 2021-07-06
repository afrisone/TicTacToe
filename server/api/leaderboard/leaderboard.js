function getLeaderboard() {
    return {
        leaderboard: [
            {
                userName: 'user1',
                points: 500
            },
            {
                userName: 'user3',
                points: 400
            },
            {
                userName: 'user4',
                points: 300
            },
            {
                userName: 'user2',
                points: 200
            },
            {
                userName: 'user5',
                points: 100
            }
        ]
    }
}

module.exports = {
    getLeaderboard
}