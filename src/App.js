import React from 'react';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Mission from './components/Mission';
import './style.css';
import './index.css';


function App() {
  return (
    <div className="home-container1">
      <Navigation />
      <main>
        <Homepage />
        <Mission />
        {/* <Events />
        <Gallery />
        <Magazine /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
