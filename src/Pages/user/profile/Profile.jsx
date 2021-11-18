import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { User ,UserDispatch} from "../../../Context/userProvider/UserProvider";
const Profile = (props) => {
    // const userObject = JSON.parse(user)
    // const userObject = JSON.parse(user)
    const [user , setUser] = useState(null)
    const dispatch = UserDispatch()
    
    useEffect(()=>{
        var users =JSON.parse( localStorage.getItem("user") )
        setUser(users)
    },[])

    const logoutHandler =()=>{
        dispatch(null)
        toast.warning("از سیستم خارج شده اید")
        props.history.push("/")
    } 
    
    console.log(props)
    // console.log("user : ",user)
    return (  
        <div>
            {user ? <div>
                <p>ایمیل : {user.email}</p>
                <p>نام کاربری : {user.name}</p>
                <p>شماره تلفن : {user.phoneNumber}</p>
                <button onClick={logoutHandler}>Logout</button>
            </div> : <p>Loding...</p>}
            
        </div>
    );
}
 
export default Profile;