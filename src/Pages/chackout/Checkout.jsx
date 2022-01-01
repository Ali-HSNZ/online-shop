import Styles from './Checkout.module.css'
import CartItems from '../../common/Cart Item/CartItems'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Checkout = (props) => {
   const  user = useSelector(state => state.user.data)
    const cart = useSelector(state => state.cart.cart)

    useEffect(()=> {
        if(!user){
            props.history.push("/")
        }
    },[user , props.history])

    return (  
        <>
            {user && (
                <div className={Styles.parent}>
                    <div className={Styles.userInfo}>
    
                        <div className={Styles.userInfo_fixed}>
                            <div className={Styles.userInfo_item}><p>{user}</p><p> : ایمیل </p></div> 
                                
                            <div className={Styles.cartTotalPrice}><CheckPrice cart={cart}/></div>
                            <button className={Styles.cartBtn}>نهایی سازی خرید</button>
                        </div>
                        
                    </div>
    
                    <div className={Styles.cartInfo}>
                            {cart.length ? cart.map(product =>  <CartItems checkout={true} key={product.id} product={product}/> ) : <p className={Styles.isNotProducts}>محصولی در سبد خرید شما نیست</p>}
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Checkout;

const CheckPrice = ({cart})=> {
    const originalTotalPrice =cart.reduce((acc , product)=> acc + product.quantity * product.price , 0)

    let price = originalTotalPrice;    
    let dplaces = price=== parseInt(price, 10) ? 0 : 2;
    price = '$' + price.toFixed(dplaces);

    return <p>قیمت نهایی  : {price}</p>
}