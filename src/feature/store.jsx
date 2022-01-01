import {configureStore} from '@reduxjs/toolkit'

import cartReducer from './cart/cartReducer'
import categoryReducer from './categories/categoryReducer'
import likeReducer from './like/likeReducer'
import oneProductReducer from './oneProduct/oneProductReducer'
import productsReducer from './products/productsReducer'
import ProductOnCategoryReducer from './productsOnCategory/productsOnCategory'
import userReducer from './user/userReducer'
import windowReducer from './window/windowReducer'



const store = configureStore({
    reducer : {
        cart : cartReducer,
        categories : categoryReducer,
        like : likeReducer,
        oneProduct : oneProductReducer,
        products : productsReducer,
        productsOnCategory : ProductOnCategoryReducer,
        user: userReducer,
        window : windowReducer
    }
})

export default store