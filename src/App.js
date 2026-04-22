import React from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Events from './components/Events';
import './style.css';
import './index.css';


function App() {
  return (
    <div className="home-container1">
      <Navigation />
      <section id="Home">
        <Homepage />
      </section>
      <section id="Mission">
        <Mission />
      </section>
      <section id="Events">
        <Events />
      </section>
      <Footer />
    </div>
  );
}

export default App;
