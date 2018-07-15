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
      </div>
    );
  }
}

export default App;
