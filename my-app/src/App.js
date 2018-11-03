import React, { Component } from 'react';
import Backdrop from '../src/components/Backdrop/Backdrop';
import './App.css';


import Cart from './components/cart';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

backdropClickHandler=()=>{
  this.setState({sideDrawerOpen:false});
};





  render() {

    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

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
