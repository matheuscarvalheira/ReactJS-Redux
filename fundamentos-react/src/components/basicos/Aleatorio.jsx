//Desafio Udemy
import React from "react";

export default ({ max, min }) => {
  const num = Math.floor(Math.random() * max + 1);
  return (
    <div>
      <h2>Números aleatórios</h2>
      <p>
        Número máximo: <strong> {max}</strong>
        <br />
        Número mínimo: <strong>{min} </strong>
        <br />
        Número escolhido: {num}
      </p>
    </div>
  );
};
