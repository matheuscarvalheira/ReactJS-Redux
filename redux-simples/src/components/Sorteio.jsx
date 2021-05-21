import React from 'react';

import Card from './Card';
import { connect } from 'react-redux';

const Sorteio = props => {

  const max = props.max;
  const min = props.min;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <Card title="Sorteio de um  número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio); // estado geral <-> componente