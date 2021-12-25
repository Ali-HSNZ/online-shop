import { 
    USER_LOGIN_FAILURE, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT
} from "./userTypes";


const initialState = {
    data : null,
    error : "",
    loading : false
}
const userData = JSON.parse(localStorage.getItem("user"))
initialState.data = userData


const userLoginReducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST : {
            return {data : null , error : "" , loading : true}
        }
        case USER_LOGIN_SUCCESS : {
            localStorage.setItem('user',JSON.stringify(action.payLoad))
            return {data : action.payLoad, error : "" , loading : false}
        }
        case USER_LOGIN_FAILURE : {
            return {data : null, error : action.payLoad , loading : false}
        }
        case USER_LOGOUT : {
            localStorage.setItem('user',null)
            return {data : null, error : "" , loading : false}
        }
        default : return state
    }
}
export default userLoginReducer