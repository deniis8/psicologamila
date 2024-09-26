import React from 'react';
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import Footer from './components/Footer';
import './styles/styles.css'; // Arquivo de estilização separado

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="about">
          <h2>Sobre mim</h2>
          <p>Camila Patrício é uma psicóloga especializada em ...</p>
        </section>
        <Carrossel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
