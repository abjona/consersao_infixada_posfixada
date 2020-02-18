import React, { useState } from 'react';

import './App.css';

function App() {

  var [infixada, setInfixada] = useState('');
  var [result, setResult] = useState('');
  function calc(){
    
    const pilha = [];
    var tam = infixada.length;
    var result2 = '';
    for(var i = 0; i< infixada.length; i++){
      if(prioridade(infixada[i]) == 0){      
        result2+= infixada[i];
      }
      if(prioridade(infixada[i]) >= prioridade(infixada[i+2]) && i+2 < tam ) {  
          result2+= infixada[i+1];
          result2+= infixada[i];
      }else if(prioridade(infixada[i]) <= prioridade(infixada[i+2]) && i+2 < tam){  
        result2+= infixada[i+1];
        result2+= infixada[i];
      }
      
    }

    // const aux = pilha.length;
    
   
    // for(var k=0;k<aux;k++){
    //   result2 += pilha[k];
    // }

    setResult(result2);
  }
  function prioridade(char){
    if(char == '(') return 1;

    if(char == '*' || char == '/') return 2;

    if(char == '+' || char == '-') return 3;

    else return 0; 

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

        <div className="result"> 
         <input value={ result }></input>
        </div>
      </div>
    </div>
  );
}

export default App;
