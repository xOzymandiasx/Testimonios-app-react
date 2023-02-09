import React, { useState } from "react";
import TareaFormulario from "../formulario/TareaFormulario";
import "../../styles/listaDeTareas.css";
import Tarea from "../tareas/Tarea";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((item) => item.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((item) => {
      if (item.id === id) item.completada = !item.completada;
      return item;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((item) => (
          <Tarea
            texto={item.texto}
            completada={item.completada}
            key={item.id}
            id={item.id}
						completarTarea= {completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ListaDeTareas;
