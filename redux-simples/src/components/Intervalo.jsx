import './Intervalo.css';
import React from 'react';

import { connect } from 'react-redux';

import Card from './Card';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosActions';


const Intervalo = props => {
  const { max, min } = props;

  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={(e) => { props.alterarMinimo(+e.target.value) }}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} onChange={(e) => { props.alterarMaximo(+e.target.value) }}
          />
        </span>
      </div>
    </Card>
  )
}


function mapStateToProps(state) {
  //state = todos os dados do estado
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}


function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      //action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action); // passa a action para todos os reducers
    },

    alterarMaximo(novoNumero) {
      //action creator -> retorna action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action); //chama todos os reducers
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);