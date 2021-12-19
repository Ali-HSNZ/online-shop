import {
    ADD_TO_CART, 
    DECRIMENT_TO_CART, 
    DELETE_ALL_PRODUCT, 
    DELETE_PRODUCT
} from './cartTypes'

export const AddQuantity = (product)=> {
    return {type : ADD_TO_CART , payLoad : product}
}
export const DecrimentQuantity = (product)=> {
    return {type : DECRIMENT_TO_CART , payLoad : product}
}
export const deleteProduct = (product)=>{
    return {type : DELETE_PRODUCT , payLoad : product}
}
export const deleteAllProduct = ()=>{
    return {type : DELETE_ALL_PRODUCT}
}