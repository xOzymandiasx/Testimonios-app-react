import React from "react";

export default function Boton({ texto, esBotonDeClick, handleClick }) {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}
