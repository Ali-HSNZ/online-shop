const likeReducer = (state , action) => {
    switch (action.type) {
        case "ADD_TO_LIKE":{
            const cloneLikeState = [...state.like];
            const findProduct = cloneLikeState.findIndex(e => e.id === action.payLoad.id)
            if(findProduct < 0){
                cloneLikeState.push({...action.payLoad , like : true})
            }else{
                
                const cloneLike = [...state.like]
                const product = cloneLike[findProduct]

                if(product.like === true) product.like = false; else product.like = true;
                
                return {...state , like: cloneLike}
            }
            return {...state , like: cloneLikeState}
        }


            default: return state
    }
}
export default likeReducer