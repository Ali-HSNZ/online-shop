import Styles from './UserPage.module.css'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";



const UserPage = () => {


    const onSubmit = () => {

    }

    const initialValues = {
        userName : '',
        email : '',
        phoneNumber : '',
        password : '',
        rePassword : '',
    }


    const userNameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{3,15}$/
    const phoneRegExp = /^(?:98|\+98|0098|0)?9[0-9]{9}$/

    const validationSchema = Yup.object({
        userName : Yup.string().required("نام را وارد کنید").matches(userNameRegExp,"نام را به فارسی وارد کنید (3 تا 15 حرف)"),
        email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
        phoneNumber : Yup.string().required("شماره موبایل وارد کنید").matches(phoneRegExp , "شماره موبایل معتبر نیست"),
    })


    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true
    })

    console.table(formik)

    return (  
        <div className={Styles.parent}>
           <form className={Styles.center} onSubmit={formik.handleSubmit}>
               <div className={Styles.header}><p> ثبت نام کاربر</p></div>
               
               <div className={Styles.group}>
                    <p dir="rtl">نام کاربری : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='userName' type="text"  placeholder="نام کاربری خود را فارسی وارد کنید"/>
                    {/* <span>نام کاربری شما اشتباه است</span> */}
                    {formik.errors.userName && formik.touched.userName && <span>{formik.errors.userName}</span>}

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
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' type="password" placeholder="رمز عبور خود را به انگلیسی وارد کنید"/>
               </div>


               <div className={Styles.group}>
                    <p dir="rtl"> تکرار رمز عبور : </p>
                    <input name='rePassword' type="password" placeholder="رمز عبور خود را تکرار کنید"/>
               </div>



               <button 
                    type="submit" 
                    disabled={!formik.isValid} title={formik.isValid === false && "لطفا مقادیر خواسته شده را وارد کنید"}
                    className={`${Styles.submitBtn} ${formik.isValid === true ? Styles.submitBtn_active : Styles.submitBtn_disable}`}>
                    ثبت نام
                   {formik.isValid === false &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"5px" , color:'red'}}/>}
                </button>

           </form>
        </div>
    );
}
 
export default UserPage;