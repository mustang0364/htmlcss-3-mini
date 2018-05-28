import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
    };
  }

  render() {
    const { isAnimating } = this.state;
    const productClassName = isAnimating ? "product product-animate" : "product";

    return (
      <div>
        <nav>
          <div className="logo">LOGO</div>
          <div className="menu phone">MENU</div>
          <div className="menu desktop">ABOUT DOWNLOAD CONTACT</div>
        </nav>
        <div className="products">
          <div className={productClassName}>Hello</div>
          <div className={productClassName}>Hello</div>
          <div className={productClassName}>Hello</div>
        </div>
        <button onClick={() => this.setState({ isAnimating: !this.state.isAnimating })}>Click me to animate</button>
      </div>
    );
  }
}

export default App;
