import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { User ,UserDispatch} from "../../../Context/userProvider/UserProvider";
import Styles from "./Profile.module.css"



const Profile = (props) => {
    const dispatch = UserDispatch()
    const user = User()

    console.log("user Profile : ",user)

    const logOutHandler =()=>{
        dispatch(null)
        toast.warning("از سیستم خارج شده اید")
        props.history.push("/")
    } 


    return (  
        <div className={Styles.parent}>
            <button onClick={()=>logOutHandler()}>
                خروج از حساب کاربری
            </button>
        </div>
    );
}
 
export default Profile;