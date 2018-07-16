import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <div className="brand small">My Stylish Site</div>
          <div className="menu small">Menu</div>

          <div className="brand large">My Stylish Site</div>
          <div className="menu large">About Projects Contact</div>
        </nav>
      </div>
    );
  }
}

export default App;
