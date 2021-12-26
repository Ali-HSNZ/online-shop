import {BiX} from "react-icons/bi";
import  UserStyles from'../User.module.css'

import React from 'react';
import { AiFillCaretUp} from "react-icons/ai";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../redux/user/userActions";


const UserProfile = ({setIsUserProfile  })=> {

    const user = useSelector(state => state.userLogin.data)

    const dispatch = useDispatch()
    
    return(
        <React.Fragment>
            <div className={UserStyles.parent} onClick={()=>setIsUserProfile(false)}></div>
                <div className={UserStyles.center}>
                        <div className={`${UserStyles.main} ${UserStyles.main_userProfile}`}>

                        <div className={UserStyles.arrowProfile}>
                            <AiFillCaretUp size="2em"/>
                        </div>

                        <div className={UserStyles.header}>
                            <button onClick={()=>setIsUserProfile(false)}>
                                <BiX size="2em"/>
                            </button>
                            <p className={UserStyles.title}>پنل کاربری</p>   
                        </div> 

                        <div className={UserStyles.userProfile_userDetails}>
                            <p className={UserStyles.userDetails_details}>{user}</p>
                            <p className={UserStyles.userDetails_title}> : ایمیل</p>
                        </div>

                    <button onClick={()=> {return dispatch(userLogout()) , setIsUserProfile(false) , toast.warning("از حساب خود خارج شده اید")}} className={`${UserStyles.submitBtn} ${UserStyles.submitBtn_active}`}>خروج از حساب کاربری</button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile;
