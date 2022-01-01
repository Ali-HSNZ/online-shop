import {createSlice} from '@reduxjs/toolkit'

const windowReducer = createSlice({
    name : "window",
    initialState : {
        isSearch : false,
        isUserProfile : false,
        isMenu : false,
        isUserLogin : false,
        isUserSignup : false,
    },
    reducers : {
        windowCart : (state , action) => {
            state.isUserProfile = false 
            state.isSearch = false 
            state.isUserLogin = false
        },
        windowUser : (state , action) => {
            if(action.payload){
                state.isUserProfile = !state.isUserProfile
                state.isSearch = false  
                state.isMenu = false
            }else{
                state.isUserLogin = !state.isUserLogin
                state.isSearch = false 
                state.isMenu = false
            }
        },
        windowSearch : (state , action) => {
            state.isSearch = !state.isSearch
            state.isMenu = false 
            state.isUserProfile = false  
            state.isUserLogin = false
        },
        windowHome : (state , action) => {
            state.isUserProfile = false
            state.isSearch = false 
            state.isUserLogin = false 
            state.isMenu = false 
        },
        windowMenu : (state) => {
            state.isMenu = !state.isMenu
            state.isSearch = false  
            state.isUserProfile = false 
            state.isUserLogin = false
        },
        windowIsUserLogin : (state , action) => {
            state.isUserLogin = action.payload
        },
        windowIsUserSignup : (state , action) => {
            state.isUserSignup = action.payload
        },
        windowIsUserProfile : (state , action) => {
            state.isUserProfile = action.payload
        },
        windowIsMenu : (state , action) => {
            state.isMenu = action.payload
        },
        windowIsSearch : (state , action) => {
            state.isSearch = action.payload
        },
    }
})

export default windowReducer.reducer
export const {
    windowCart,
    windowHome,
    windowIsMenu,
    windowIsSearch,
    windowIsUserLogin,
    windowIsUserProfile,
    windowIsUserSignup,
    windowMenu,
    windowSearch,
    windowUser
} = windowReducer.actions













