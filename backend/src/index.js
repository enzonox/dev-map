const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');//Importando lib para uso do Frontend em React
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://enzoleca:enzoleca@cluster0-xomkl.mongodb.net/devmap?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));//Integrando com o frontend
app.use(express.json());
app.use(routes);

server.listen(3333);