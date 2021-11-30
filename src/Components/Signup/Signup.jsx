import { AiFillCaretUp ,AiFillCaretLeft} from "react-icons/ai";
import  LoginStyles from '../Header/LoginStyles.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { useState } from 'react';
import { userLogin } from '../../services/loginService';
import { toast } from 'react-toastify';
import { UserDispatch} from '../../Context/userProvider/UserProvider';
import SmallLoading from '../../common/small Loding/SmallLoading'
import {BiHide , BiShow , BiX , BiUser} from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoAt } from "react-icons/io5";
import { Link } from "react-router-dom";



const Signup = ({setIsUserLogin , seIsUserSignup}) => {
   
   
    const dispatchUser = UserDispatch()

    const [isLoading , setIsLoading] = useState(false)

    const [isShowPass , setIsShowPass] =  useState(false)


    const initialValues = {
        name : '',
        email : '',
        password : '',
    }

    const nameRegExp = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ]{6,30}$/
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

     const validationSchema = Yup.object({
          name : Yup.string().required("نام را وارد کنید").matches(nameRegExp,"نام را به فارسی وارد کنید (6 تا 15 حرف)"),
          email: Yup.string().email("ایمیل را به درستی وارد کنید").required("ایمیل را وارد کنید"),
          password : Yup.string().required("رمز عبور خود را وارد کنید").matches(passwordRegExp , "رمز بیشتر از 8 کاراکتر باشد ( انگلیسی : حرف کوچک، بزرگ و عدد)"),
     })



    const onSubmit = async(values) => {
        const {email , password} = values

        const userData = {
            email,
            password
        }

        setIsLoading(true)
       
            try {
                const data = await userLogin(userData)     
                setIsLoading(false)
                toast.success("با موفقیت وارد شدید")
                dispatchUser(JSON.parse( data.config.data))
                if(data.config.data){
                    setIsUserLogin(false)
                }
            } catch (e) {
                toast.error(e.response.data.message)
                console.log(e.response)
                setIsLoading(false)

            }
    }



    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true
    })
   
    return (
        <form  onSubmit={formik.handleSubmit}>

            <div className={LoginStyles.arrow}>
                <AiFillCaretUp size="2em"/>
            </div>

            <div className={LoginStyles.header}>
                <button onMouseUp={()=>setIsUserLogin(false)}>
                    <BiX size="2em"/>
                </button>
                <p className={LoginStyles.title}>ثبت نام در سایت</p>   
            </div> 

            <div className={LoginStyles.group}>
                <div className={LoginStyles.inputName} dir="rtl">
                    <p className={LoginStyles.groupName} dir="rtl">نام کاربری : </p> 
                    <div className={LoginStyles.infoParent}>
                        <BsInfoCircleFill className={LoginStyles.info} size="1.1em"/>
                        <div className={LoginStyles.infoTextParent}>
                            <p className={LoginStyles.infoText} >نام را به فارسی وارد کنید (6 تا 15 حرف) </p>
                            <AiFillCaretLeft size="1.4em" className={LoginStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type="text" style={formik.errors.name ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='name' type='text' placeholder="نام کاربری خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl" />
                <div className={LoginStyles.inputIcon}> <BiUser size="1.2em"/> </div>
                {formik.errors.name && formik.touched.name && <p className={LoginStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.name}</p>}
            </div>


            <div className={LoginStyles.group}>
                <div className={LoginStyles.inputName} dir="rtl">
                    <p className={LoginStyles.groupName} dir="rtl">ایمیل : </p> 
                    <div className={LoginStyles.infoParent}>
                        <BsInfoCircleFill className={LoginStyles.info} size="1.1em"/>
                        <div className={LoginStyles.infoTextParent}>
                            <p className={LoginStyles.infoText} >ایمیل باید شامل '.' و '@' و معتبر باشد </p>
                            <AiFillCaretLeft size="1.4em" className={LoginStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type="text" style={formik.errors.email ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='email' type='text' placeholder="ایمیل خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl" />
                <div className={LoginStyles.inputIcon}> <IoAt size="1.2em"/> </div>
                {formik.errors.email && formik.touched.email && <p className={LoginStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.email}</p>}
            </div>


            <div className={LoginStyles.group}>
                <div className={LoginStyles.inputName} dir="rtl">
                    <p className={LoginStyles.groupName} dir="rtl">رمز ورود : </p> 
                    <div className={LoginStyles.infoParent}>
                        <BsInfoCircleFill className={LoginStyles.info} size="1.1em"/>
                        <div className={LoginStyles.infoTextParent}>
                            <p className={LoginStyles.infoText} >رمز ورود باید بیشتر از 8 کاراکتر باشد ( انگلیسی : حرف کوچک، حرف بزرگ و عدد)</p>
                            <AiFillCaretLeft size="1.4em" className={LoginStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type={isShowPass ? "text" : "password"} style={formik.errors.password ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='password'  placeholder="رمز ورود خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl"/>
                
                <a className={`${LoginStyles.inputIcon} ${LoginStyles.inputIcon_btn} `} onClick={()=>setIsShowPass(!isShowPass)}>                          
                    {isShowPass ? <BiShow size="1.4em"/> :  <BiHide size="1.4em"/>}
                </a>

                {formik.errors.password && formik.touched.password && <p className={LoginStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.password}</p>}
            </div>
                    

            <div>
                <button 
                    type="submit" 
                    disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}
                    className={`${LoginStyles.submitBtn} ${formik.isValid ? LoginStyles.submitBtn_active : LoginStyles.submitBtn_notActive}`}>
                    
                    {isLoading ? <SmallLoading/> : "ورود"}
                    {!isLoading && !formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                </button>
            </div>
           <button onClick={()=> seIsUserSignup(false)}>ورود به سایت</button>
        </form>
    );
}
 
export default Signup;