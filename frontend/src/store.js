import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import Cookies from 'js-cookie';
import { foodListReducer } from './reducers/foodReducers';


// Nếu muốn lưu với Cookie (Server Side)
// const Cookies = require('js-cookie');

// Nếu muốn lưu với Cookie (Server Side)
// const initialState = { 
//     cart: { cartItems: Cookies.get('cartItems')? JSON.parse(Cookies.get('cartItems')) : [], shipping: {}, payment: {} },
//     userSignin: { userInfo: Cookies.get('userInfo')? JSON.parse(Cookies.get('userInfo')) : null },
//  };

// Nếu muốn lưu với Local Storage (Client Side)
// const initialState = { 
//     cart: {
//         cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []
//     } 
// };
const initialState = {};
const reducer = combineReducers({
    foodList: foodListReducer,
    // productDetails: productDetailsReducer,
    // cart: cartReducer,
    // userSignin: userSigninReducer,
    // userRegister: userRegisterReducer,
    // productSave: productSaveReducer,
    // productDelete: productDeleteReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;