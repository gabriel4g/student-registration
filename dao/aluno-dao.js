class AlunoDao {
    constructor() {
        this._alunos = [
            {id: 1, nome: 'Gabriel', email: 'email@email.com', curso: 'ipi'},
            {id: 2, nome: 'Pedro', email: 'email@email.com', curso: 'qualidade'},
            {id: 3, nome: 'Lucas', email: 'email@email.com', curso: 'ads'}
        ]
    }

    list() {
        return this._alunos;
    }

    save(aluno) {
        aluno.id = this._alunos.length + 1
        this._alunos.push(aluno)
    }

    update(aluno) {
        this.delete(aluno.id)
        this._alunos.push(aluno)
    }

    findById(id) {
        for(let aluno of this._alunos) {
            if(aluno.id == id)
                return aluno;
        }
        return null
    }

    delete(id) {
        this._alunos = this._alunos.filter(function(aluno) {
            return aluno.id != id
        })
    }
}

module.exports = AlunoDao
