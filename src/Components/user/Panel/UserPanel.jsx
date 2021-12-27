import  UserStyles from '../User.module.css'
import React from 'react';
import Login from "../Login/Login"
import Signup from '../Signup/Signup';
import { AiFillCaretUp } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { windowIsUserLogin } from '../../../redux/window/windowActions';

const UserPanel = ()=>{

    const window = useSelector(state => state.window)

    const dispatch = useDispatch()

    return(
        <React.Fragment>
            <div className={UserStyles.parent} onClick={()=>dispatch(windowIsUserLogin(false))}></div>
                <div className={UserStyles.center}>
                    <div className={UserStyles.main} onClick={()=>dispatch(windowIsUserLogin(true))}>
                        <div className={UserStyles.arrow}>
                            <AiFillCaretUp size="2em"/>
                        </div>
                        {window.isUserLogin === true && window.isUserSignup === false ? <Login/> : <Signup/> }
                    </div>
               </div>
        </React.Fragment>
    )
}
export default UserPanel