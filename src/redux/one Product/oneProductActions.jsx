import axios from 'axios'
import {
    FETCH_ONE_PRODUCT_SUCCESS,
    FETCH_ONE_PRODUCT_FAILURE,
    FETCH_ONE_PRODUCT_REQUEST
} from './oneProductTypes'

const fetchOneProductSuccess = (product) => {
    return {type : FETCH_ONE_PRODUCT_SUCCESS , payLoad : product}
}
const fetchOneProductFailure = (error) => {
    return {type : FETCH_ONE_PRODUCT_FAILURE , payLoad : error}
}
const fetchOneProductRequest = () => {
    return {type : FETCH_ONE_PRODUCT_REQUEST }
}

export const fetchOneProduct = (productId) => {
    return function (dispatch){
        dispatch(fetchOneProductRequest())
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(product => dispatch(fetchOneProductSuccess(product.data)))
        .catch(error => dispatch(fetchOneProductFailure(error)))
    }
}