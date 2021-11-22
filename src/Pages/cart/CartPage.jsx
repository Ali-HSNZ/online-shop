import Styles from './CartPage.module.css'
import { BiTrash , BiMinus  ,BiPlus } from "react-icons/bi";
import { UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const CartPage = () => {
    const productsInCart = UseCart()



    const dispatch = UseCartDispatch()
    const [scrollPosition, setScrollPosition] = useState(0);


    const AddQuantity = (product)=> {
        dispatch({type : "ADD_TO_CART" , payLoad : product})
    }
    const DecrimentQuantity = (product)=> {
        dispatch({type : "DECRIMENT_TO_CART" , payLoad : product})
    }
    const deleteProduct = (product)=>{
        dispatch({type : "DELETE_PRODUCT" , payLoad : product})
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };



    const renderProducts = ()=> {
        var resualt

        if(productsInCart.cart && productsInCart.cart.length > 0){
           
               resualt =  <div className={Styles.parent}>

                    <div className={Styles.cartParent}>
                        {productsInCart.cart.map(product => {return (
                            <div className={Styles.cartItem} dir="rtl">
                                    <div className={Styles.imageParent}>
                                        <img src={product.image}/>
                                    </div>

                                    <div className={Styles.describrion}>
                                        <p className={Styles.describrion_titile}>{product.title}</p>
                                        {/* <div className={Styles.describrion_offPriceParent}><p>تخفیف</p><p>{product.price * product.quantity}</p><p>تومان</p></div> */}
                                        <div className={Styles.describrion_orginalPriceParent}><p>قیمت محصول :</p><p>{product.price * product.quantity}</p><p>تومان</p></div>
                                    </div>

                                    <div className={Styles.ProductAction}>
                                    
                                            <div className={Styles.addProductInCart}>
                                                <button onClick={()=> AddQuantity(product)}><BiPlus/></button>
                                                <p>{product.quantity}</p>
                                                <button onClick={()=> DecrimentQuantity(product)}>{product.quantity === 1 ? <BiTrash size="1rem"/> : <BiMinus/> }</button>
                                            </div>
                                        

                                            <div className={Styles.deleteProductParent}>
                                                <button onClick={()=> deleteProduct(product)}><BiTrash size="1rem"/> حذف </button>
                                            </div>
                                    </div>

                            </div>
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

    console.log("originalTotalPrice : ",originalTotalPrice)
    console.log("total : ",total)

    return(
        <div className={Styles.checkOut_Fixed}>
    {/* You Can Dinamic Position with code ====>>>>>|||| <div className={scrollPosition > 0 ? Styles.checkOut_Fixed : Styles.checkOut_Relative }> */}
        <div className={Styles.checkout_header}>
            <p>خلاصه سبد خرید</p>
        </div>
        <div className={Styles.Allprice}>
            <div> <p dir="rtl"> {originalTotalPrice} تومان  </p><p dir="rtl">قیمت کالاها  : </p></div>
            <div> <p dir="rtl">{originalTotalPrice - total} تومان</p><p dir="rtl">تخفیف کالاها : </p></div>
        
        </div>
        <div className={Styles.price}>
            <p>جمع سبد خرید : {total} تومان</p>
        </div>
        <Link className={Styles.checkout_submit} to="/user-login?redirect=checkout">پرداخت سبد خرید</Link>
    </div>
    )
}