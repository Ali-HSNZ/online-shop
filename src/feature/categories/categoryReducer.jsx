import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchingCategories = createAsyncThunk( "category/fetchingCategories", async (_ , {rejectWithValue})=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories")
        return response.data
    } catch (error) {
        return rejectWithValue( [] , error.message)
    }
})

const categoryReducer = createSlice({
    name : "categoryReducer",
    initialState :{data : [] , error : "",loading:false},
    extraReducers : {
        [fetchingCategories.pending] : (state , action)=>{
            return {...state , data : [] , error : "", loading : true}
        },
        [fetchingCategories.fulfilled] : (state , action)=>{
            return {...state , data : action.payload , error : "", loading : false}
        },
        [fetchingCategories.rejected] : (state , action)=>{
            return {...state , data : action.payload , error : "", loading : false}
        }
    }
})

export default categoryReducer.reducer
