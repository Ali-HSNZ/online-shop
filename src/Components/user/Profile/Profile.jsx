import {BiX} from "react-icons/bi";
import  UserStyles from'../User.module.css'
import { User , UserDispatch} from '../../../Context/userProvider/UserProvider';
import React from 'react';
import { AiFillCaretUp} from "react-icons/ai";
import { toast } from 'react-toastify';
const UserProfile = ({setIsUserProfile  })=> {
    const user = User()
    const userDispatch = UserDispatch()
    
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
                            <p className={UserStyles.userDetails_details}>{user.email}</p>
                            <p className={UserStyles.userDetails_title}> : ایمیل</p>
                        </div>

                    <button onClick={()=> {return userDispatch(null) , setIsUserProfile(false) , toast.warning("از حساب خود خارج شده اید")}} className={`${UserStyles.submitBtn} ${UserStyles.submitBtn_active}`}>خروج از حساب کاربری</button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfile;
