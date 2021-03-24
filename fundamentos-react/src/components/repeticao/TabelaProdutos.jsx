import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css';

export default (props) => {
  //percorre o array
  //para cada produto ele vai criar uma linha na tabela com todas as características

  //usando const:
  /*const produtosTR = produtos.map((produto) => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  }); */

  //usando função:

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco.toFixed(2)}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
