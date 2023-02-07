import React from "react";
import "../styles/testimonio.css"

const Testimonios = ({personas}) => {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${personas.imagen}.png`)}
        alt={`Foto de ${personas.imagen}`}
      />
			<div className="contenedor-texto-testimonio">
				<p className="nombre-testimonio"><strong>{personas.nombre}</strong> en {personas.pais}.</p>
				<p className="cargo-testimonio">{personas.cargo} en <strong>{personas.empresa}</strong> </p>
				<p className="texto-testimonio">{personas.testimonio}</p>
			</div>
    </div>
  );
};

export default Testimonios;