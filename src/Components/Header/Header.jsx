import Styles from './Header.module.css'
import Logo from '../../image/logo.png'
import {BiShoppingBag , BiUser , BiSearch , BiHeart , BiDotsVerticalRounded} from "react-icons/bi";
import  LoginStyles from'./LoginStyles.module.css'
import { Link, NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User } from '../../Context/userProvider/UserProvider';
import { withRouter } from 'react-router';
import { useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import NewUserLogin from '../newUserLogin/NewUserLogin';


const Header = (props ) => {


    const user = User()
    const {cart} = UseCart()
    const [isUserLogin , setIsUserLogin] = useState(false)
    const [isMenu , setIsMenu] = useState(false)


    const UserLogin = ()=>{
        return(
            <div>
                <div className={LoginStyles.parent} onClick={(e)=>setIsUserLogin(false)}>
                </div>

                <div className={LoginStyles.main} onClick={()=>setIsUserLogin(true)}>
                    <NewUserLogin setIsUserLogin={setIsUserLogin}/>
                </div>
            </div>
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
                    
                    {/* <button className={Styles.iconParent} to={`${user ? "/user-profile" : "/user-login?redirect=Home"}`}> */}
                    <button className={Styles.iconParent_Button} onClick={()=> setIsUserLogin(true)}>
                        {/* {user ? <FaUserCheck className={Styles.iconStyle} size="1.7em"/> :  <BiUser  className={Styles.iconStyle} size="1.7em"/>}               */}
                        <BiUser  className={Styles.iconStyle} size="2em"/>            
                       
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
          {isUserLogin &&   <UserLogin/>}
          </>
    );
  };

  export default withRouter(Header);