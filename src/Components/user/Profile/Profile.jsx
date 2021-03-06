import {BiX} from "react-icons/bi";
import  UserStyles from'../User.module.css'

import React from 'react';
import { AiFillCaretUp} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../feature/user/userReducer";
import { windowIsUserProfile } from "../../../feature/window/windowReducer";


const UserProfile = ()=> {

    const user = useSelector(state => state.user.data)

    const dispatch = useDispatch()


    const logoutHandler = () => {
        dispatch(userLogout())
        dispatch(windowIsUserProfile(false))
    }
    
    return(
        <React.Fragment>
            <div className={UserStyles.parent} onClick={()=>dispatch(windowIsUserProfile(false))}></div>
                <div className={UserStyles.center}>
                        <div className={`${UserStyles.main} ${UserStyles.main_userProfile}`}>

                        <div className={UserStyles.arrowProfile}>
                            <AiFillCaretUp size="2em"/>
                        </div>

                        <div className={UserStyles.header}>
                            <button onClick={()=>dispatch(windowIsUserProfile(false))}>
                                <BiX size="2em"/>
                            </button>
                            <p className={UserStyles.title}>پنل کاربری</p>   
                        </div> 

                        <div className={UserStyles.userProfile_userDetails}>
                            <p className={UserStyles.userDetails_details}>{user}</p>
                            <p className={UserStyles.userDetails_title}> : ایمیل</p>
                        </div>

                    <button onClick={()=> logoutHandler()} className={`${UserStyles.submitBtn} ${UserStyles.submitBtn_active}`}>خروج از حساب کاربری</button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile;
