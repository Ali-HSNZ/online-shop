import Styles from './Checkout.module.css'
import CartItems from '../../common/Cart Item/CartItems'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Checkout = (props) => {
   const  user = useSelector(state => state.userLogin.data)
    const cart = useSelector(state => state.cart.cart)

    return (  
        <>
            {user ?(
                <div className={Styles.parent}>
                    <div className={Styles.userInfo}>
    
                        <div className={Styles.userInfo_fixed}>
                            <div className={Styles.userInfo_item}><p>{user.email}</p><p> : ایمیل </p></div> 
                                
                            <div className={Styles.cartTotalPrice}><CheckPrice cart={cart}/></div>
                            <button className={Styles.cartBtn}>نهایی سازی خرید</button>
                        </div>
                        
                    </div>
    
                    <div className={Styles.cartInfo}>
                            {cart.length ? cart.map(product =>  <CartItems checkout={true} product={product}/> ) : <p className={Styles.isNotProducts}>محصولی در سبد خرید شما نیست</p>}
                    </div>
                </div>
            ) : props.history.push("/")}
        </>
    );
}
 
export default Checkout;

const CheckPrice = ({cart})=> {
    const originalTotalPrice =cart.reduce((acc , product)=> acc + product.quantity * product.price , 0).toFixed(2)
    return <p>قیمت نهایی  : {originalTotalPrice}</p>
}