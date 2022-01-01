import {createSlice} from '@reduxjs/toolkit'

const likeReducer = createSlice({
    name : "like",
    initialState : {data : []},
    reducers : {
        addToLike : (state , action)=>{
            const findProductIndex = state.data.findIndex(product => product.id === action.payload.id)
            if(findProductIndex < 0){
                state.data.push({...action.payload , like : true})
            }else{
                const product = state.data[findProductIndex]
                product.like === true ?  product.like = false : product.like = true;
            }
        }
    }
})

export default likeReducer.reducer
export const {addToLike} = likeReducer.actions