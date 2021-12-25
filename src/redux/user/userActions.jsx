import { useEffect } from "react"
import { userLogin } from "../../services/loginService"
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_FAILURE, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT
} from "./userTypes"

const userLoginRequest = () => {
    return {type : USER_LOGIN_REQUEST}
}
const userLoginSuccess = (userData)=> {
    return {type : USER_LOGIN_SUCCESS , payLoad : userData}
}

const userLoginFailur = (error) => {
    return {type : USER_LOGIN_FAILURE , payLoad : error}
}
export const userLogout = ()=> {
    return {type : USER_LOGOUT}
}

export const fetchUserLogin = (userData) => {
    return (dispatch)=>{
        dispatch(userLoginRequest)
        userLogin(userData)
        .then(user => dispatch(userLoginSuccess(JSON.parse(user.config.data))))
        .catch(error => dispatch(userLoginFailur(error.response.data.message))) 
    }
}