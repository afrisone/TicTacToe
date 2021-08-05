const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
    console.log("Connected to web socket")
})

export function getLeaderboard() {
    return sendToServer("getLeaderboard", null)
}

export function getUsers() {
    return sendToServer("getUsers", null)
}

export function getGameBoard() {
    return sendToServer("getGameBoard", null)
}

socket.addEventListener('message', (event) => {
    console.log(`Message from server: ${event.data}`)
})

function sendToServer(type: any, data: any) {
    socket.send(JSON.stringify({
        type,
        ...data
    }))
}
