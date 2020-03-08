/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './styles.css';

export default function inftofix() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [infixada, setInfixada] = useState('');
    const [result, setResult] = useState('');

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
            <div className="col">
                <div className="desc">
                    <h1>INFIXADA - POSFIXA</h1>
                    <h3>ex:</h3>
                </div>
                <p className="names">Nomes: Jonathan , Eduarda</p>
            </div>
            <div className="col">
                <h1 style={{ marginBottom: 25 }}>CONTEUDO</h1>
                <div className="form">
                    <input className="inp" value={infixada} onChange={event => setInfixada(event.target.value)} placeholder="Insira a expressão..."></input>
                   
                        <button className="btn" onClick={calc}> CALCULAR </button>
                        <button className="btn2" onClick={() => {
                            setInfixada("");
                            setResult("")
                        }}> LIMPAR </button>
                    
                    <input className="result" value={'R: '+result} disabled={true}></input>
                   
                </div>
            </div>
        </div>


    );
}
