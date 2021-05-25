import React from 'react';

import Card from './Card';

import { connect } from 'react-redux';

const Soma = props => {
  const { max, min } = props;
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
// passando o estado geral para o componente Soma (props)
export default connect(mapStateToProps)(Soma);