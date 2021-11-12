import Styles from './Header.module.css'
import Logo from '../../image/logo.png'
import {BiSearch , BiShoppingBag , BiUser } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';

const Header = ( ) => {

    return (
        <>
            <div className={Styles.header}>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.7em"/>
                        <p className={Styles.cartCount}>2</p>
                    </NavLink>

                    <NavLink activeClassName={Styles.activeLink} className={Styles.iconParent} to="/search">
                        <BiSearch  className={Styles.iconStyle} size="1.7em"/>
                    </NavLink>

                    <NavLink activeClassName={Styles.activeLink} className={Styles.iconParent} to="/user">
                        <BiUser  className={Styles.iconStyle} size="1.7em"/>
                    </NavLink>
                   
                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact>خانه</NavLink>
                    <div className={Styles.logoParent}><img className={Styles.logoParent_Img} src={Logo}/></div>
                </div>

               

            

            </div> 
          
        </>
    );
  };
  
  export default Header;
  