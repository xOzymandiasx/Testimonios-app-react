import React, { useState } from 'react'
import TareaFormulario from '../formulario/TareaFormulario'
import "../../styles/listaDeTareas.css"
import Tarea from '../tareas/Tarea';

const ListaDeTareas = () => {
	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea) => {
		console.log(tarea)
	}

  return (
    <>
			<TareaFormulario onSubmit={agregarTarea}/>
			<div className='tareas-lista-contenedor'>
				{tareas.map(item => <Tarea texto={item.texto} completada={item.completada} />)}
			</div>
		</>
  )
}

export default ListaDeTareas