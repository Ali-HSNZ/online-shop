import Styles from './Header.module.css'
import {BiShoppingBag , BiUser , BiSearch ,BiMenu , BiX} from "react-icons/bi";
import {NavLink } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { FaUserCheck } from "react-icons/fa";

import UserProfile from '../user/Profile/Profile'
import Menu from '../Menu/Menu'

import SearchComponent from '../Search/Search';
import UserPanel from '../user/Panel/UserPanel';
import { useSelector , useDispatch} from 'react-redux';
import { userAutomatic} from '../../redux/user/userActions';

import { 
    windowCart,
    windowHome,
    windowMenu,
    windowSearch,
    windowUser 
} from '../../redux/window/windowActions';



const Header = () => {

    const cart = useSelector(state => state.cart.cart)
    const user = useSelector(state => state.userLogin.data)
    const window = useSelector(state => state.window)
    const dispatch = useDispatch()


    useEffect(()=> {
        const userData = JSON.parse(localStorage.getItem("user"))
        if(userData) dispatch(userAutomatic(userData))
    },[dispatch])


    return (
        <>
        <div className={Styles.parent}>

            <div className={Styles.header}>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent} onClick={()=>dispatch(windowCart())}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.59em"/>
                        {cart && cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    <button className={Styles.iconParent_Button} onClick={()=> dispatch(windowUser(user))}>
                        { user ? <FaUserCheck className={Styles.iconStyle} size="1.9em"/> :  <BiUser  className={Styles.iconStyle} size="1.9em"/>}
                    </button>


                    <button className={Styles.iconParent_Button} onClick={()=> dispatch(windowSearch())}>
                       <BiSearch className={Styles.iconStyle} size="1.8em"/>            
                    </button>

                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact  onClick={()=> dispatch(windowHome())} >خانه</NavLink>

                    <button className={Styles.menu} onClick={()=> dispatch(windowMenu())}>{window.isMenu ? <BiX size='2.5em'/> : <BiMenu size='2.5em'/>}</button>

                </div>

            </div> 
        </div>
        {window.isUserLogin=== true && <UserPanel/>}
        {window.isUserProfile === true && <UserProfile/>}
        {window.isMenu === true && <div className={Styles.menuParent} dir='rtl'> <Menu/> </div>}
        {window.isSearch && <SearchComponent/>}
        </>
    );
};

  export default Header;