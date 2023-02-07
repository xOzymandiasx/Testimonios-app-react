import React, { useState } from "react";
import freecodecampLogo from "../../img/freecodecamp-logo.png";
import "../../styles/mainCalculadora.css";
import Boton from "../boton";
import ClearButton from "../ClearButton";
import Pantalla from "../Pantalla";
import { evaluate } from "mathjs"  

const MainCalculadora = () => {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const resultado = ()=> {
    input === "" ? alert("Por favor ingresa valores") : setInput(evaluate(input));
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="Logo freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
      <Pantalla input={input}/>
        <div className="fila">
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={resultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <ClearButton handleClear={()=>setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default MainCalculadora;
