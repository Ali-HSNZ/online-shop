import { userLogin } from "../../services/loginService"
import {
    USER_LOGIN_REQUEST, 
    USER_LOGIN_FAILURE, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT,
    USER_LOGIN_REMMEMBER,
    USER_LOGIN_AUTOMATIC
} from "./userTypes"

const userLoginRequest = () => {
    return {type : USER_LOGIN_REQUEST}
}

const userLoginSuccess = (data)=> {
    const userData =  data;
    const {email} = userData
    return {type : USER_LOGIN_SUCCESS , payLoad : email}
}

const userLoginRemmemberMe = (data)=> {
    const userData =  data;
    const {email} = userData
    return {type : USER_LOGIN_REMMEMBER , payLoad : email}
}

const userLoginFailur = (error) => {
    return {type : USER_LOGIN_FAILURE , payLoad : error}
}

export const userLoginAutomatic = (userData) => {
    return {type : USER_LOGIN_AUTOMATIC , payLoad : userData}
}

export const userLogout = ()=> {
    return {type : USER_LOGOUT}
}

export const fetchUserLogin = (isRemmemberLogin,userData) => {
    return (dispatch)=>{
        dispatch(userLoginRequest())
        userLogin(userData)
        .then(user => isRemmemberLogin === true ?  dispatch(userLoginRemmemberMe(JSON.parse(user.config.data))) : dispatch(userLoginSuccess(JSON.parse(user.config.data))))
        .catch(error => dispatch(userLoginFailur(error.response.data.message))) 
    }
}