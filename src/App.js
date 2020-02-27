import React from 'react';
import './App.css';
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Main from './componentes/Paginas/Main'

const miFunction = (valor) => {
  return valor*2
}

function App() {
  return (
    <div className="App">
      <Header nombre = "Mi Aplicación"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
