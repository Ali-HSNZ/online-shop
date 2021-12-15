import { User ,IsCalledUserLoginDispatch} from '../../Context/userProvider/UserProvider';
import Styles from './CartPage.module.css'
import { Link } from 'react-router-dom';
import { UseCart } from '../../Context/cartContext/CartProvider';


const Checkout = ()=>{

    const {cart} = UseCart()

    const TotalPriceHandler = (originalTotalPrice)=>{
        var price = originalTotalPrice;    
        var dplaces = price=== parseInt(price, 10) ? 0 : 2;
        return price = '$' + price.toFixed(dplaces);
    } 
    const TotalDiscountHandler = (totalDiscount)=>{
        var price = totalDiscount;    
        var dplaces = price === parseInt(price, 10) ? 0 : 2;
        return price = '$' + price.toFixed(dplaces);
    } 
    const totalCartHandler = (totalPrice , totalDiscount)=>{
        let price = 0;

        if(totalDiscount){
            if(totalPrice > totalDiscount )  {
                price = totalPrice - totalDiscount; 
            }else if(totalDiscount > totalPrice){
                price = totalDiscount - totalPrice; 
            }
        }else{price = totalPrice}
            
        
        var dplaces = price === parseInt(price, 10) ? 0 : 2;
        return price = '$' + price.toFixed(dplaces);
    } 
    

    const setIsUserLogin =  IsCalledUserLoginDispatch()
    const user = User()

    const originalTotalPrice =cart.length ? cart.reduce((acc , product)=>{ return acc + product.quantity * product.price} , 0) : 0

    const cartDiscount = cart.filter(product => product.discount > 0)

    const totalDiscount = cartDiscount.length ? cartDiscount.reduce((acc , product) => acc + product.quantity * product.discount , 0) : 0



    return(
        <div className={Styles.checkOut_Fixed}>

            <div className={Styles.checkout_header}>
                <p>خلاصه سبد خرید</p>
            </div>

            <div className={Styles.Allprice}>
                <div> <p dir="rtl"> {TotalPriceHandler(originalTotalPrice)} </p><p dir="rtl">قیمت کالاها  : </p></div>
                <div> <p dir="rtl">{TotalDiscountHandler(totalDiscount)}</p><p dir="rtl">تخفیف کالاها : </p></div>
            </div>

            <div className={Styles.price}>
                <p dir="rtl">جمع سبد خرید : {totalCartHandler(originalTotalPrice , totalDiscount)} </p>
            </div>

            {user ? (
                <Link className={Styles.checkout_submit} to="/checkout"> پرداخت سبد خرید</Link>
            ) : (
                <button onClick={()=> setIsUserLogin(true)} className={Styles.checkout_submit}> پرداخت سبد خرید</button>
            )}

        </div>
    )
}
export default Checkout