const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
    console.log("Connected to web socket")
})

function getLeaderboard() {
    return sendToServer("getLeaderboard")
}

function getUsers() {
    return sendToServer("getUsers")
}

function getGameBoard() {
    return sendToServer("getGameBoard")
}

socket.addEventListener('message', (event) => {
    console.log(`Message from server: ${event.data}`)
})

function sendToServer(type, data) {
    socket.send(JSON.stringify({
        type,
        ...data
    }))
}
