import React, { Component } from 'react';
import Backdrop from '../src/components/Backdrop/Backdrop';
import Toolbar from '../src/containers/toolBar/toolBar';
import SideDrawer from '../src/containers/sideDrawer/SideDrawer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fashoppingcart } from '@fortawesome/free-solid-svg-icons'

import './App.css';

import Cart from './components/cart';

library.add(fashoppingcart)

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
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}

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
