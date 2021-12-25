import {combineReducers} from 'redux'

import cartReducer from './cart/cartReducer'
import categoryReducer from './categories/categoryReducer'
import likeReducer from './like/likeReducer'
import oneProductReducer from './one Product/oneProductReducer'
import productsReducer from './products/ProductsReducer'
import productsCategoryReducer from './products category/productsCategoryReducer'
import userLoginReducer from './user/userReducer'

const rootReducer = combineReducers({
    cart : cartReducer,
    like : likeReducer,
    products : productsReducer,
    categories : categoryReducer,
    oneProduct : oneProductReducer,
    productsCategory : productsCategoryReducer,
    userLogin : userLoginReducer 
})

export default rootReducer
