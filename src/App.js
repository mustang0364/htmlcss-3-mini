import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <div className="logo small">Logo</div>
          <div className="logo large">Logo</div>
          <div className="menu small">Menu</div>
          <div className="menu large">About Download Contact</div>
        </nav>
        <div className="hero">
          <h1>Greyscale</h1>
        </div>
        <div className="animations">
          <div className="square my-animation">
            My text
          </div>
        </div>
      </div>
    );
  }
}

export default App;
