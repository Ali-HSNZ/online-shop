import {createSlice} from '@reduxjs/toolkit'

const likeReducer = createSlice({
    name : "like",
    initialState : {data : []},
    reducers : {
        addToLike : (state , action)=>{
            const findProduct = state.data.findIndex(product => product.id === action.payload.id)
            if(findProduct < 0){
                state.data.push({...action.payload , like : true})
            }else{
                const cloneLike = [...state.data]
                const product = cloneLike[findProduct]
                if(product.like === true) product.like = false; else product.like = true;
                state.data = cloneLike
            }
        }
    }
})

export default likeReducer.reducer
export const {addToLike} = likeReducer.actions