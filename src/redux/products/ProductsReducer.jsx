import { 
    FETCH_PRODUCTS_FAILD, 
    FETCH_PRODUCTS_SUCCESS 
} from "./ProductsTypes";

const initialState = {
    data : [],
    error: ""
}

const productsReducer = (state = initialState , action) => {

    switch (action.type){
        case FETCH_PRODUCTS_FAILD : {   
            return {data : [] , error : action.payLoad}
        }
        case FETCH_PRODUCTS_SUCCESS : {
            return {data : action.payLoad , error : ""}
        }
        default : return state
    }
}
export default productsReducer