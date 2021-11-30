import Styles from './Header.module.css'
import Logo from '../../image/logo.png'
import {BiShoppingBag , BiX , BiUser , BiSearch , BiHeart , BiDotsVerticalRounded} from "react-icons/bi";
import  LoginStyles from'./LoginStyles.module.css'
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User , UserDispatch} from '../../Context/userProvider/UserProvider';
import { withRouter } from 'react-router';
import React, { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { FaUserCheck } from "react-icons/fa";
import { AiFillCaretUp ,AiFillCaretLeft} from "react-icons/ai";
import { toast } from 'react-toastify';


const Header = (props ) => {


    const user = User()
    const userDispatch = UserDispatch()
    const {cart} = UseCart()
    const [isUserLogin , setIsUserLogin] = useState(false)
    const [isUserSignup , setIsUserSignup] = useState(false)
    const [isMenu , setIsMenu] = useState(false)
    const [isUserProfile , setIsUserProfile] = useState(false)



    const UserPanel = ()=>{
        return(
            <React.Fragment>
                <div className={LoginStyles.parent} onClick={()=>setIsUserLogin(false)}></div>
                
                <div className={LoginStyles.main} onClick={()=>setIsUserLogin(true)}>

                    <div className={LoginStyles.arrow}>
                        <AiFillCaretUp size="2em"/>
                    </div>

                    {isUserLogin === true && isUserSignup === false ?(
                        <Login setIsUserLogin={setIsUserLogin} setIsUserSignup={setIsUserSignup}/> 
                    ) : (
                        <Signup setIsUserSignup={setIsUserSignup} setIsUserLogin={setIsUserLogin}/>
                    )}
                </div>
            </React.Fragment>
        )
    }

    const UserProfile = ()=> {
        return(
            <React.Fragment>
                <div className={LoginStyles.parent} onClick={()=>setIsUserProfile(false)}></div>
                <div className={`${LoginStyles.main} ${LoginStyles.main_userProfile}`}>

                    <div className={LoginStyles.arrow}>
                        <AiFillCaretUp size="2em"/>
                    </div>

                    <div className={LoginStyles.header}>
                        <button onClick={()=>setIsUserProfile(false)}>
                            <BiX size="2em"/>
                        </button>
                        <p className={LoginStyles.title}>پنل کاربری</p>   
                    </div> 

                    <div className={LoginStyles.userProfile_userDetails}>
                        <p className={LoginStyles.userDetails_details}>{user.email}</p>
                        <p className={LoginStyles.userDetails_title}>ایمیل</p>
                    </div>

                <button onClick={()=> {return userDispatch(null) , setIsUserProfile(false) , toast.warning("از حساب خود خارج شده اید")}} className={`${LoginStyles.submitBtn} ${LoginStyles.submitBtn_active}`}>خروج از حساب کابری</button>


                </div>
            </React.Fragment>
        )
    }

    


    return (
        <>
        <div className={Styles.parent}>

            <div className={Styles.header}>
                <button className={Styles.menu} onClick={()=>setIsMenu(true)}> <BiDotsVerticalRounded size='1.7em'/></button>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}  onClick={(e)=>setIsUserLogin(false)}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.7em"/>
                        {cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    <NavLink activeClassName={Styles.activeLink} className={`${Styles.iconParent} ${Styles.iconParent_like}`} to={`/user-like`} exact  onClick={(e)=>setIsUserLogin(false)}>
                        <BiHeart className={Styles.iconStyle} size="1.7em"/>            
                    </NavLink>
                    {/* setIsUserProfile */}
                    
                    <button className={Styles.iconParent_Button} onClick={()=> user ?  setIsUserProfile(true) :  setIsUserLogin(true)}>
                        {user ? <FaUserCheck className={Styles.iconStyle} size="2em"/> :  <BiUser  className={Styles.iconStyle} size="2em"/>}
                    </button>


                    <button className={Styles.iconParent_Button} >
                       <BiSearch className={Styles.iconStyle} size="2em"/>            
                    </button>

                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact>خانه</NavLink>
                    <div className={Styles.logoParent}>
                        <Link to="/" className={Styles.link_Logo}>
                            <img className={Styles.logoParent_Img} alt="لوگو" src={Logo}/>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
            {isUserLogin=== true && <UserPanel />}
            {isUserProfile === true && <UserProfile/>}
          </>
    );
  };

  export default withRouter(Header);