import Styles from './UserSignup.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { userSignup } from '../../services/signupService';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useQuery} from '../../hooks/useQuery'
import { toast } from 'react-toastify';
import SmallLoading from '../../common/small Loding/SmallLoading';

const UserSignup = (props) => {
     
     const query = useQuery()
     const redirect = query.get('redirect') || "Home";
     const [isLoading , setIsLoading] = useState(false)


     const changeRedirectAddress = redirect === "Home" ? "/user-login?redirect=Home":`/user-login?redirect=${redirect}`


     const onSubmit = async(values) => {
          setIsLoading(true)
          const {name , email , password} = values;
          const userData = {name , email , password}
          try {
               await userSignup(userData)
               props.history.push(changeRedirectAddress)
               toast.success('ثبت نام شما با موفقیت انجام شد')
               setIsLoading(false)
          } catch (error) {
               setIsLoading(false)
               toast.error(error.response.data.message)
          }
     }

     const initialValues = {
          name : '',
          email : '',
          phoneNumber : '',
          password : '',
          rePassword : '',
     }



    const userNameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{6,30}$/
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

     const validationSchema = Yup.object({
          name : Yup.string().required("نام را وارد کنید").matches(userNameRegExp,"نام را به فارسی وارد کنید (6 تا 15 حرف)"),
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
               <div className={Styles.header}><p> ثبت نام در سایت</p></div>
               
               <div className={Styles.group}>
                    <p dir="rtl">نام کاربری : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='name' type="text"  placeholder="نام کاربری خود را فارسی وارد کنید"/>
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span>}

               </div>

               <div className={Styles.group}>
                    <p dir="rtl">ایمیل : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' type="email" placeholder="ایمیل خود را وارد کنید"/>
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
                         {isLoading ? <SmallLoading/> : "ثبت نام"} 
                         {!formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                    </button>

                    <Link to={`/user-login?redirect=${redirect}`} className={Styles.loginLink}>!قبلا ثبت نام کرده اید ؟</Link>
               </div>

           </form>
        </div>
    );
}
 
export default UserSignup;