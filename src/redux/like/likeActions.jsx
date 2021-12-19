import { ADD_TO_LIKE } from "./likeTypes"

export const addToLike = (product)=> {
    return {type : ADD_TO_LIKE , payLoad : product}
}