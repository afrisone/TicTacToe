const WebSocket = require('ws')

const server = new WebSocket.Server({
    port: 8080,
    // verifyClient: (data, callback) => { 
    
    //     const token = data.req.headers.token
    //     if (!token) {
    //         callback(false, 401, "Unauthorized")
    //     } else {
    //         // TODO: fill in with a verified token
    //         callback(true)
    //     }
    // }
})

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(`Message from client: ${message}`)
        server.clients.forEach((client) => {
            client.send("This is a backchannel!")
        })
    })
    socket.send("Hello from your server!")
})