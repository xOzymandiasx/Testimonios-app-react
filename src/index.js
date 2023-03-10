import React from 'react';
import ReactDOM from 'react-dom/client';
import AplicacionTareas from './aplicacion-tareas/components/aplicacionTareas/AplicacionTareas';
// import MainCalculadora from './calculadora-interactiva/components/MainCalculadora/MainCalculadora';
// import ContadorClicks from './click-counter/components/contadorClicks/contadorClicks';
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ContadorClicks /> */}
    {/* <MainCalculadora /> */}
    <AplicacionTareas />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

