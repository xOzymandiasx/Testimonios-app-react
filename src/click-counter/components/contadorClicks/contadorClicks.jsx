import React, { useState } from "react";
import freecodecampLogo from "../../img/freecodecamp-logo.png";
import Boton from "../boton/Boton";
import Contador from "../contador/Contador";
import "./styles/contadorClicks.css";

export default function ContadorClicks() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freecodecampLogo}
          alt="Logo de Freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        <Boton texto="Click" esBotonDeClick={true} handleClick={handleClick} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          handleClick={reiniciarContador}
        />
      </div>
    </div>
  );
}
