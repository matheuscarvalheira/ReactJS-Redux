import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Media = props => {
  const { min, max } = props;
  console.log(props);
  return (
    <Card title="Média dos números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>

      </div>
    </Card>
  )
}

function mapStateToProps(state) { //state geral da aplicação
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}


//se conectando ao store, mapeando as propriedades de store | estados
export default connect(mapStateToProps)(Media);