import logo from './Media/Oni.gif';
import './App.css';
import React from 'react'
import { DataForCards } from './Modules/DataForCards';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CardRouting from './Modules/CardRouting';
import Footer from './Modules/Footer/Footer';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="heading"><a id="heading-ref" href="/">{"<ALGO COMPENDIUM/>"}</a></h1>
          <h2 className="head-text">A Compendium for visualizing state of the art Algorithms</h2>
        </header>
        <DataForCards>
          <div>
            <Router>
              <CardRouting />
            </Router>
          </div>
          <Footer />
        </DataForCards>

      </div>
    );
  }
}
export default App;
