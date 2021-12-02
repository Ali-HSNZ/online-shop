import Styles from './Header.module.css'
import Logo from '../../image/logo.png'
import {BiShoppingBag , BiX , BiUser , BiSearch , BiHeart , BiDotsVerticalRounded} from "react-icons/bi";
import  LoginStyles from'../user/LoginStyles.module.css'
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User , UserDispatch , IsCalledUserLoginDispatch , IsCalledUserLogin} from '../../Context/userProvider/UserProvider';
import { withRouter } from 'react-router';
import React, { useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import Login from '../user/Login/Login';
import Signup from '../user/Signup/Signup';
import { FaUserCheck } from "react-icons/fa";
import { AiFillCaretUp ,AiFillCaretLeft , AiFillStar} from "react-icons/ai";
// import MenuStyles from '../MenuStyles.module.css'
import UserProfile from '../user/panel/Panel'
import axios from 'axios';
import SmallLoading from '../../common/small Loding/SmallLoading';
import Menu from '../Menu/Menu'




const Header = (props) => {



    const user = User()
    const userDispatch = UserDispatch()
    const {cart} = UseCart()
    const [isUserSignup , setIsUserSignup] = useState(false)
    const [isMenu , setIsMenu] = useState(false)
    const [isUserProfile , setIsUserProfile] = useState(false)
    const setIsUserLogin = IsCalledUserLoginDispatch()
    const isUserLogin = IsCalledUserLogin()
    const [closeMenu , setCloseMenu] = useState(false)

    const [categories , setCategories] = useState(null)

    const filteredCategories = categories&&categories.filter( e => e !== "men's clothing")


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then(e => setCategories(e.data))
        .catch()
    },[])




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




    


    return (
        <>
        <div className={Styles.parent}>

            <div className={Styles.header}>
                <button className={Styles.menu} onClick={()=>{return setIsMenu(true) ,setCloseMenu(false) , setIsUserProfile(false) ,setIsUserLogin(false)}}> <BiDotsVerticalRounded size='1.7em'/></button>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}  onClick={(e)=>{return setIsUserProfile(false) ,setIsUserLogin(false) , setIsMenu(false)}}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.7em"/>
                        {cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    {/* <NavLink activeClassName={Styles.activeLink} className={`${Styles.iconParent} ${Styles.iconParent_like}`} to={`/user-like`} exact   onClick={(e)=>{return setIsUserProfile(false) ,setIsUserLogin(false) , setIsMenu(false)}}>
                        <BiHeart className={Styles.iconStyle} size="1.7em"/>            
                    </NavLink> */}
                    
                    <button className={Styles.iconParent_Button} onClick={()=> {return user ?  setIsUserProfile(true) :  setIsUserLogin(true) ,  setIsMenu(false)}}>
                        {user ? <FaUserCheck className={Styles.iconStyle} size="2em"/> :  <BiUser  className={Styles.iconStyle} size="2em"/>}
                    </button>


                    <button className={Styles.iconParent_Button} >
                       <BiSearch className={Styles.iconStyle} size="2em"/>            
                    </button>

                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact   onClick={(e)=>{return setIsUserProfile(false) ,setIsUserLogin(false) , setIsMenu(false)}} >خانه</NavLink>
                    <div className={Styles.logoParent}>
                        <Link to="/" className={Styles.link_Logo}>
                            <img className={Styles.logoParent_Img} alt="لوگو" src={Logo}/>
                        </Link>
                    </div>
                </div>


            </div> 
        </div>
            {isUserLogin=== true && <UserPanel />}
            {isUserProfile === true && <UserProfile setIsUserProfile={setIsUserProfile}/>}
            {isMenu === true && !closeMenu && <Menu categories={categories} setIsMenu={setIsMenu} setCloseMenu={setCloseMenu}/>}
          </>
    );
  };

  export default withRouter(Header);