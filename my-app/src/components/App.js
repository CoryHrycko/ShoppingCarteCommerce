import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CartActions from '../actions/CartActions';
import Shelf from 'shelf';

class Cart extends Component {
  constructor(){
    super(props);
  }

  render() {
    const CartItems = this.props.cart.map((item, idx)=>{
        return <li key={idx}>{item}</li>
    })
    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart} />
        <h2> Cart Items</h2>
        <ol>

        </ol>
          {CartItems}
      </div>
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
