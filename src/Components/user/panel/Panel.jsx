
import {BiX} from "react-icons/bi";
import  LoginStyles from'../LoginStyles.module.css'
import { User , UserDispatch} from '../../../Context/userProvider/UserProvider';
import React, { useState } from 'react';
import { AiFillCaretUp ,AiFillCaretLeft} from "react-icons/ai";
import { toast } from 'react-toastify';

const UserProfile = ({setIsUserProfile})=> {
    const user = User()
    const userDispatch = UserDispatch()
    return(
        <React.Fragment>
            <div className={LoginStyles.parent} onClick={()=>setIsUserProfile(false)}></div>
            <div className={LoginStyles.center}>
            <div className={`${LoginStyles.main} ${LoginStyles.main_userProfile}`}>

                <div className={LoginStyles.arrowProfile}>
                    <AiFillCaretUp size="2em"/>
                </div>

                <div className={LoginStyles.header}>
                    <button onClick={()=>setIsUserProfile(false)}>
                        <BiX size="2em"/>
                    </button>
                    <p className={LoginStyles.title}>پنل کاربری</p>   
                </div> 

                <div className={LoginStyles.userProfile_userDetails}>
                    <p className={LoginStyles.userDetails_details}>{user.email}</p>
                    <p className={LoginStyles.userDetails_title}> : ایمیل</p>
                </div>

            <button onClick={()=> {return userDispatch(null) , setIsUserProfile(false) , toast.warning("از حساب خود خارج شده اید")}} className={`${LoginStyles.submitBtn} ${LoginStyles.submitBtn_active}`}>خروج از حساب کاربری</button>


            </div>
        </div>
        </React.Fragment>
    )
}
 
export default UserProfile;