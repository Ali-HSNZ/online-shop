import { AiFillCaretLeft} from "react-icons/ai";
import  UserStyles from '../User.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { FiAlertTriangle } from "react-icons/fi";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { UserDispatch} from '../../../Context/userProvider/UserProvider';
import SmallLoading from '../../../common/small Loding/SmallLoading'
import {BiHide , BiShow , BiX , BiUser} from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoAt } from "react-icons/io5";
import { userSignup } from "../../../services/signupService";



const Signup = ({setIsUserLogin , setIsUserSignup}) => {
   
   
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
        setIsLoading(true)
        const {name , email , password} = values;
        const userData = {name , email , password}
        try {
            const data = await userSignup(userData)
            setIsLoading(false)
            console.log(data)
             toast.success('ثبت نام شما با موفقیت انجام شد')
             dispatchUser(JSON.parse( data.config.data))
             if(data){
                setIsUserSignup(false)
                setIsUserLogin(false)
             }
        } catch (error) {
             setIsLoading(false)
             toast.error(error.response.data.message)

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
            
            <div className={UserStyles.header}>
                <button onMouseUp={()=>setIsUserLogin(false)}>
                    <BiX size="2em"/>
                </button>
                <p className={UserStyles.title}>ثبت نام در سایت</p>   
            </div> 

            <div className={UserStyles.group}>
                <div className={UserStyles.inputName} dir="rtl">
                    <p className={UserStyles.groupName} dir="rtl">نام کاربری : </p> 
                    <div className={UserStyles.infoParent}>
                        <BsInfoCircleFill className={UserStyles.info} size="1.1em"/>
                        <div className={UserStyles.infoTextParent}>
                            <p className={UserStyles.infoText} >نام را به فارسی وارد کنید (6 تا 15 حرف) </p>
                            <AiFillCaretLeft size="1.4em" className={UserStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type="text" style={formik.errors.name ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='name'  placeholder="نام کاربری خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl" />
                <div className={UserStyles.inputIcon}> <BiUser size="1.2em"/> </div>
                {formik.errors.name && formik.touched.name && <p className={UserStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.name}</p>}
            </div>


            <div className={UserStyles.group}>
                <div className={UserStyles.inputName} dir="rtl">
                    <p className={UserStyles.groupName} dir="rtl">ایمیل : </p> 
                    <div className={UserStyles.infoParent}>
                        <BsInfoCircleFill className={UserStyles.info} size="1.1em"/>
                        <div className={UserStyles.infoTextParent}>
                            <p className={UserStyles.infoText} >ایمیل باید شامل '.' و '@' و معتبر باشد </p>
                            <AiFillCaretLeft size="1.4em" className={UserStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type="email" style={formik.errors.email ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='email' placeholder="ایمیل خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl" />
                <div className={UserStyles.inputIcon}> <IoAt size="1.2em"/> </div>
                {formik.errors.email && formik.touched.email && <p className={UserStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.email}</p>}
            </div>


            <div className={UserStyles.group}>
                <div className={UserStyles.inputName} dir="rtl">
                    <p className={UserStyles.groupName} dir="rtl">رمز ورود : </p> 
                    <div className={UserStyles.infoParent}>
                        <BsInfoCircleFill className={UserStyles.info} size="1.1em"/>
                        <div className={UserStyles.infoTextParent}>
                            <p className={UserStyles.infoText} >رمز ورود باید بیشتر از 8 کاراکتر باشد ( انگلیسی : حرف کوچک، حرف بزرگ و عدد)</p>
                            <AiFillCaretLeft size="1.4em" className={UserStyles.iconArrow_pass}/>
                        </div>
                    </div>
                </div>
                <input type={isShowPass ? "text" : "password"} style={formik.errors.password ? {border:'1px solid brown'} : {border:'1px solid green'}} onChange={formik.handleChange} name='password'  placeholder="رمز ورود خود را وارد کنید..." onBlur={formik.handleBlur} dir="rtl"/>
                
                <button className={`${UserStyles.inputIcon} ${UserStyles.inputIcon_btn} `} onClick={()=>setIsShowPass(!isShowPass)}>                          
                    {isShowPass ? <BiShow size="1.4em"/> :  <BiHide size="1.4em"/>}
                </button>

                {formik.errors.password && formik.touched.password && <p className={UserStyles.errorText} style={{fontSize:'12px'}}>{formik.errors.password}</p>}
            </div>
                    

            <div>
                <button 
                    type="submit" 
                    disabled={!formik.isValid} title={!formik.isValid ? "لطفا مقادیر خواسته شده را وارد کنید" : ""}
                    className={`${UserStyles.submitBtn} ${formik.isValid ? UserStyles.submitBtn_active : UserStyles.submitBtn_notActive}`}>
                    
                    {isLoading ? <SmallLoading/> : "ثبت نام"}
                    {!isLoading && !formik.isValid &&  <FiAlertTriangle size="1.3rem" style={{marginLeft:"8px" , color:'#ff6969'}}/>}
                </button>
            </div>
           <button onClick={()=> setIsUserSignup(false)} className={UserStyles.linkToSignup}>!از قبل ثبت نام کرده اید؟</button>
        </form>
    );
}
 
export default Signup;