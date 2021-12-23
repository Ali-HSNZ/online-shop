import {
    FETCH_PRODUCTS_CATEGORY_REQUEST,
    FETCH_PRODUCTS_CATEGORY_SUCCESS,
    FETCH_PRODUCTS_CATEGORY_FAILURE
} from './productsCategoryTypes'

const initialState = {
    loading : false,
    data : [],
    error : ""
}

const productsCategoryReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_CATEGORY_REQUEST:{
            return {loading : true , data : [] , error : ""}
        }
        case FETCH_PRODUCTS_CATEGORY_SUCCESS : {
            return {loading : false , error : "" , data : action.payLoad}
        }
        case FETCH_PRODUCTS_CATEGORY_FAILURE : {
            return {loading : false , error : action.payLoad , data : []}
        }
        default: return state
    }
}
export default productsCategoryReducer