import Styles from './CartPage.module.css'
import image from '../../image/123.jpg'
import image1 from '../../image/11.png'
import { BiHeart , BiTrashAlt , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";

const CartPage = () => {
    return (  
        <div className={Styles.parent}>
            <div className={Styles.cartParent}>
                {/* <div className={Styles.cart_header} dir="rtl">
                    <p>عکس</p>
                    <p>نام محصول</p>
                    <p>قیمت</p>
                    <p>تعداد</p>
                    <p>حذف</p>
                </div> */}
                <div className={Styles.cartItem} dir="rtl">
                    <div className={Styles.productImageParent}>
                        <img src={image} />
                    </div>
                    <div className={Styles.ProductTitle}>
                        <p>گوشی سامسونگ مدل A51</p>
                    </div>
                    <div className={Styles.ProductPrice}>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    <div className={Styles.productQuantityParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.9em"/>
                        <p>1</p>
                        <BiMinusCircle style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    <div className={Styles.ProductDeleteParent}>
                        <BiTrashAlt style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    
                </div>


                <div className={Styles.cartItem} dir="rtl">
                    <div className={Styles.productImageParent}>
                        <img src={image1} />
                    </div>
                    <div className={Styles.ProductTitle}>
                        <p>گوشی سامسونگ مدل A51</p>
                    </div>
                    <div className={Styles.ProductPrice}>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    <div className={Styles.productQuantityParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.9em"/>
                        <p>1</p>
                        <BiMinusCircle style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    <div className={Styles.ProductDeleteParent}>
                        <BiTrashAlt style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    
                </div>

                <div className={Styles.cartItem} dir="rtl">
                    <div className={Styles.productImageParent}>
                        <img src={image1} />
                    </div>
                    <div className={Styles.ProductTitle}>
                        <p>گوشی سامسونگ مدل A51</p>
                    </div>
                    <div className={Styles.ProductPrice}>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    <div className={Styles.productQuantityParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.9em"/>
                        <p>1</p>
                        <BiMinusCircle style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    <div className={Styles.ProductDeleteParent}>
                        <BiTrashAlt style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    
                </div>

                <div className={Styles.cartItem} dir="rtl">
                    <div className={Styles.productImageParent}>
                        <img src={image1} />
                    </div>
                    <div className={Styles.ProductTitle}>
                        <p>گوشی سامسونگ مدل A51</p>
                    </div>
                    <div className={Styles.ProductPrice}>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    <div className={Styles.productQuantityParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.9em"/>
                        <p>1</p>
                        <BiMinusCircle style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    <div className={Styles.ProductDeleteParent}>
                        <BiTrashAlt style={{cursor:'pointer'}}  size="1.9em"/>
                    </div>
                    
                </div>


            </div>
            <div className={Styles.checkoutParent}>

                <div className={Styles.checkout}>
                    <div className={Styles.checkout_header}>
                        <p>خلاصه سبد خرید</p>
                    </div>
                    <div className={Styles.Allprice}>
                        <div> <p>2,000,000</p><p dir="rtl">قیمت کل   : </p></div>
                        <div> <p>1,568,000</p><p dir="rtl">قیمت با تخفیف : </p></div>
                    
                    </div>
                    <div className={Styles.price}>
                        <p>جمع سبد خرید : 1,000,000</p>
                    </div>
                </div>
               
               <button className={Styles.checkout_submit}>پرداخت سبد خرید</button>
            </div>
        </div>
    );
}
 
export default CartPage;