const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 })

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(`Message from client: ${message}`)
        server.clients.forEach((client) => {
            client.send("This is a backchannel!")
        })
    })
    socket.send("Hello from your server!")
})