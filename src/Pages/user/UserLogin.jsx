import Styles from './UserSignup.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { loginUser } from '../../services/loginService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { UserDispatch , User } from '../../Context/userProvider/UserProvider';
import {useQuery} from '../../hooks/useQuery'
import axios from 'axios';


const UserLogin = (props) => {
    const dispatchUser = UserDispatch()

    const [error , setError] = useState(null);

    const userData = User()
    
    const query = useQuery()
    const redirect = query.get('redirect') || "/";
    const changeRedirectAddress = redirect === "Home" ? "/" : redirect

    useEffect(()=>{
        if(userData) props.history.push(changeRedirectAddress)
    },[redirect , userData])
    

    const onSubmit = async(values) => {
        const {username , password} = values

        // const userData = {email , password}

        

        try {
            // const {data} = await loginUser(userData)     
            setError(null)        
            // localStorage.setItem('user',JSON.stringify(data))
            // const {name} = data
            // toast.success(`${name} خوش آمدید`)


            const {data} = await axios.post("https://fakestoreapi.com/auth/login",{
                username:username,
                password:password
            })

            if(data.status === "Error"){
                toast.error(data.msg)
                dispatchUser(null)

            }
            else{
                dispatchUser(data)
                props.history.push(changeRedirectAddress)
            }
            console.log("data in user Login : ",data)
            // dispatchUser(data)
           
            // {status: 'Error', msg: 'username or password is incorrect'}


        } catch (error) {
            dispatchUser(null)
            if(error.response && error.response.data.message){
                // setError(error.response.data.message)
                toast.error(error.response.data.message)
           }
        }

    }

    const initialValues = {
        username : '',
        // email : '',
        // phoneNumber : '',
        password : '',
        // rePassword : '',
    }


    // const nameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{3,15}$/
    const phoneRegExp = /^(?:98|\+98|0098|0)?9[0-9]{9}$/
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8})/

    const validationSchema = Yup.object({
        // username : Yup.string().required("نام را وارد کنید").matches("نام را به فارسی وارد کنید (3 تا 15 حرف)"),
        // email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
        // phoneNumber : Yup.string().required("شماره موبایل وارد کنید").matches(phoneRegExp , "شماره موبایل معتبر نیست"),
        password : Yup.string().required("رمز عبور خود را وارد کنید").matches(passwordRegExp , "رمز بیشتر از 8 کاراکتر باشد ( انگلیسی : حرف کوچک، بزرگ و عدد)"),
        // rePassword: Yup.string().required("از رمز عبور خود مطمئن شوید").oneOf([Yup.ref('password'), null], 'رمزعبور باید مطابقت داشته باشد')
        
    })


    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true
    })

    return (  
        <div className={Styles.parent}>
           <form className={Styles.center} onSubmit={formik.handleSubmit}>
               <div className={Styles.header}><p>ورود  به سایت</p></div>
               
               {/* <div className={Styles.group}>
                    <p dir="rtl">ایمیل : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' type="text"  placeholder="ایمیل خود را وارد کنید"/>
                 
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}

               </div> */}

               <div className={Styles.group}>
                    <p dir="rtl">نام کاربری : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='username' type="text"  placeholder="نام کاربری خود را وارد کنید"/>
                    {/* <span>نام کاربری شما اشتباه است</span> */}
                    {formik.errors.username && formik.touched.username && <span>{formik.errors.username}</span>}

               </div>

               <div className={Styles.group}>
                    <p dir="rtl">رمز عبور : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' type="text" placeholder="رمز عبور خود را به انگلیسی وارد کنید"/>
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span>}
               </div>


               <div className={Styles.submitBtnParent}>
                <button 
                        type="submit" 
                        disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}
                        className={`${Styles.submitBtn} ${formik.isValid === true ? Styles.submitBtn_active : Styles.submitBtn_disable}`}>
                        ورود
                    {!formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                    </button>

                    <Link to={`/user-signup?redirect=${redirect}`}  className={Styles.loginLink}>!هنوز ثبت نام نکرده اید ؟</Link>

                </div>
           </form>
        </div>
    );
}
 
export default UserLogin;