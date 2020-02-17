import React, { useState } from 'react';

import './App.css';

function App() {

  const [infixada, setInfixada] = useState('');

  function calc(){
    const pilha = [];
    infixada.forEach((element, i) => {
      pilha.push(element[i]);
    });
  }
  function prioridade(char){
    if(char == '(') return 1;
    else {
      if(char == '*' || char == '/') return 2;
      else{
        return 3;
      }
    }
  }

  return (
    <div className="container">
      <div className="box">
        <h4 className="title">CONVERSÃO</h4>
        <h5 className="label">
            Digite a expressão :
        </h5>
        <input className="inp" placeholder="infixada" value={infixada} onChange={event=> setInfixada(event.target.value)}></input>

        <button className="btn" onClick={calc}> CALCULAR </button>

        <div className="result"> </div>
      </div>
    </div>
  );
}

export default App;
