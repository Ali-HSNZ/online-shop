import axios from 'axios'
import {
    FETCH_PRODUCTS_CATEGORY_REQUEST,
    FETCH_PRODUCTS_CATEGORY_SUCCESS,
    FETCH_PRODUCTS_CATEGORY_FAILURE
} from './productsCategoryTypes'

const fetchProductsCategoryRequest = () => {
    return {type : FETCH_PRODUCTS_CATEGORY_REQUEST}
}

const fetchProductsCategorySuccess = (products) => {
    return {type : FETCH_PRODUCTS_CATEGORY_SUCCESS , payLoad : products}
}

const fetchProductsCategoryFailure = (error) => {
    return {type : FETCH_PRODUCTS_CATEGORY_FAILURE , payLoad : error}
}

export const fetchProductsCategory = (categoryName) => {
    return function (dispatch){

        dispatch(fetchProductsCategoryRequest)

        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(products => {
            const cloneProducts = [...products.data]

            for(let i = 0 ; i < cloneProducts.length ; i++){
                cloneProducts[i].offPrice = 0
                cloneProducts[i].discount = 0
            }

            for(let i = 0 ; i <= Math.floor(cloneProducts.length/2) ; i++){
                const index = Math.floor(Math.random()*cloneProducts.length);
                cloneProducts[index].offPrice = Math.floor(Math.random()*18) + 1
                cloneProducts[index].discount = Math.floor(Math.random()*200) + 1
            }

            dispatch(fetchProductsCategorySuccess(cloneProducts))
        })
        .catch(error => dispatch(fetchProductsCategoryFailure(error)) )
    }
}
