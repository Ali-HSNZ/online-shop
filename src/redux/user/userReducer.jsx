import { toast } from "react-toastify";
import { 
    USER_AUTOMATIC,
    USER_FAILURE, 
    USER_REQUEST, 
    USER_SUCCESS, 
    USER_REMMEMBER,
    USER_LOGOUT
} from "./userTypes";


let initialState = {
    data : null,
    error : null,
    loading : false
}

const userLoginReducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_REQUEST : {
            return {loading : true , data : null , error : null}
        }
        case USER_SUCCESS : {
            toast.success("با موفقیت وارد شدید!")
            return {data : action.payLoad, error : null , loading : false}
        }
        case USER_REMMEMBER : {
            toast.success("با موفقیت وارد شدید!")
            localStorage.setItem('user',JSON.stringify(action.payLoad))
            return {data : action.payLoad, error : null , loading : false}
        }
        case USER_AUTOMATIC : {
            return {data : action.payLoad, error : null , loading : false}
        }
        case USER_FAILURE : {
            toast.error(action.payLoad)
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