import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOneProduct =  createAsyncThunk( "oneProduct/fetchOneProduct" , async(productId , {rejectWithValue})=>{
    try {
       const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const oneProductReducer = createSlice({
    name  : "oneProduct",
    initialState : {data : [], error : "",loading : false},
    extraReducers : {
        [fetchOneProduct.pending] : (state , action) => {
            return {...state , data : [] , error : "" , loading : true}
        },
        
        [fetchOneProduct.fulfilled] : (state , action) => {
            return {...state , data : action.payload ,error : "", loading : false}
        },
        
        [fetchOneProduct.rejected] : (state , action) => {
            return {...state , data : [] , error : action.payload , loading : false}
        },
    }
})
export default oneProductReducer.reducer