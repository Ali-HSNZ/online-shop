import Styles from './UserSignup.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { signupUser } from '../../services/signupService';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';


const UserSignup = () => {

     const [error , setError] = useState(null)


    const onSubmit = async(values) => {

          const {name , email ,  phoneNumber , password} = values;

          const userData = {name , email ,  phoneNumber , password}

          try {
              const {data}= await signupUser(userData)
              setError(null)        
              

          } catch (error) {
               toast.error()
               // console.log("error : ",error.response.data.message)
               if(error.response && error.response.data.message){
                    // setError(error.response.data.message)
                    toast.error(error.response.data.message)
               }
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
    const phoneRegExp = /^(?:98|\+98|0098|0)?9[0-9]{9}$/
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/

     const validationSchema = Yup.object({
          name : Yup.string().required("نام را وارد کنید").matches(userNameRegExp,"نام را به فارسی وارد کنید (6 تا 15 حرف)"),
          email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
          phoneNumber : Yup.string().required("شماره موبایل وارد کنید").matches(phoneRegExp , "شماره موبایل معتبر نیست"),
          password : Yup.string().required("رمز عبور خود را وارد کنید").matches(passwordRegExp , "رمز بیشتر از 6 کاراکتر باشد ( انگلیسی : حرف کوچک، بزرگ و عدد)"),
          rePassword: Yup.string().required("از رمز عبور خود مطمئن شوید").oneOf([Yup.ref('password'), null], 'رمزعبور باید مطابقت داشته باشد')
          
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
               <div className={Styles.header}><p> ثبت نام کاربر</p></div>
               
               <div className={Styles.group}>
                    <p dir="rtl">نام کاربری : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='name' type="text"  placeholder="نام کاربری خود را فارسی وارد کنید"/>
                    {/* <span>نام کاربری شما اشتباه است</span> */}
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span>}

               </div>

               <div className={Styles.group}>
                    <p dir="rtl">ایمیل : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' type="email" placeholder="ایمیل خود را وارد کنید"/>
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span>}
               </div>

               <div className={Styles.group}>
                    <p dir="rtl">شماره تماس : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNumber' type="tel" placeholder="شماره همراه خود را وارد کنید"/>
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <span>{formik.errors.phoneNumber}</span>}
               </div>

               <div className={Styles.group}>
                    <p dir="rtl">رمز عبور : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' type="text" placeholder="رمز عبور خود را به انگلیسی وارد کنید"/>
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span>}
               </div>


               <div className={Styles.group}>
                    <p dir="rtl"> تکرار رمز عبور : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='rePassword' type="password" placeholder="رمز عبور خود را تکرار کنید"/>
                    {formik.errors.rePassword && formik.touched.rePassword && <span>{formik.errors.rePassword}</span>}
               </div>


               <div className={Styles.submitBtnParent}>
                    <button 
                         type="submit" 
                         disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}
                         className={`${Styles.submitBtn} ${formik.isValid === true ? Styles.submitBtn_active : Styles.submitBtn_disable}`}>
                         ثبت نام
                    {!formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                    </button>

                    <Link className={Styles.loginLink}>!قبلا ثبت نام کرده اید ؟</Link>
               </div>

               {/* {error && <p style={{color:'red' , textAlign:'center' , fontFamily:'iransansweb'}}>{error}</p>} */}

           </form>
        </div>
    );
}
 
export default UserSignup;