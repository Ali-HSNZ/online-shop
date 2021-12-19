import axios from "axios"
import {
    FETCH_CATEGORIES_FAILED, 
    FETCH_CATEGORIES_SUCCESS 
} from "./categoryTypes"


const fetchCategoriesFailed = (error)=> {
    return {type : FETCH_CATEGORIES_FAILED , payLoad : error}
}
const fetchCategoriesSuccess = (categories) => {
    return {type : FETCH_CATEGORIES_SUCCESS , payLoad:categories}
}

export const fetchingCategories = () => {
    return function fetching(dispach){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(categories => dispach(fetchCategoriesSuccess(categories.data)))
        .catch(error => dispach(fetchCategoriesFailed(error)))
    }
}

