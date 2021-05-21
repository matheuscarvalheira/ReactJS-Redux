import React from 'react';

import Card from './Card';

import { connect } from 'react-redux';

const Soma = props => {

  const max = props.max;
  const min = props.min;
  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min)}</strong>
        </span>

      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma); // passando o estado geral para o componente Soma