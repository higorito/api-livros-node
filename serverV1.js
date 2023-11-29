// nativo do node
// import { createServer } from 'node:http'

// const server = createServer(( request, response )=>{
    
//     response.write("Deu certo")

//     return response.end()
// })

// server.listen(8888)

//Mini framework

import { fastify } from "fastify";

const server = fastify()

server.get("/", () => {
    return "Deu certo com o fastify"
})

server.get("/opa", () => {
    return "rota opa"
})

server.listen({
    port: 8888,
    
})