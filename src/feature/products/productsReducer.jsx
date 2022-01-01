import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts =  createAsyncThunk( "Products/fetchProducts" , async(_ , {rejectWithValue})=>{
    try {
       const response = await axios.get('https://fakestoreapi.com/products')

       
       const cloneProducts = [...response.data]
       for(let i = 0 ; i <= Math.floor(cloneProducts.length/3) ; i++){
           const index = Math.floor(Math.random()*cloneProducts.length);
           cloneProducts[index].offPrice = Math.floor(Math.random()*19) + 1
           cloneProducts[index].discount = Math.floor(Math.random()*100) + 1
       }
        return cloneProducts
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const productsReducer =  createSlice({
    name : "products",
    initialState : {error : "" , loading : false , data : []},
    extraReducers : {
        [fetchProducts.pending] : (state) => {
            state.data = []
            state.loading = true
            state.error = ""
        },
        
        [fetchProducts.fulfilled] : (state , action) => {
            state.data = action.payload
            state.loading = true
            state.error = ""
        },
        
        [fetchProducts.rejected] : (state , action) => {
            state.data = []
            state.loading = true
            state.error = ""
        },
    }
})
export default productsReducer.reducer
