import React, { Component } from 'react';
import './App.css';

import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         <h1 className= "title">White Snow</h1>
         </div>
        <div className="App-intro">
           <Cart />
        </div>
      </div>
    );
  }
}

export default App;
