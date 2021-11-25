import { toast } from 'react-toastify';
import {UserDispatch} from "../../../Context/userProvider/UserProvider";
import Styles from "./Profile.module.css"



const Profile = (props) => {
    const dispatch = UserDispatch()

    const logOutHandler =()=>{
        dispatch(null)
        toast.warning("از حساب خود خارج شده اید")
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