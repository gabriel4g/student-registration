require('marko/node-require')

const express = require('express')

const port = 5000
var markoExpress = require("marko/express")

const app = express()
app.use(markoExpress())

app.get('/', (req, res) => {
    res.marko(require('./templates/alunos.marko'))
})

app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'))
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})