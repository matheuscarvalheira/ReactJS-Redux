import React from "react";

import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo="#13 - Megasena" color="#05595C">
        <Mega qtde={8} />
      </Card>

      <Card titulo="#12 - Contador" color="#FFD800">
        <Contador numeroInicial={10} ></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#1E1275">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#6B0027">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#042121">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#1ACDC8">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        {/* 
        <UsuarioInfo usuario={{}} />
        <UsuarioInfo />
        */}
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#3897DA">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#422E53 ">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com filho" color="#2E4053 ">
        <Familia sobrenome="Silva" >
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color=" #005b96">
        <Aleatorio max={60} min={1} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#851e3e">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parâmetro" color=" #0e9aa7">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#009688">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
