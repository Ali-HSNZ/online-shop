import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import categoryReducer from './categories/categoryReducer'
import likeReducer from './like/likeReducer'
import oneProductReducer from './one Product/oneProductReducer'
import productsReducer from './products/ProductsReducer'


const rootReducer = combineReducers({
    cart : cartReducer,
    like : likeReducer,
    products : productsReducer,
    categories : categoryReducer,
    oneProduct : oneProductReducer
})
export default rootReducer