require('marko/node-require')

const express = require('express')
const port = 5000
const template = './templates'
var markoExpress = require("marko/express")

const bodyParser = require('body-parser')

const AlunoDao = require('./dao/aluno-dao')
const dao = new AlunoDao()

const app = express()
app.use(markoExpress())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.marko(require(`${template}/alunos.marko`),
        dao.list()
    )
})

app.get('/form', (req, res) => {
    res.marko(require(`${template}/form.marko`))
})

app.get('/form/:id', (req, res) => {
    let aluno = dao.findById(req.params.id)
    res.marko(require(`${template}/form.marko`), aluno)
})

app.get('/alunos/delete/:id', (req, res) => {
    dao.delete(req.params.id)
    res.redirect('back')
})

app.post('/alunos', (req, res) => {
    if(req.body.id) {
        dao.update(req.body)
    }
    else {
        dao.save(req.body)
    }    
    res.redirect('/')
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})
