import Styles from './CartPage.module.css'
import { UseCart } from '../../Context/cartContext/CartProvider';
import { Link } from 'react-router-dom';
import CartItems from '../../common/Cart Item/CartItems';
import { BsFillCaretLeftFill } from "react-icons/bs";
import Header from '../../Components/Header/Header';
import { User ,IsCalledUserLoginDispatch} from '../../Context/userProvider/UserProvider';
import { useEffect } from 'react';



const CartPage = () => {
    const productsInCart = UseCart()
   

    const renderProducts = ()=> {
        var resualt

        if(productsInCart.cart && productsInCart.cart.length > 0){
           
               resualt =  <div className={Styles.parent}>

                    <div className={Styles.cartParent}>
                        {productsInCart.cart.map((product,index) => {return (
                                <CartItems key={index} product={product}/>
                        )})}
                    </div>
                    <div className={Styles.checkoutParent}>
                           <Checkout cart ={productsInCart.cart} total={ productsInCart.total}/>
                    </div>


                </div>
        }else{
            resualt= <div className={Styles.alert_product}>
                <p>میرم</p>
                <Link to="/">فروشگاه</Link>
                <p>به</p>
                <BsFillCaretLeftFill/>
               <p> سبد خرید شما خالی است</p>
            </div>
        }
        return resualt

    }
    return (  <> { renderProducts()} </>);
    
}
 
export default CartPage;

 const Checkout = ({cart})=>{
    const setIsUserLogin =  IsCalledUserLoginDispatch()
    const user = User()
    const originalTotalPrice =cart.length ? cart.reduce((acc , product)=>{ return acc + product.quantity * product.price} , 0) : 0




    return(
        <div className={Styles.checkOut_Fixed}>
        <div className={Styles.checkout_header}>
            <p>خلاصه سبد خرید</p>
        </div>
        <div className={Styles.Allprice}>
            <div> <p dir="rtl"> ${originalTotalPrice.toFixed(2)}  </p><p dir="rtl">قیمت کالاها  : </p></div>
            <div> <p dir="rtl">$0 </p><p dir="rtl">تخفیف کالاها : </p></div>
        
        </div>
        <div className={Styles.price}>
            <p dir="rtl">جمع سبد خرید : {originalTotalPrice.toFixed(2)}$ </p>
        </div>

        {/* <button onClick={()=>!user && checkUser(true)}  className={Styles.checkout_submit}>
            پرداخت سبد خرید
        </button> */}
            {user ? (
                <Link className={Styles.checkout_submit} to="/checkout"> پرداخت سبد خرید</Link>
            ) : (
                <button onClick={()=> setIsUserLogin(true)} className={Styles.checkout_submit}> پرداخت سبد خرید</button>
            )}
          
        


        
        
        {/* {user ? :  } */}

    </div>
    )
}