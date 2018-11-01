import cart from './cart.js';
import {combinReducers } from 'redux';

const rootReducer = combinReducers({
    cart
});

export default rootReducer;