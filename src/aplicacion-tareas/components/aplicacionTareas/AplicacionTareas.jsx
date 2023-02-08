import React from 'react'
import freecodecampLogo from "../../img/freecodecamp-logo.png"
import "../../styles/aplicacionTareas.css"
import Tarea from '../tareas/Tarea'

const AplicacionTareas = () => {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
				<img className='freecodecamp-logo' src={freecodecampLogo} alt="Logo freecodecamp" />
			</div>
			<div className="tareas-lista-principal">
				<h1>Mis tareas</h1>
				<Tarea />
			</div>
    </div>
  )
}

export default AplicacionTareas