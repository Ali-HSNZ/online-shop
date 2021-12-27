import { userLogin } from "../../services/loginService"
import { userSignup } from "../../services/signupService"
import {
    USER_REQUEST, 
    USER_FAILURE, 
    USER_SUCCESS, 
    USER_LOGOUT,
    USER_REMMEMBER,
    USER_AUTOMATIC
} from "./userTypes"

const userRequest = () => {
    return {type : USER_REQUEST}
}

export const userSuccess = (data)=> {
    const userData =  data;
    const {email} = userData
    return {type : USER_SUCCESS , payLoad : email}
}

const userRemmemberMe = (data)=> {
    const userData =  data;
    const {email} = userData
    return {type : USER_REMMEMBER , payLoad : email}
}

export const userFailur = (error) => {
    return {type : USER_FAILURE , payLoad : error}
}

export const userAutomatic = (userData) => {
    return {type : USER_AUTOMATIC , payLoad : userData}
}

export const userLogout = ()=> {
    return {type : USER_LOGOUT}
}

// user Login
export const fetchUserLogin = (isRemmemberLogin,userData) => {
    return (dispatch)=>{
        dispatch(userRequest())
        userLogin(userData)
        .then(user => isRemmemberLogin === true ?  dispatch(userRemmemberMe(JSON.parse(user.config.data))) : dispatch(userSuccess(JSON.parse(user.config.data))))
        .catch(error => dispatch(userFailur(error.response.data.message))) 
    }
}

// user Signup
export const fetchUserSignup = (isRemmemberSignup,data)=>{
    return function (dispatch){
        dispatch(userRequest())
        userSignup(data)
        .then(user => isRemmemberSignup === true ?  dispatch(userRemmemberMe(JSON.parse(user.config.data))) : dispatch(userSuccess(JSON.parse(user.config.data))))
        .catch(error => dispatch(userFailur(error.response.data.message)))
    }
} 