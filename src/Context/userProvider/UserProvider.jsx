import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserContextDispatch = createContext();


const UserProvider = ({children}) => {
    
    const [user , setUser] = useState(null)



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
                {children}
            </UserContextDispatch.Provider>
        </UserContext.Provider>
    );
}
 
export default UserProvider;

export const User = ()=> useContext(UserContext)
export const UserDispatch = ()=> useContext(UserContextDispatch)
