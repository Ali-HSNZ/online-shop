import { createSlice } from "@reduxjs/toolkit";

const cartReducer =  createSlice({
    name : "cart",
    initialState : { cart : [] , total : 0 },
    reducers : {
        
        AddQuantity : (state , action) => {
            const findItemIndex  = state.cart.findIndex(product => product.id === action.payload.id)
            if(findItemIndex < 0){
                state.cart.push({...action.payload ,  quantity : 1})
            }else{
                const product = state.cart[findItemIndex]
                product.quantity++;
            }
        },
        
        DecrimentQuantity : (state , action) => {
            const findItem_index = state.cart.findIndex(product => product.id === action.payload.id)
            if(action.payload.quantity >1){
                const cloneItem = {...state.cart[findItem_index]}
                cloneItem.quantity--;
                state.cart[findItem_index] = cloneItem;
            }else{
                const hideProducts = state.cart.filter(product => product.id !== action.payload.id)
                state.cart = hideProducts
            }
        },
        
        deleteProduct : (state , action) => {
            const findProduct = state.cart.filter(product => product.id !== action.payload.id)
            state.cart = findProduct
            state.total = action.payload.discount
        },
        
        deleteAllProduct : (state) => {
            state.cart = [] 
            state.total = 0
        },
    }
    
})

export default cartReducer.reducer;
export const {AddQuantity,DecrimentQuantity,deleteProduct,deleteAllProduct} = cartReducer.actions;

