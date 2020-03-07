import React, { useState } from 'react';

import './App.css';

function App() {

  var [infixada, setInfixada] = useState('');
  var [result, setResult] = useState('');

  function calc() {
    var opStack = []
    var postfixList = []
    var verStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var verNum = "0123456789";
    var resp = '';
    var prec = {}

    prec["*"] = 3
    prec["/"] = 3
    prec["+"] = 2
    prec["-"] = 2
    prec["("] = 1

    for (var i = 0; i < infixada.length; i++) {

      if (verNum.includes(infixada[i]) || verStr.includes(infixada[i])) {
        postfixList.push(infixada[i]);
      }
      else if (infixada[i] === '(') {
        opStack.push(infixada[i]);
      }
      else if (infixada[i] === ')') {
        var topToken = opStack.pop();
        while (topToken !== '(') {
          postfixList.push(topToken);
          topToken = opStack.pop();
        }
      }
      else {
        while (opStack.length > 0 && (prec[opStack[opStack.length - 1]] >= prec[infixada[i]]))
          postfixList.push(opStack.pop())
        opStack.push(infixada[i])
      }
    }

    while (opStack.length > 0) {
      postfixList.push(opStack.pop())
    }

    postfixList.forEach(element => {
      resp += element;
    });

    setResult(resp);
  };

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
          <button className="btn2" onClick={() => {
            setResult('');
            setInfixada('')
          }}> LIMPAR </button>
        </div>

        <div>
          <input disabled={true} className="result" value={result}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
