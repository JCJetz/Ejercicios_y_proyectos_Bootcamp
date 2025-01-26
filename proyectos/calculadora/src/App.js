
import React, { useState } from 'react';
import './index.css';

function App() {
  const [operandoa, setOperandoa] = useState("");
  const [operandob, setOperandob] = useState("");
  const [operacion, setOperacion] = useState("");
  const [resultado, setResultado] = useState("");

  const handleClickNumero = (numero) => {
    if (numero === ".") {
      if (operacion === "" && !operandoa.includes(".")) {
        setOperandoa(operandoa + numero);
      } else if (!operandob.includes(".")) {
        setOperandob(operandob + numero);
      }
    } else {
      if (operacion === "") {
        setOperandoa(operandoa + numero);
      } else {
        setOperandob(operandob + numero);
      }
    }
  };

  const handleClickOperacion = (op) => {
    setOperacion(op);
  };

  const handleClickIgual = () => {
    let res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;

      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;

      case "/":
        if (operandob === "0") {
          alert("No se puede dividir por cero!");
          return;
        } else {
          res = parseFloat(operandoa) / parseFloat(operandob);
        }
        break;
    }
    setResultado(res.toString());
    setOperandoa("");
    setOperandob("");
    setOperacion("");
  };

  const handleClickReset = () => {
    setOperandoa("");
    setOperandob("");
    setOperacion("");
    setResultado("");
  };

  return (
    <div className="calculator">
      <div className="display">{resultado !== "" ? resultado : operandoa + operacion + operandob}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClickNumero("1")}>1</button>
          <button onClick={() => handleClickNumero("2")}>2</button>
          <button onClick={() => handleClickNumero("3")}>3</button>
          <button onClick={() => handleClickOperacion("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClickNumero("4")}>4</button>
          <button onClick={() => handleClickNumero("5")}>5</button>
          <button onClick={() => handleClickNumero("6")}>6</button>
          <button onClick={() => handleClickOperacion("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClickNumero("7")}>7</button>
          <button onClick={() => handleClickNumero("8")}>8</button>
          <button onClick={() => handleClickNumero("9")}>9</button>
          <button onClick={() => handleClickOperacion("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClickNumero("0")}>0</button>
          <button onClick={() => handleClickNumero(".")}>.</button>
          <button onClick={() => handleClickReset()}>AC</button>
          <button onClick={() => handleClickIgual()}>=</button>
          <button onClick={() => handleClickOperacion("/")}>/</button>
        </div>
      </div>
      <span id="creditos">@Jetz</span>
    </div>
  );
}

export default App;