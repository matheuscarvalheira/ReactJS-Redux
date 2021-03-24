import React from 'react';

//componente funcional
export default props => {
  return (
    <div>{props.nome} <strong>{props.sobrenome}</strong></div>
  );
}