import React from 'react';
import './Sass/main.scss';
import Header from './componentes/Header';
import Footer from './componentes/Footer'
import Main from './componentes/Paginas/Main'



function App() {
  return (
    <div className="App">
      <Header nombre = "Mi Aplicación" date={Date(Date.now())}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
