// import toast from "react-hot-toast"
import { toast } from "react-toastify"

const cartReducer = (state , action) =>{
    switch (action.type) {
        case "ADD_TO_CART": {
            const cloneState = [...state.cart] 
            const findItemIndex  = cloneState.findIndex(product => product.id === action.payLoad.id)
            if(findItemIndex < 0){
                cloneState.push({...action.payLoad ,  quantity : 1})
                toast.success("این محصول به سبد خرید شما اضافه شد")
            }else{
                const cloneItem = {...state.cart[findItemIndex]};
                cloneItem.quantity++;
                const  cloneCart = [...state.cart]
                cloneCart[findItemIndex] = cloneItem;
                return {...state , cart : cloneCart}
            }
           return {...state , cart : cloneState , total : action.payLoad.discount}
        }
        case "DECRIMENT_TO_CART" :{
            const cloneState = [...state.cart] 
            const findItem_index = cloneState.findIndex(product => product.id === action.payLoad.id)
            if(action.payLoad.quantity >1){
                const cloneItem = {...cloneState[findItem_index]}
                cloneItem.quantity--;
                cloneState[findItem_index] = cloneItem;
            
            }else{
                const filtredState = cloneState.filter(product => product.id !== action.payLoad.id)
                return {...state , cart : filtredState}
            }
            return {...state , cart : cloneState , total : action.payLoad.discount}
        }
        case "DELETE_PRODUCT" :{
            const cloneState = [...state.cart] 

            const filterdProduct = cloneState.filter(product => product.id !== action.payLoad.id)
            return {...state , cart : filterdProduct , total : action.payLoad.discount}
        }
            
    
        default: return state
    }
}
export default cartReducer