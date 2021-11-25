import Styles from './Header.module.css'
import Logo from '../../image/logo.png'
import {BiShoppingBag , BiUser} from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';
import { User } from '../../Context/userProvider/UserProvider';
const Header = ( ) => {
    const user = User()
    const {cart} = UseCart()
    return (
        <div className={Styles.parent}>

            <div className={Styles.header}>

                <div className={Styles.header_left}>

                    <NavLink activeClassName={Styles.activeLink} to="/cart"  className={Styles.iconParent}>
                        <BiShoppingBag className={Styles.iconStyle} size="1.7em"/>
                        {cart.length > 0 && <p className={Styles.cartCount}> {cart.length}</p>}
                    </NavLink>

                    <NavLink activeClassName={Styles.activeLink} className={Styles.iconParent} to={`${user ? "/user-profile" : "/user-login?redirect=Home"}`}>
                        {user ? <FaUserCheck className={Styles.iconStyle} size="1.7em"/> :  <BiUser  className={Styles.iconStyle} size="1.7em"/>}              
                    </NavLink>
                   
                </div>

                
                <div className={Styles.header_right}>
                    <NavLink activeClassName={Styles.activeLink} to="/" exact>خانه</NavLink>
                    <div className={Styles.logoParent}><img className={Styles.logoParent_Img} alt="لوگو" src={Logo}/></div>
                </div>

               

            

            </div> 
          
        </div>
    );
  };
  
  export default Header;
  