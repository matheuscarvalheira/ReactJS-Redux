import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes';
//Action Creator
export function alterarNumeroMinimo(novoNumero){
  //retornar uma action
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero
  }
}

//outra action creator para o numero maximo 
export function alterarNumeroMaximo(novoNumero){
  //retornar uma action
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero
  }
}