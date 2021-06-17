import logo from './Media/Oni.gif';
import './App.css';
import  React from 'react'
import Footer from './Modules/Footer/Footer';
import Cards from './Modules/Cards/Cards';
import PathfindingVisualizer from './Modules/PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Home page for the visualizers with Intructions</h2>    
      </header>
      <PathfindingVisualizer/>
      <Cards/>
      <Footer/>
      

    </div>
  );
}

export default App;
