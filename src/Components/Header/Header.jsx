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

import { BsInfoCircleFill } from "react-icons/bs";



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


    console.log("closeMenu : ",closeMenu ," ||| ", "isMenu : ",isMenu )


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


    const SearchComponent = ()=>{

        const searchInputRef = useRef()


        const [searchValue , setSearchValue] = useState("")

        useEffect(()=>{
            searchInputRef.current.focus()
        },[])

        return(
            <>
                <div className={LoginStyles.parent} onClick={()=>setIsSearch(false)}></div>
                <div className={Styles.centerSearch}>
                <div className={Styles.mainSearch} onClick={()=>setIsSearch(true)}>

                <div className={Styles.arrow}>
                    <AiFillCaretUp size="2em"/>
                </div>

                    <div className={LoginStyles.header}>
                        <button onMouseUp={()=>setIsSearch(false)}>
                            <BiX size="2em"/>
                        </button>
                        <p className={LoginStyles.title}>جستجو محصول</p>   
                    </div> 

            <div className={LoginStyles.group}>
                <div className={LoginStyles.inputName} dir="rtl">
                    <p className={LoginStyles.groupName} dir="rtl">نام محصول : </p> 
                    <div className={LoginStyles.infoParent}>
                        <BsInfoCircleFill className={LoginStyles.info} size="1.1em"/>
                        <div className={LoginStyles.infoTextParent}>
                            <p className={LoginStyles.infoText} >نام محصولی که دنبال آن میگردید را وارد کنید. </p>
                            <AiFillCaretLeft size="1.4em" className={LoginStyles.iconArrow}/>
                        </div>
                    </div>
                </div>
                <input type="text" ref={searchInputRef} style={{border:'1px solid gray'}} value={searchValue} placeholder="جستجو محصول..." dir="rtl" onChange={ e => setSearchValue(e.target.value)}/>
                <div className={LoginStyles.inputIcon}> <BiSearch size="1.2em"/> </div>
            </div>

            <NavLink to={`/search?productName=${searchValue}`} className={Styles.submitSearchBtn} onClick={()=> setCloseSearch(true)}>جستجو</NavLink>
            
                </div>
            </div>
            </>
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

                    <button className={Styles.iconParent_Button} onClick={()=> {return user ?  setIsUserProfile(true) :  setIsUserLogin(true) &  setIsSearch(false) &  setCloseMenu(false) & setIsMenu(false)}}>
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
            {isSearch === true && !closeSearch && <SearchComponent/>}
          </>
    );
  };

  export default withRouter(Header);