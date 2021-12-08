import { createContext, useContext, useReducer } from "react";
import likeReducer from "./likeReducer";


const LikeStateContext = createContext()
const LikeDispatchContext = createContext()

const initialState = {
    like : []
}


const LikeContext = ({children}) => {
    

    const [likeState , dispatchLike] = useReducer(likeReducer , initialState)
    return (  
        <LikeStateContext.Provider value={likeState}>
            <LikeDispatchContext.Provider value={dispatchLike}>
                {children}
            </LikeDispatchContext.Provider>
        </LikeStateContext.Provider>
    );
}
 
export default LikeContext;

export const UseLikeState = () => useContext(LikeStateContext);
export const UseLikeDispatcher = ()=> useContext(LikeDispatchContext) 