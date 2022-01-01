import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { userLogin } from '../../services/loginService'
import { userSignup } from '../../services/signupService'

export const fetchingUserLogin = createAsyncThunk( "user/userLogin", async (action , {rejectWithValue})=>{
    const userData = action.data;
    const isRemmemberLogin = action.isRemmember
    try {
        const response = await userLogin(userData)
        const {email} = JSON.parse(response.config.data)
        if(isRemmemberLogin === true){
            return {data : email , type : "userRemmemberMe"}
        }else{
            return {data : email}
        }
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const fetchingUserSignup = createAsyncThunk( "user/userSignup", async (action , {rejectWithValue})=>{
    const userData = action.data;
    const isRemmemberLogin = action.isRemmember
    try {
        const response = await userSignup(userData)
        const {email} = JSON.parse(response.config.data)
        if(isRemmemberLogin === true){
            return {data : email , type : "userRemmemberMe"}
        }else{
            return {data : email}
        }
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})


const userReducer = createSlice({
    name : "userReducer",
    initialState :{data : null , error : "",loading:false},
    reducers : {
        userAutomatic : (state , action) => {
            state.data = action.payload
            state.error = ""
            state.loading = false
        },
        userLogout : (state , action) => {
            localStorage.setItem('user',null)
            toast.warning("از حساب خود خارج شده اید")

            state.data = null 
            state.error = ""
            state.loading = false
        }
    },
    extraReducers : {

        [fetchingUserSignup.pending] : (state , action)=>{
            state.data = null
            state.error = ""
            state.loading = true
        },
        [fetchingUserSignup.fulfilled] : (state , action)=>{
            toast.success("با موفقیت وارد شدید")
            if(action.payload.type === "userRemmemberMe"){
                localStorage.setItem('user',JSON.stringify(action.payload.data))
                state.data = action.payload.data
                state.error = ""
                state.loading = false
            }else{
                localStorage.setItem('user',null)
                state.data = action.payload.data
                state.error = ""
                state.loading = false
            }
        },
        [fetchingUserSignup.rejected] : (state , action)=>{
            toast.error(action.payload)
            state.data = null
            state.error = action.payload
            state.loading = false
        },

// user Signup

    [fetchingUserLogin.pending] : (state , action)=>{
        state.data = null
        state.error = ""
        state.loading = true
    },
    [fetchingUserLogin.fulfilled] : (state , action)=>{
        toast.success("با موفقیت وارد شدید")
        if(action.payload.type === "userRemmemberMe"){
            localStorage.setItem('user',JSON.stringify(action.payload.data))
            state.data = action.payload.data
            state.error = ""
            state.loading = false
        }else{
            localStorage.setItem('user',null)
            state.data = action.payload.data
            state.error = ""
            state.loading = false
        }
    },
    [fetchingUserLogin.rejected] : (state , action)=>{
        toast.error(action.payload)
        state.data = null
        state.error = action.payload
        state.loading = false
    },

    }
})
export const {userAutomatic , userLogout} = userReducer.actions
export default userReducer.reducer
