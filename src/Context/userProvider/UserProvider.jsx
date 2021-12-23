import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserContextDispatch = createContext();

const IsCalledUserLoginContext = createContext();
const IsCalledUserLoginDispatchContext = createContext()


const UserProvider = ({children}) => {
    
    const [user , setUser] = useState(null)
    const [isUserLogin , setIsUserLogin] = useState(false)



    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("user")) || null;
        setUser(userData)
    },[])

    useEffect(()=>{
        const userData = JSON.stringify(user);
        localStorage.setItem('user',userData)
    },[user])
    
    
    return (  
        <UserContext.Provider value={user}>
            <UserContextDispatch.Provider value={setUser}>

                <IsCalledUserLoginContext.Provider value={isUserLogin}>
                    <IsCalledUserLoginDispatchContext.Provider value={setIsUserLogin}>

                        {children}
                    
                    </IsCalledUserLoginDispatchContext.Provider>
                </IsCalledUserLoginContext.Provider>
            
            </UserContextDispatch.Provider>
        </UserContext.Provider>
    );
}
 
export default UserProvider;

export const User = ()=> useContext(UserContext)
export const UserDispatch = ()=> useContext(UserContextDispatch)

export const IsCalledUserLogin = ()=> useContext(IsCalledUserLoginContext)
export const IsCalledUserLoginDispatch = ()=> useContext(IsCalledUserLoginDispatchContext)
