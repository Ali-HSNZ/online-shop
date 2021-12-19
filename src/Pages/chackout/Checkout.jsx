import Styles from './Checkout.module.css'
import {User} from '../../Context/userProvider/UserProvider'
import CartItems from '../../common/Cart Item/CartItems'

const Checkout = (props) => {
    const user = User()
    const cart = []
    return (  
        <div className={Styles.parent}>
            
        {user ? (
            <>
                <div className={Styles.userInfo}>

                  <div className={Styles.userInfo_fixed}>
                        <div className={Styles.userInfo_item}><p>{user.email}</p><p> : ایمیل </p></div> 
                            
                        <div className={Styles.cartTotalPrice}><CheckPrice cart={cart}/></div>
                        <button className={Styles.cartBtn}>نهایی سازی خرید</button>
                  </div>
                   
                </div>

                <div className={Styles.cartInfo}>
                        {cart.length ? cart.map(product =>  <CartItems checkout={true} product={product}/> ) : <p>محصولی در سبد خرید شما نیست</p>}
                </div>
            </>
        ) : props.history.push("/")}
        </div>
    );
}
 
export default Checkout;

const CheckPrice = ({cart})=> {
    const originalTotalPrice =cart.reduce((acc , product)=> acc + product.quantity * product.price , 0).toFixed(2)
    return <p>قیمت نهایی  : {originalTotalPrice}</p>
}