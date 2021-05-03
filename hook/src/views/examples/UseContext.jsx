import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';


import DataContext from '../..//data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {

    const { state, setState } = useContext(DataContext); //recebendo o contexto na qual está inserido;

    function addNumber(delta) {
        setState({
            //pegar todos os atributos de data (state) só alterando o number
            ...state,
            number: state.number + delta

        })
    }

    const { number, text, setNumber, setText } = useContext(AppContext);

    useEffect(() => {
        if (number >= 1245) {
            setText('Se acalme!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />


            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={(_) => { addNumber(-1) }}
                    >-1</button>
                    <button className="btn"
                        onClick={(_) => { addNumber(+1) }}
                    >+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={(_) => { setNumber(number - 1) }}
                    >-1</button>

                    <button className="btn"
                        onClick={(_) => { setNumber(number + 1) }}
                    >+1</button>
                </div>

            </div>
            <div>

            </div>


        </div>
    )
}

export default UseContext;
