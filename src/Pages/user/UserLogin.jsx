import Styles from './UserSignup.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { userLogin } from '../../services/loginService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { UserDispatch , User } from '../../Context/userProvider/UserProvider';
import {useQuery} from '../../hooks/useQuery'
import SmallLoading from '../../common/small Loding/SmallLoading'

const UserLogin = (props) => {
    const dispatchUser = UserDispatch()

    const [isLoading , setIsLoading] = useState(false)

    const userData = User()
    
    const query = useQuery()
    const redirect = query.get('redirect') || "/";
    const changeRedirectAddress = redirect === "Home" ? "/" : redirect

    useEffect(()=>{
        if(userData) props.history.push(changeRedirectAddress)
    },[changeRedirectAddress , userData , props.history])
    

    const onSubmit = async(values) => {
        const {email , password} = values

        const userData = {email , password}
        setIsLoading(true)
       
            try {
                const data = await userLogin(userData)     
                setIsLoading(false)
                toast.success("با موفقیت وارد شدید")
                dispatchUser(JSON.parse( data.config.data))
                props.history.push(changeRedirectAddress)
            } catch (e) {
                toast.error(e.response.data.message)
                setIsLoading(false)
            }
        
      

    }

    const initialValues = {
        email : '',
        password : '',
    }
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8})/

    const validationSchema = Yup.object({
        email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
        password : Yup.string().required("رمز عبور خود را وارد کنید").matches(passwordRegExp , "رمز بیشتر از 8 کاراکتر باشد ( انگلیسی : حرف کوچک، بزرگ و عدد)"),
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
              
               <div className={Styles.group}>
                    <p dir="rtl">ایمیل : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' type="text"  placeholder="ایمیل خود را وارد کنید"/>
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}

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
                        {isLoading ? <SmallLoading/> : "ورود"}
        
                        
                    {!isLoading && !formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                    </button>

                    <Link to={`/user-signup?redirect=${redirect}`}  className={Styles.loginLink}>!هنوز ثبت نام نکرده اید ؟</Link>

                </div>
           </form>
        </div>
    );
}
 
export default UserLogin;