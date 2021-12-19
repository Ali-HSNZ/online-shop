import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import likeReducer from './like/likeReducer'
import productsReducer from './products/ProductsReducer'


const rootReducer = combineReducers({
    cart : cartReducer,
    like : likeReducer,
    products : productsReducer
})
export default rootReducer