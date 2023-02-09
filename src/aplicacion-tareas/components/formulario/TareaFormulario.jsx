import React, { useState } from "react";
import "../../styles/tareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props) => {
	const [input, setinput] = useState("");

  const handleChange = (e) => {
		setinput(e.target.value);
	};

  const handleEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
			completada: false
    };

		props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={handleEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
				onChange={handleChange}
      />
      <button type="submit" className="tarea-boton">
        Agregar tarea
      </button>
    </form>
  );
};

export default TareaFormulario;
