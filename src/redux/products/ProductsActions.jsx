import axios from "axios"
import { 
    FETCH_PRODUCTS_FAILD, 
    FETCH_PRODUCTS_SUCCESS 
} from "./ProductsTypes"

export const fetchDataFailed = (error) => {
    return {type : FETCH_PRODUCTS_FAILD , payLoad : error}
}

export const fetchDataSuccess = (products) => {
    return {type : FETCH_PRODUCTS_SUCCESS , payLoad : products}
}

export const fetchProducts = () => {
   
    return function (dispatch){
        axios.get('https://fakestoreapi.com/products')
        .then(products => {
            const cloneProducts = [...products.data]
            for(let i = 0 ; i <= Math.floor(cloneProducts.length/3) ; i++){
                const index = Math.floor(Math.random()*cloneProducts.length);
                cloneProducts[index].offPrice = Math.floor(Math.random()*19) + 1
                cloneProducts[index].discount = Math.floor(Math.random()*100) + 1
            }
            dispatch(fetchDataSuccess(cloneProducts))   

        })
        .catch(error => {dispatch(fetchDataFailed(error))})
    }
}
