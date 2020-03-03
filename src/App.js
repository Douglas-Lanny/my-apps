import React from 'react';
import './Sass/main.scss';
import Header from './componentes/Header';
import Footer from './componentes/Footer'
import Main from './componentes/Paginas/Main'



function App() {
  var options = { year: "numeric", month: "long", day: "numeric"};
  return (
    <div className="App">
      <Header nombre = "Mi Aplicación" fecha={new Date(Date.now()).toLocaleDateString("es-Co", options)}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
