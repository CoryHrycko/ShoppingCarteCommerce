import React from 'react';
import Cart from '../../components/cart'

const sideDrawer = props => {
    let drawerClaseses = 'sideDrawer';
    if(props.show) {
        drawerClaseses ='sideDrawer open';
    }
  return (
  <nav className={drawerClaseses}>
        <ul>
            <Cart />
        </ul>
    </nav>);
};

export default sideDrawer;