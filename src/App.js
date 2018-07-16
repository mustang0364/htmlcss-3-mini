import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }
  
  render() {
    const { showMenu } = this.state;

    return (
      <div className="app">
        <nav>
          <div className="brand small">My Stylish Site</div>
          <div className="menu small">
            <button onClick={() => this.setState({ showMenu: !showMenu })}>Menu</button>
          </div>

          <div className="brand large">My Stylish Site</div>
          <div className="menu large">About Projects Contact</div>
        </nav>
        <div className={showMenu ? "drawer open" : "drawer"}>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    );
  }
}

export default App;
