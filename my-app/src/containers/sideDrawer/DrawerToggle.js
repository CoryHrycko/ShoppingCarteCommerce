import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const drawerToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        Cart: <FontAwesomeIcon icon="fashoppingcart" />
    </button>
);

export default drawerToggleButton;