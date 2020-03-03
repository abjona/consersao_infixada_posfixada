import React, { useState } from 'react';

import './App.css';

function App() {

  var [infixada, setInfixada] = useState('');
  var [result, setResult] = useState('');

  const Compara = (a, b) => {

    return a <= b;
  }
  function calc() {

    const pilha = [];

    for (var i = 0; i < infixada.length; i++) {
      if (pilha.length == 0) {
       
        
        if (prioridade(infixada[i]) != 0) {
          pilha.unshift(infixada[i])
          // console.log(infixada[i]);

        } else if (prioridade(infixada[i]) == 0) {
          result += infixada[i];
        }
      }
      else if (prioridade(infixada[i]) == 0) {
        result += infixada[i];
      
      }
      else if (prioridade(infixada[i]) < prioridade(pilha[0])) {
        
        result += pilha.shift();
       
      }
      else if (prioridade(infixada[i]) >= prioridade(pilha[0])) {
       
        if (pilha.length > 0) {
          if(prioridade(infixada[i]) == prioridade(pilha[0])){
            console.log(pilha[0]);
            
            result += pilha.shift();
            pilha.unshift(infixada[i]);
          }else{
            pilha.unshift(infixada[i]);
          }
        } else{
  

        }

      }


    }
    pilha.map(ele => {
      result += ele;
    })

    setResult(result);
  }
  function prioridade(char) {
    if (char == '(') return 3;

    if (char == '*' || char == '/') return 2;

    if (char == '+' || char == '-') return 1;

    else return 0;

  }

  return (
    <div className="container">
      <div className="box">
        <h4 className="title">CONVERSÃO</h4>
        <h5 className="label">
          Digite a expressão :
        </h5>
        <input className="inp" placeholder="infixada" value={infixada} onChange={event => setInfixada(event.target.value)}></input>

       <div className="btns">
       <button className="btn" onClick={calc}> CALCULAR </button>
        <button className="btn2" onClick={()=> setResult('')}> LIMPAR </button>
       </div>

        <div>
          <input disabled={true} className="result" value={result}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
