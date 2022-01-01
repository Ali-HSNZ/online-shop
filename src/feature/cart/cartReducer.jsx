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
                const hideProducts = state.cart.filter(product => product.id !== action.payload.id)
                state.cart = hideProducts
            }
        },
        
        deleteProduct : (state , action) => {
            const newCart = state.cart.filter(product => product.id !== action.payload.id)
            state.cart = newCart
        },
        
        deleteAllProduct : (state) => { state.cart = [] ; state.total = 0 }
            
    }
    
})

export default cartReducer.reducer;
export const {AddQuantity,DecrimentQuantity,deleteProduct,deleteAllProduct} = cartReducer.actions;

