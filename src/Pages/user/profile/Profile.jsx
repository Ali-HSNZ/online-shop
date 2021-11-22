import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


import { User ,UserDispatch} from "../../../Context/userProvider/UserProvider";
const Profile = (props) => {
    const dispatch = UserDispatch()
    

    const logOutHandler =()=>{
        dispatch(null)
        toast.warning("از سیستم خارج شده اید")
        props.history.push("/")
    } 


    return (  
        // <div className={Styles.parent}>
            <button onClick={()=>logOutHandler()} style={{padding:'20px 40px' , margin:'50px',cursor:'pointer'}}><h1>log Out</h1></button>

        // </div>
    );
}
 
export default Profile;