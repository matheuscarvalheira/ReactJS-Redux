import React from 'react';

export const data = { //exportando constante
  number: 123,
  text: 'Context API...',

}

const DataContext = React.createContext(null); // criando o contexto

export default DataContext; // exportando o contexto criado.