import { fastify } from "fastify";

import { DadosMemoria } from "./dados-memoria.js"; 
import { DatabasePostgres } from "./db-postgres.js";


const server = fastify()

//fingindo que é um banco de dados
// const dados = new DadosMemoria()

//banco de dados postgres real
const dados = new DatabasePostgres()

//rotas
server.post('/livros', async ( request, response )=>{
    //criando um body e fragmentando ele
    const { nome, autor, preco } = request.body

    await dados.criar({
        nome: nome,
        autor: autor,
        preco: preco
    })

    // console.log(dados.lerTodos())

    return response.status(201).send() //201 é o status de criado
})

server.get('/livros', async ( request, response )=>{

    const busca = request.query.busca;

    const livros = await dados.lerTodos(busca)



    return response.send(livros)
})

server.put('/livros/:id', async (request, response)=>{
    const livroId = request.params.id
    const { nome, autor, preco } = request.body;

    await dados.atualizar(livroId, 
        {
        nome: nome,
        autor: autor,
        preco: preco
        }
    )
    
    return response.status(204).send() //204 teve sucesso mas não tem conteúdo
})

server.delete('/livros/:id', async ( request, response )=>{
    const livroId = request.params.id

    await dados.deletar(livroId)

    return response.status(204).send()
})






server.listen({
    port: process.env.PORT ?? 8888,
})