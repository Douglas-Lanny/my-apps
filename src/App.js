import React from 'react';
import './App.css';
import {Item, Item2}  from './item';
import {Comentario} from './componentes/componentes-funcionales';
import Inicio from './componentes/Paginas/Inicio';

const miFunction = (valor) => {
  return valor*2
}

function App() {
  return (
    <div className="App">
      <Comentario nombre="hola"/>
      <Comentario />
      <Inicio multiplicar={miFunction}/>
    </div>
  );
}

export default App;
