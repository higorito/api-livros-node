import {sql} from './db.js';

//usa uma ideia de template strings

// sql`DROP TABLE IF EXISTS livros;`.then( ()=> { console.log('tabela apagada') } )


sql`
    CREATE TABLE livros (
        id TEXT PRIMARY KEY,
        nome TEXT,
        autor TEXT,
        preco NUMERIC(5,2)
    );
`.then( ()=>{
    console.log('tabela criada com sucesso')
})