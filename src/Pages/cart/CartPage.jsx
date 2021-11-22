import Styles from './CartPage.module.css'
import { BiTrash , BiMinus  ,BiPlus } from "react-icons/bi";
import { UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItems from '../../common/Cart Item/CartItems';




const CartPage = () => {
    const productsInCart = UseCart()



    const dispatch = UseCartDispatch()
    const [scrollPosition, setScrollPosition] = useState(0);



    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };



    const renderProducts = ()=> {
        var resualt

        if(productsInCart.cart && productsInCart.cart.length > 0){
           
               resualt =  <div className={Styles.parent}>

                    <div className={Styles.cartParent}>
                        {productsInCart.cart.map(product => {return (
                                <CartItems product={product}/>
                        )})}
                    </div>
                    <div className={Styles.checkoutParent}>
                           <Checkout cart ={productsInCart.cart} total={ productsInCart.total}/>
                    </div>


                </div>
        }else{
            resualt= <p style={{
                width:"100%" ,
                height:'60px' ,
                background:'red' ,
                textAlign:'center' ,
                display : "flex" ,
                justifyContent : "center",
                alignItems:'center',
                color:'white',
                fontFamily:'iransansweb',
                borderRadius:"0px",
                marginTop:'10px'
                }}
            >
                سبد خرید شما خالی است
            </p>
        }


        return resualt

    }
    return (  <> { renderProducts()} </>);
    
}
 
export default CartPage;

 const Checkout = ({cart,total})=>{

    const originalTotalPrice =cart.length ? cart.reduce((acc , product)=>{ return acc + product.quantity * product.price} , 0) : 0


    return(
        <div className={Styles.checkOut_Fixed}>
    {/* You Can Dinamic Position with code ====>>>>>|||| <div className={scrollPosition > 0 ? Styles.checkOut_Fixed : Styles.checkOut_Relative }> */}
        <div className={Styles.checkout_header}>
            <p>خلاصه سبد خرید</p>
        </div>
        <div className={Styles.Allprice}>
            <div> <p dir="rtl"> {originalTotalPrice} تومان  </p><p dir="rtl">قیمت کالاها  : </p></div>
            <div> <p dir="rtl">0 تومان</p><p dir="rtl">تخفیف کالاها : </p></div>
        
        </div>
        <div className={Styles.price}>
            <p>جمع سبد خرید : {originalTotalPrice} تومان</p>
        </div>
        <Link className={Styles.checkout_submit} to="/user-login?redirect=checkout">پرداخت سبد خرید</Link>
    </div>
    )
}