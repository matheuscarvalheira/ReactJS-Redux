import React, { Component } from "react";
import './Contador.css'
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';
//formado de classe em React
//criação de um componente num formato de classe
class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };



  //incrementar
  inc = () => {
    //oriundo do component:
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  //decremento

  dec = () => {
    //oriundo do component:
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,

    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

//exportando no final
export default Contador;
