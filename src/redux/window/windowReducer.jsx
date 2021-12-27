import { 
    WINDOW_CART,
    WINDOW_USER,
    WINDOW_SEARCH,
    WINDOW_HOME,
    WINDOW_MENU,

    WINDOW_IS_USER_SIGNUP,
    WINDOW_IS_USER_LOGIN,
    WINDOW_IS_USER_PROFILE,

    WINDOW_IS_MENU,
    WINDOW_IS_SEARCH
} from "./windowTypes";

const initialState = {
    isSearch : false,
    isUserProfile : false,
    isMenu : false,
    isUserLogin : false,
    isUserSignup : false,
}

const windowReducer = (state = initialState , action) => {
    switch (action.type) {
        case WINDOW_CART:{
            return {...state , isUserProfile : false , isSearch: false , isUserLogin : false}
        }
        case WINDOW_USER :{
            if(action.payLoad){
                return {...state , isUserProfile : true , isSearch:false , isMenu :  false}
            }else{
                return {...state , isUserLogin : true , isSearch:false , isMenu :  false}
            }
        } 
        case WINDOW_SEARCH : {
            return {...state , isSearch : true , isMenu : false , isUserProfile : false , isUserLogin : false}
        }
        case WINDOW_HOME : {
            return {...state , isUserProfile : false , isSearch : false , isUserLogin : false , isMenu : false }
        }
        case WINDOW_MENU : {
            return {...state , isMenu : true , isSearch : false , isUserProfile : false , isUserLogin : false}
        } 
        case WINDOW_IS_USER_SIGNUP : {
            return {...state , isUserSignup : action.payLoad}
        }
        case WINDOW_IS_USER_LOGIN : {
            return {...state , isUserLogin : action.payLoad}
        }
        case WINDOW_IS_USER_PROFILE : {
            return {...state , isUserProfile : action.payLoad}
        }
        case WINDOW_IS_MENU : {
            return {...state , isMenu : action.payLoad}
        }
        case WINDOW_IS_SEARCH : {
            return {...state , isSearch : action.payLoad}
        }
        
        default: return state 
    }
}
export default windowReducer