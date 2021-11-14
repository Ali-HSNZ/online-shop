import Styles from './CartPage.module.css'
import image from '../../image/123.jpg'
import image1 from '../../image/11.png'
import { BiTrashAlt , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";
import { UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider';

const CartPage = () => {
    const productsInCart = UseCart()
    const dispatch = UseCartDispatch()

    const AddQuantity = (product)=> {
        dispatch({type : "ADD_TO_CART" , payLoad : product})
    }
    const DecrimentQuantity = (product)=> {
        dispatch({type : "DECRIMENT_TO_CART" , payLoad : product})
    }
    const deleteProduct = (product)=>{
        
        dispatch({type : "DELETE_PRODUCT" , payLoad : product})
    }

    const renderProducts = ()=> {
        var resualt

        if(productsInCart.cart && productsInCart.cart.length > 0){
           
               resualt =  <div className={Styles.parent}>

                    <div className={Styles.cartParent}>
                        {productsInCart.cart.map(product => {return (
                            <div className={Styles.cartItem} dir="rtl">
                                <div className={Styles.productImageParent}>
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className={Styles.ProductTitle}>
                                    <p>عنوان : {product.name}</p>
                                </div>
                                <div className={Styles.ProductPrice}>
                                    <p>قیمت : {product.price * product.quantity}ت</p>
                                </div>
                                <div className={Styles.productQuantityParent}>
                                    <button onClick={()=> AddQuantity(product)}><BiPlusCircle style={{cursor:'pointer'}} size="2em"/></button>
                                    <p>تعداد : {product.quantity}</p>
                                    <button onClick={()=> DecrimentQuantity(product)}><BiMinusCircle style={{cursor:'pointer'}}  size="2em"/></button>
                                </div>
                                <div className={Styles.ProductDeleteParent}>
                                    <button onClick={()=> deleteProduct(product)}><BiTrashAlt style={{cursor:'pointer'}}  size="2.2em"/></button>
                                </div>
                            </div>
                        )})}
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


    return (  

  
            

                
<>
                {
                 renderProducts()
                }
  </>
    );
}
 
export default CartPage;