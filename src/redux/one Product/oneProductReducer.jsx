import {
    FETCH_ONE_PRODUCT_SUCCESS,
    FETCH_ONE_PRODUCT_FAILURE,
    FETCH_ONE_PRODUCT_REQUEST
} from './oneProductTypes'

const initialState = {
    data : [],
    error : '',
    loading : false
} 
const oneProductReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_ONE_PRODUCT_REQUEST : {
            return {data : [] , error : '' , loading : true}
        }
        case FETCH_ONE_PRODUCT_SUCCESS : {
            return {data : action.payLoad , error : "" , loading : false}
        }
        case FETCH_ONE_PRODUCT_FAILURE : {
            return {data : [] , error : action.payLoad , loading : false}
        }

        default: return state
    }
}
export default oneProductReducer