import { 
    FETCH_CATEGORIES_FAILED, 
    FETCH_CATEGORIES_SUCCESS 
} from "./categoryTypes"




const initialState = {
    data : [],
    error : ""
}

const categoryReducer = (state = initialState , action)=> {
    switch(action.type) {
        case  FETCH_CATEGORIES_SUCCESS : {
            return {data : action.payLoad , error:""}
        }
        case FETCH_CATEGORIES_FAILED : {
            return {data : [] , error : action.payLoad}
        }
        default : return state
    }
}
export default categoryReducer