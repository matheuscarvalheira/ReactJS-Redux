import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store/index';

import { numberAdd2, login } from '../../store/actions';



const UseReducer = (props) => {


    const [state, dispatch] = useReducer(reducer, initialState);
    var n = Math.floor(Math.random() * 10 + 1); // 1 a 10


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />


            <div className="center">
                {state.user ? (<span className="text">{state.user.name}</span>)
                    : (<span className="text">Sem usuário</span>)}

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'João')}
                    >Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >+2</button>

                    <button className="btn"
                        onClick={(_) => { dispatch({ type: 'multi7' }) }}
                    >Multiplicar por 7</button>

                    <button className="btn"
                        onClick={(_) => { dispatch({ type: 'divideFor25' }) }}
                    >Dividir por 25</button>

                    <button className="btn"
                        onClick={(_) => { dispatch({ type: 'parseInt' }) }}
                    >Transformar para inteiro</button>

                    <button className="btn"
                        onClick={(_) => { dispatch({ type: 'numberAddN', payload: n }) }}
                    >Adcionar número qualquer</button>


                </div>
            </div>
        </div >
    )
}

export default UseReducer
