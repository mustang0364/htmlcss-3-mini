import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
      showMenu: false,
    };
  }
  
  render() {
    return (
      <div className="app">
        <nav>
          <div className="logo small">Logo</div>
          <div className="logo large">Logo</div>
          <div className="menu small">
            <button onClick={() => this.setState({ showMenu: !this.state.showMenu })}>Menu</button>
          </div>
          <div className="menu large">About Download Contact</div>
        </nav>
        <div className={'slide-out-menu' + (this.state.showMenu ? ' show' : ' hide')}>
          <div>About</div>
          <div>Download</div>
          <div>Contact</div>
        </div>
        <div className="hero">
          <h1>Greyscale</h1>
        </div>
        <div className="animations">
          <div>
            <div className={'square' + (this.state.isAnimating ? ' my-animation' : '')}>
              My text
            </div>
            <div><button onClick={() => this.setState({ isAnimating: !this.state.isAnimating })}>Toggle animation</button></div>
          </div>
          <div className="square circleify"></div>
        </div>
      </div>
    );
  }
}

export default App;
