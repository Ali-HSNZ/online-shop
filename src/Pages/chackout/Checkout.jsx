import Styles from './Checkout.module.css'
import {User} from '../../Context/userProvider/UserProvider'
import {UseCart} from '../../Context/cartContext/CartProvider'
import CartItems from '../../common/Cart Item/CartItems'



const Checkout = () => {
    const user = User()
    const {cart} = UseCart()

    return (  
        <div className={Styles.parent}>
            
        {user ? (
            <>
                <div className={Styles.userInfo}>
                    <div className={Styles.userInfo_item}><p>{user.name}</p><p> : نام</p></div>
                    <div className={Styles.userInfo_item}><p>{user.phoneNumber}</p><p>: شماره همراه  </p></div>
                    <div className={Styles.userInfo_item}><p>{user.email}</p><p> : ایمیل </p></div> 
                         
                    <div className={Styles.cartTotalPrice}><CheckPrice cart={cart}/></div>
                    <button className={Styles.cartBtn}>نهایی سازی خرید</button>
                   
                </div>
                <div className={Styles.cartInfo}>
                        {cart ? cart.map(product => {
                            return (
                                <>
                                <CartItems checkout={true} product={product}/>
                                
                                </>
                            )
                        }) : <p>محصولی در سبد خرید شما نیست</p>}
                </div>
            </>
        ) : <h1>please Login to the Site to see Cart</h1>}
        </div>
    );
}
 
export default Checkout;

const CheckPrice = ({cart})=> {
    const originalTotalPrice =cart.reduce((acc , product)=> acc + product.quantity * product.price , 0) 
    return <p>قیمت نهایی  : {originalTotalPrice}</p>
}