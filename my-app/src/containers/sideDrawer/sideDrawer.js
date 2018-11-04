import React from 'react';
import Cart from '../../components/cart';


const sideDrawer = props => {

    let drawerClaseses = 'sideDrawer';
    if(props.show) {
        drawerClaseses ='sideDrawer open';
    }
  return (
  <nav className={drawerClaseses}>
        <ul>
            <Cart/>
 
        </ul>
       <div className="purchase">
            <button  type="button" onClick="">Purchase</button>
        </div>
    </nav>);
};



export default sideDrawer;