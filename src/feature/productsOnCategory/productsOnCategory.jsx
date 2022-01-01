import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsOnCategory =  createAsyncThunk( "ProductOnCategory/fetchProductsOnCategory" , async(categoryName , {rejectWithValue})=>{
    try {
       const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)

       const cloneProducts = [...response.data]

       for(let i = 0 ; i < cloneProducts.length ; i++){
           cloneProducts[i].offPrice = 0
           cloneProducts[i].discount = 0
       }

       for(let i = 0 ; i <= Math.floor(cloneProducts.length/2) ; i++){
           const index = Math.floor(Math.random()*cloneProducts.length);
           cloneProducts[index].offPrice = Math.floor(Math.random()*18) + 1
           cloneProducts[index].discount = Math.floor(Math.random()*200) + 1
       }

        return cloneProducts
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const ProductOnCategoryReducer = createSlice({
    name  : "oneProduct",
    initialState : {data : [], error : "",loading : false},
    extraReducers : {
        [fetchProductsOnCategory.pending] : (state) => {
            return {...state , data : [] , loading : true , error : ""}
        },
        
        [fetchProductsOnCategory.fulfilled] : (state , action) => {
            return {...state , data : action.payload , loading : false , error : ""}
        },
        
        [fetchProductsOnCategory.rejected] : (state , action) => {
            return {...state , data : [] , error : action.payload , loading : false}
        },
    }
})
export default ProductOnCategoryReducer.reducer