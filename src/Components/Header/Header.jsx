import Styles from './Header.module.css'
import {BiShoppingBag , BiUser , BiSearch ,BiMenu} from "react-icons/bi";
import {NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User , IsCalledUserLoginDispatch , IsCalledUserLogin} from '../../Context/userProvider/UserProvider';
import React, { useEffect, useState } from 'react';
import { FaUserCheck } from "react-icons/fa";
import { AiFillCaretUp ,AiFillCaretLeft } from "react-icons/ai";
// import MenuStyles from '../MenuStyles.module.css'
import Profile from '../user/Profile/Profile'
import axios from 'axios';
import Menu from '../Menu/Menu'

import SearchComponent from '../Search/Search';
import UserPanel from '../user/Profile/Profile';



const Header = () => {
    const user = User()
    const {cart} = UseCart()

    const [closeSearch , setCloseSearch] = useState(false)
    const [categories , setCategories] = useState(null)


    const [isUserSignup , setIsUserSignup] = useState(false)
    const setIsUserLogin = IsCalledUserLoginDispatch()
    const isUserLogin = IsCalledUserLogin()
    const [isMenu , setIsMenu] = useState(false)
    const [isUserProfile , setIsUserProfile] = useState(false)
    const [isSearch , setIsSearch] = useState(false)


    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then(e => setCategories(e.data)).catch();
    },[])


    return (
        <>
        <div className={Styles.parent}>

            <div className={Styles.header}>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}  onClick={(e)=>{return setIsUserProfile(false) & setIsSearch(false) & setIsUserLogin(false) & setIsMenu(false)}}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.59em"/>
                        {cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    <button className={Styles.iconParent_Button} onClick={()=> {return user ?  setIsUserProfile(true)  & setIsSearch(false) &  setIsMenu(false):  setIsUserLogin(true) &  setIsSearch(false) & setIsMenu(false)}}>
                        {user ? <FaUserCheck className={Styles.iconStyle} size="1.9em"/> :  <BiUser  className={Styles.iconStyle} size="1.9em"/>}
                    </button>


                    <button className={Styles.iconParent_Button} onClick={()=> {return setIsSearch(true) & setIsMenu(false) & setIsUserProfile(false) & setIsUserLogin(false) & setCloseSearch(false)} }>
                       <BiSearch className={Styles.iconStyle} size="1.8em"/>            
                    </button>

                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact   onClick={(e)=>{return setIsUserProfile(false) &  setIsSearch(false) & setIsUserLogin(false) & setIsMenu(false)}} >خانه</NavLink>

                    <button className={Styles.menu} onClick={()=>{return setIsMenu(!isMenu)  &  setIsSearch(false) & setIsUserProfile(false) & setIsUserLogin(false)}}> <BiMenu size='2.5em'/></button>

                </div>

            </div> 
        </div>
            {isUserLogin=== true && <UserPanel/>}
            {isUserProfile === true && <Profile setIsUserProfile={setIsUserProfile}/>}
            {isMenu === true && (
                <div className={Styles.menuParent} dir='rtl'>
                    <Menu categories={categories} setIsMenu={setIsMenu} isMenu={isMenu}/>
                </div>
            )}
            {isSearch === true && !closeSearch && <SearchComponent setIsSearch={setIsSearch} setIsMenu={setIsMenu}/>}
          </>
    );
  };

  export default Header;