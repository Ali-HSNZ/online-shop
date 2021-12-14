import Styles from './Header.module.css'
import {BiShoppingBag , BiX , BiUser , BiSearch ,BiMenu} from "react-icons/bi";
import  LoginStyles from'../user/LoginStyles.module.css'
import {NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User , IsCalledUserLoginDispatch , IsCalledUserLogin} from '../../Context/userProvider/UserProvider';
import { withRouter } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
import Login from '../user/Login/Login';
import Signup from '../user/Signup/Signup';
import { FaUserCheck } from "react-icons/fa";
import { AiFillCaretUp ,AiFillCaretLeft } from "react-icons/ai";
// import MenuStyles from '../MenuStyles.module.css'
import UserProfile from '../user/panel/Panel'
import axios from 'axios';
import Menu from '../Menu/Menu'

import SearchComponent from '../Search/Search';



const Header = (props) => {



    const user = User()
    const {cart} = UseCart()

    const isUserLogin = IsCalledUserLogin()
    const setIsUserLogin = IsCalledUserLoginDispatch()
    const [closeMenu , setCloseMenu] = useState(false)
    const [closeSearch , setCloseSearch] = useState(false)
    const [categories , setCategories] = useState(null)


    const [isUserSignup , setIsUserSignup] = useState(false)
    const [isMenu , setIsMenu] = useState(false)
    const [isUserProfile , setIsUserProfile] = useState(false)
    const [isSearch , setIsSearch] = useState(false)




    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then(e => setCategories(e.data)).catch();
    },[])




    const UserPanel = ()=>{
        return(
            <React.Fragment>
                <div className={LoginStyles.parent} onClick={()=>setIsUserLogin(false)}></div>
                        <div className={LoginStyles.center}>
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
                       
                   </div>
            </React.Fragment>
        )
    }




    

    return (
        <>
        <div className={Styles.parent}>

            <div className={Styles.header}>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}  onClick={(e)=>{return setIsUserProfile(false) & setIsSearch(false) & setIsUserLogin(false) & setCloseMenu(false) & setIsMenu(false)}}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.59em"/>
                        {cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    <button className={Styles.iconParent_Button} onClick={()=> {return user ?  setIsUserProfile(true)  & setIsSearch(false) &  setCloseMenu(false) & setIsMenu(false):  setIsUserLogin(true) &  setIsSearch(false) &  setCloseMenu(false) & setIsMenu(false)}}>
                        {user ? <FaUserCheck className={Styles.iconStyle} size="1.9em"/> :  <BiUser  className={Styles.iconStyle} size="1.9em"/>}
                    </button>


                    <button className={Styles.iconParent_Button} onClick={()=> {return setIsSearch(true) & setCloseMenu(false) & setIsMenu(false) & setIsUserProfile(false) & setIsUserLogin(false) & setCloseSearch(false)} }>
                       <BiSearch className={Styles.iconStyle} size="1.8em"/>            
                    </button>

                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact   onClick={(e)=>{return setIsUserProfile(false) &  setIsSearch(false) & setIsUserLogin(false) & setIsMenu(false)}} >خانه</NavLink>

                    <button className={Styles.menu} onClick={()=>{return setIsMenu(!isMenu) & setCloseMenu(false) &  setIsSearch(false) & setIsUserProfile(false) & setIsUserLogin(false)}}> <BiMenu size='2.5em'/></button>

                </div>

            </div> 
        </div>
            {isUserLogin=== true && <UserPanel />}
            {isUserProfile === true && <UserProfile setIsUserProfile={setIsUserProfile}/>}
            {isMenu === true && !closeMenu && (
                <div className={Styles.menuParent} dir='rtl'>
                    <Menu categories={categories} setIsMenu={setIsMenu} closeMenu={closeMenu} isMenu={isMenu} setCloseMenu={setCloseMenu}/>
                </div>
            )}
            {isSearch === true && !closeSearch && <SearchComponent setIsSearch={setIsSearch} setIsMenu={setIsMenu}/>}
          </>
    );
  };

  export default withRouter(Header);