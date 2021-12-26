import { 
    USER_LOGIN_AUTOMATIC,
    USER_LOGIN_FAILURE, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT
} from "./userTypes";


let initialState = {
    data : null,
    error : null,
    loading : false
}

const userLoginReducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST : {
            return {loading : true , data : null , error : null}
        }
        case USER_LOGIN_SUCCESS : {
            localStorage.setItem('user',JSON.stringify(action.payLoad))
            return {data : action.payLoad, error : null , loading : false}
        }
        case USER_LOGIN_AUTOMATIC : {
            return {data : action.payLoad, error : null , loading : false}
        }
        case USER_LOGIN_FAILURE : {
            return {data : null, error : action.payLoad , loading : false}
        }
        case USER_LOGOUT : {
            localStorage.setItem('user',null)
            return {data : null, error : null , loading : false}
        }
        default : return state
    }
}
export default userLoginReducer