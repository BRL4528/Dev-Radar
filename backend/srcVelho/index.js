const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kronaMesin:kronaMesin@cluster0-dhw1i.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());

//metodos HTTP: get, post, put delete

//Tipos de parâmetros

// Querry Params: request.query (Filtros, Ordenação, Paginação, ...)
// Route Params: request.params (identificar recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.use(routes);

app.listen(3333);