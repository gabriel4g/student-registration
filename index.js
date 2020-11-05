require('marko/node-require')

// configuração do express e marko
const express = require('express')
const port = 5000
const template = './templates'
var markoExpress = require("marko/express")
const app = express()
app.use(markoExpress())

const bodyParser = require('body-parser')

const AlunoDao = require('./dao/aluno-dao')
const dao = new AlunoDao()



// configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// configuração do connect-flash
const session = require('express-session');
const flash = require('connect-flash')
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
}));
app.use(flash()) 


// rota principal, listagem dos alunos
app.get('/', (req, res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        results: []
    }

    dao.list().then((results) => {
        response.results = results;
        res.marko(require(`${template}/alunos.marko`), response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require(`${template}/alunos.marko`), response, err)
    })
    
})

// rota do formúlario, criação dos dados
app.get('/form', (req, res) => {
    res.marko(require(`${template}/form.marko`))
})

// rota do formúlario com id do usuário, edição dos dados
app.get('/form/:id', (req, res) => {
    dao.findById(req.params.id).then((result) => {
        if(result.length > 0) {
            aluno = result[0]
            res.marko(require(`${template}/form.marko`), aluno)
        } else {
            req.flash('error', `Aluno com o id ${req.params.id}, não foi encontrado!`)
            res.redirect('/')
        }
    }).catch((err) => {
        console.log(err)
        req.flash('error', `Erro ao buscar o aluno como id ${req.params.id}!`)
            res.redirect('/')
    })
    
})

// rota para deletar os alunos no banco
app.get('/alunos/delete/:id', (req, res) => {
    dao.delete(req.params.id).then((result) => {
        req.flash('success', 'Usuário removido!')
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
        req.flash('error', 'Erro ao deletar usuário!')
        res.redirect('/')
    })
})

// rota para a inserção dos dados no banco
app.post('/alunos', (req, res) => {
    if(req.body.id) {
        dao.update(req.body).then((result) => {
            req.flash('success', 'Dados do aluno atualizados com sucesso!')
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            req.flash('error', `Ocorreu um erro ao atualizar os dados de ${req.body.nome}!`)
            res.redirect('/')
        })
    }
    else {
        dao.save(req.body).then((result) => {
            req.flash('success', 'Aluno salvo com sucesso!')
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
            req.flash('error', 'Erro ao salvar os dados')
            res.redirect('/')
        })
    }

    
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})
