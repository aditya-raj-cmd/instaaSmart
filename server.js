import app from "./src/app.js";
import http from "http";
import config from "./src/config/config.js";
import connectToDb from "./src/db/db.js";
import initSocket from "./src/sockets/socket.io.js";

connectToDb()

const server = http.createServer(app);

const PORT = config.PORT;
initSocket(server);

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})