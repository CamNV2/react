import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import productsReducer from './Products/products.reducer'
export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    productsData: productsReducer
})
