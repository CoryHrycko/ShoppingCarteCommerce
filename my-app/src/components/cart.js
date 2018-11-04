import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    console.log(this.props);
    const CartItems = this.props.cart.map((item, idx)=>{
        return <li key={idx}>{item}</li>
    })
    return (
      <div className="Cart">
        <Shelf addItem={this.props.action.addToCart} />
        <div className='mainCart'>
        <div className="titleCart1"><h2> Services&nbsp;</h2></div> <div className="titleCart2"><h2> Rendered</h2></div>
        <ul>
          {CartItems}
          <div className="purchase">
            <button  type="button" onClick="clickAlert()">Purchase</button>
        </div>
        </ul>
      </div></div>
    );
  }
}





function mapStateToProps(state, prop){
  return{
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return{
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
