import "./App.css";
import Testimonios from "./testimonios-app/components/testimonios";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonios />
      </div>
    </div>
  );
}

export default App;
