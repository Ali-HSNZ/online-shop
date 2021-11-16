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
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/

    const validationSchema = Yup.object({
        userName : Yup.string().required("نام را وارد کنید").matches(userNameRegExp,"نام را به فارسی وارد کنید (3 تا 15 حرف)"),
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
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' type="text" placeholder="رمز عبور خود را به انگلیسی وارد کنید"/>
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span>}
               </div>


               <div className={Styles.group}>
                    <p dir="rtl"> تکرار رمز عبور : </p>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='rePassword' type="password" placeholder="رمز عبور خود را تکرار کنید"/>
                    {formik.errors.rePassword && formik.touched.rePassword && <span>{formik.errors.rePassword}</span>}
               </div>



               <button 
                    type="submit" 
                    disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}
                    className={`${Styles.submitBtn} ${formik.isValid === true ? Styles.submitBtn_active : Styles.submitBtn_disable}`}>
                    ثبت نام
                   {!formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'red'}}/>}
                </button>

           </form>
        </div>
    );
}
 
export default UserPage;