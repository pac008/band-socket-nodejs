const Server = require("./models/server");
require("dotenv").config();
const server = new Server();

server.execute();

// io.on("connection", (socket) => {
// //   socket.emit("mensaje-bienvenida", {
// //     msg: "Bienvenido al server",
// //     fecha: new Date()
// // });

// socket.on("msg-to-server", (data) => {
//     console.log(data)
//     // socket.emit('msg-from-server', {msg: 'hola desde el server', name: 'serer'});
//     io.emit('msg-from-server', {msg: 'hola desde el server', name: 'serer'});

// });
// });
