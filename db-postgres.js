import { randomUUID } from "crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  
  async criar(livro) {
    const livroId = randomUUID();

    const {nome, autor, preco} = livro;
    
    await sql`
        INSERT INTO livros (id, nome, autor, preco) VALUES (${livroId}, ${nome}, ${autor}, ${preco});
    `;
    
  }
  
  async lerTodos(busca) {
    let livros;

    if (busca) {
        livros = await sql`SELECT * FROM livros WHERE nome ILIKE ${'%'+ busca + '%'};`; //ILIKE é case insensitive e o %% é pra buscar em qualquer lugar do nome
        }
    else {
        livros = await sql`SELECT * FROM livros;`;
        }
    return livros;

  }

  async atualizar(id, livro) {
    const {nome, autor, preco} = livro;

    await sql`
        UPDATE livros SET nome = ${nome}, autor = ${autor}, preco = ${preco} WHERE id = ${id};
    `;

  }

  async deletar(id) {
    
    await sql`
        DELETE FROM livros WHERE id = ${id};
    `;

  }
}
