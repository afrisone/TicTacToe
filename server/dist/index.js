"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const { getGameBoard, getLeaderboard, getUsers } = require('./api');
const server = new ws_1.default.Server({
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
});
server.on('connection', (socket) => {
    socket.on('message', (message) => {
        handleMessage(message, socket);
    });
});
function handleMessage(message, socket) {
    let msgJson = JSON.parse(message);
    let result;
    switch (msgJson.type) {
        case "getLeaderboard": {
            result = getLeaderboard();
            break;
        }
        case "getUsers": {
            result = getUsers();
            break;
        }
        case "getGameBoard": {
            result = getGameBoard('');
            break;
        }
        default: {
        }
    }
    result && socket.send(JSON.stringify(result));
}
//# sourceMappingURL=index.js.map