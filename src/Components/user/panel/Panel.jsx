import  LoginStyles from '../LoginStyles.module.css'
import React from 'react';
import Login from "../Login/Login"
import Signup from '../Signup/Signup';
import { AiFillCaretUp } from "react-icons/ai";

const UserPanel = ({setIsUserLogin , isUserLogin , isUserSignup , setIsUserSignup})=>{
    return(
        <React.Fragment>
            <div className={LoginStyles.parent} onClick={()=>setIsUserLogin(false)}></div>
                    <div className={LoginStyles.center}>
                        <div className={LoginStyles.main} onClick={()=>setIsUserLogin(true)}>
                                <div className={LoginStyles.arrow}>
                                    <AiFillCaretUp size="2em"/>
                                </div>
                                {isUserLogin === true && isUserSignup === false ?(
                                    <Login setIsUserLogin={setIsUserLogin} setIsUserSignup={setIsUserSignup}/> 
                                ) : (
                                    <Signup setIsUserSignup={setIsUserSignup} setIsUserLogin={setIsUserLogin}/>
                                )}
                        </div>
                   
               </div>
        </React.Fragment>
    )
}
export default UserPanel