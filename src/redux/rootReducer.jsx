import {combineReducers} from 'redux'
import cartReducer from './cart/cartReducer'
import likeReducer from './like/likeReducer'


const rootReducer = combineReducers({
    cart : cartReducer,
    like : likeReducer
})
export default rootReducer