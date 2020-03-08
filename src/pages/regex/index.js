/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import './styles.css';

export default function regex() {
    const [frase, setFrase] = useState("");
    const [result, setResult] = useState("");

    function verify() {
        var OK = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(frase)
        
        if(!OK){
            setResult("O CPF "+ frase + " não está no formato correto!")
        }else{
            setResult("O CPF "+ frase + " está no formato correto!")
        }
        console.log(OK);


    }

    return (
        <div className="container">
            <div className="col">
                <div className="desc">
                    <h1>REGEX</h1>
                    <h3>CPF</h3>
                </div>
                <p className="names">Nomes: Jonathan , Eduarda</p>
            </div>
            <div className="col">
                <h1 style={{ marginBottom: 25 }}>CONTEUDO</h1>
                <div className="form">
                    <input className="inp" value={frase} onChange={event => setFrase(event.target.value)} placeholder="Insira o CPF..."></input>
                    <button className="btn" onClick={verify}> CALCULAR </button>
                    <button className="btn2" onClick={() => {
                        setFrase("");
                        setResult("");
                    }}> LIMPAR </button>
                    <input className="result" value={'R: '+result} disabled={true}></input>
                </div>
            </div>
        </div>
    );
}
