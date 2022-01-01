import { createSlice } from "@reduxjs/toolkit";

const cartReducer =  createSlice({
    name : "cart",
    initialState : { cart : [] , total : 0 },
    reducers : {
        
        AddQuantity : (state , action) => {
            const productIndex  = state.cart.findIndex(product => product.id === action.payload.id)
            if(productIndex < 0){
                state.cart.push({...action.payload ,  quantity : 1})
            }else{
               state.cart[productIndex].quantity++;
            }
        },
        
        DecrimentQuantity : (state , action) => {
            const productIndex = state.cart.findIndex(product => product.id === action.payload.id)
            if(action.payload.quantity >1){
                state.cart[productIndex].quantity--
            }else{
                state.cart = state.cart.filter(product => product.id !== action.payload.id)
            }
        },
        
        deleteProduct : (state , action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload.id)
        },
        
        deleteAllProduct : (state) => { state.cart = [] }
    }
    
})

export default cartReducer.reducer;
export const {AddQuantity,DecrimentQuantity,deleteProduct,deleteAllProduct} = cartReducer.actions;

