import { randomUUID } from "crypto"

export class DadosMemoria {

    // //# pq é privado
    // #livros = []

    //set e map são métodos de array
    #livros = new Map() //estrutura de dados que armazena chave e valor
    //

    criar(livro) { //poderia ter varias validações aqui
        const livroId = randomUUID() //gera um id aleatório 

        this.#livros.set(livroId, livro) 
    }
            //busca é um parâmetro opcional
    lerTodos( busca ) {
        // return [...this.#livros.values()] //retorna todos os valores do map(sem as chaves)
        //         
        //         //daria pra usar return Array.from(this.#livros.values())

        return Array.from(this.#livros.entries()).map(livroArr => {
            const id = livroArr[0]
            const dado = livroArr[1]

            return {
                id: id,
                nome: dado.nome,
                autor: dado.autor,
                preco: dado.preco
                //ou spread operator ...dado
            }
        }).filter(livro => {
            if(busca){
                return livro.nome.includes(busca)
            }
            return true
        })
    }

    atualizar(id, livro) {
        this.#livros.set(id, livro)
    }

    deletar(id) {
        this.#livros.delete(id)
    }


}