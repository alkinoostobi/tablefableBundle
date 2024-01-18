const express = require("express");
const http = require("http");
const httpProxy = require("http-proxy");
const {exec} = require("child_process");
const socketIo = require("socket.io");
const cors = require("cors");
const { Socket } = require("dgram");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Specify the origin
        methods: ["GET", "POST"], // Allow these HTTP methods
        credentials: true
    },
});

const proxy = httpProxy.createProxyServer();

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
    socket.on("combatInitiatives", (initiatives) => {
        console.log(initiatives);
        io.emit("initiatives", initiatives);
    });
    socket.on("turnChange", (turn) => {
        io.emit("turnChange", turn);
    });
    socket.on("addToLog", (logs) => {
        io.emit("addToLog", logs);
    });
    socket.on("playerNames", (playerNames) => {
        io.emit("playerNames", playerNames);
    });
    socket.on("tokenslist", (tokenslist) => {
        io.emit("tokenslist", tokenslist);
    });
    socket.on("combatStart", () => {
        console.log("combatStart");
        io.emit("combatStart");
    });
    socket.on("combatEnd", () => {
        io.emit("combatEnd");
    });
    socket.on('scrollUp', () => {
        io.emit('scrollUp');
    });
    socket.on('scrollDown', () => {
        io.emit('scrollDown');
    });
    socket.on('roll', () => {
        io.emit('roll');
    });
    socket.on('loadscene', (map) => {
        io.emit('loadscene', map);
    });
    socket.on('rolldie', (num) => {
        io.emit('rolldie', num);
    });
    socket.on('loadnpc', (npcID) => {
        io.emit('loadnpc', npcID);
    });
    socket.on('exploremode', () => {
        io.emit('exploremode');
    });
    socket.on('pausegame', () => {
        io.emit('pausegame');
    });
    socket.on('combatmode', () => {
        io.emit('combatmode');
    });
    socket.on('deleteToken', (token) => {
      console.log(token);
    io.emit('deleteToken', token);
  });
});

// Start TableFable
exec("npm run dev", {cwd: "./TableFable"}, (error, stdout, stderr) => {
    if (error) {
        console.error(`TableFable failed to start: ${error.message}`);
        return;
    }
    console.log("TableFable started");
});

// Start TableFableMobile
exec("npm run dev", {cwd: "./tablefablemobile"}, (error, stdout, stderr) => {
    if (error) {
        console.error(`TableFableMobile failed to start: ${error.message}`);
        return;
    }
    console.log("TableFableMobile started");
});

// Start TableFableTV
exec("npm run dev", {cwd: "./tablefableTV"}, (error, stdout, stderr) => {
    if (error) {
        console.error(`TableFableTV failed to start: ${error.message}`);
        return;
    }
    console.log("TableFableTV started");
});
// Start TableFable
let child = exec("npm run dev", {cwd: "./TableFable"});
child.stdout.on("data", (data) => {
    console.log(`TableFable: ${data}`);
});
child.stderr.on("data", (data) => {
    console.error(`TableFable Error: ${data}`);
});

// Start TableFableMobile
child = exec("npm run dev", {cwd: "./tablefablemobile"});
child.stdout.on("data", (data) => {
    console.log(`TableFableMobile: ${data}`);
});
child.stderr.on("data", (data) => {
    console.error(`TableFableMobile Error: ${data}`);
});

// Start TableFableTV
child = exec("npm run dev", {cwd: "./tablefableTV"});
child.stdout.on("data", (data) => {
    console.log(`TableFableTV: ${data}`);
});
child.stderr.on("data", (data) => {
    console.error(`TableFableTV Error: ${data}`);
});
// Proxy requests to the appropriate applications
app.use("/tablefable", (req, res) => {
    proxy.web(req, res, {target: "localhost:3000"});
});

app.use("/tablefablemobile", (req, res) => {
    proxy.web(req, res, {target: "localhost:4000"});
});

app.use("/tablefabletv", (req, res) => {
    proxy.web(req, res, {target: "localhost:5000"});
});

// Handle errors
proxy.on("error", (err, req, res) => {
    console.error("Proxy error:", err);
    res.status(500).send("Proxy error");
});

// Start the server
server.listen(8080, () => {
    console.log("Server started on port 8080");
});