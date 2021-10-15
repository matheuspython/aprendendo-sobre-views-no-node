const express = require('express');
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require("./src/controllers/contatoController")

// function meuDiddleware(req, res, next) {
//   req.session = { nome: 'Matheus', sobrenome: 'souza'}

//   console.log()
//   console.log('sou um middleware')
//   console.log()
//   next()
// }

//rotas home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/', contatoController.paginaInicial)

module.exports = route;