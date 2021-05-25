import {createStore, combineReducers} from 'redux';

import numerosReducer from '../store/reducers/numerosReducer';


const reducers = combineReducers({
  numeros: numerosReducer,
})

function storeConfig(){
  //criar meu estado global
  return createStore(reducers)
}

export default storeConfig;