import "./App.css";
import Testimonios from "./testimonios-app/components/testimonios";

function App() {
  const personas = {
    nombre: "Emma Bostian",
    pais: "Suecia",
    imagen: "emma",
    cargo: "Ingeniera de software",
    empresa: "Spotify",
    testimonio: "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify",
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonios personas={personas}/>
      </div>
    </div>
  );
}

export default App;
