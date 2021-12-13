import Styles from './CartPage.module.css'
import { UseCart } from '../../Context/cartContext/CartProvider';
import { Link } from 'react-router-dom';
import CartItems from '../../common/Cart Item/CartItems';
import { BsFillCaretLeftFill } from "react-icons/bs";
import Header from '../../Components/Header/Header';
import { User ,IsCalledUserLoginDispatch} from '../../Context/userProvider/UserProvider';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Pagination , Autoplay}from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './cartSlider.css'
import axios from 'axios';
import ProductListItem from '../../common/ProductList Item/ProductListItem';
import Feature from '../../Components/Features/Feature';


SwiperCore.use([Autoplay]);
const CartPage = () => {
    const productsInCart = UseCart()

    const [products , setProducts] = useState(null)
    useEffect(()=>{

   
    const getAllProducts = async()=>{
        try {
             await axios.get('https://fakestoreapi.com/products').then(products =>{
                if(products.data){
                    const cloneProducts = [...products.data]
                    for(let i = 0 ; i <= Math.floor(cloneProducts.length/3) ; i++){
                        const index = Math.floor(Math.random()*cloneProducts.length);
                        cloneProducts[index].offPrice = Math.floor(Math.random()*50) + 1
                        cloneProducts[index].discount = Math.floor(Math.random()*200) + 1
                    }
                    setProducts(cloneProducts)
                }
            }).catch();
        } catch (error) {
            setProducts(null)
        }
    }

    getAllProducts()
},[])


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
    return (  
    <> 
        {renderProducts()}


        {productsInCart.cart.length ===0 && (
            <div className={Styles.allParent}>


            
                <div className={Styles.Slider_categoryParent}>
                        <p  className={Styles.Slider_categoryLink} dir="rtl"> 
                           محصولات پیشنهادی
                        </p>
                        <div className={Styles.categoryLine_parent}>
                            <div></div>     <div></div>     <div></div>     <div></div>
                        </div>
                </div>

                <div className='swiperParent_CartPage' dir="ltr">
                    <Swiper loop={true} navigation  tag="div" wrapperTag="div" spaceBetween={0} slidesPerView={4}
                        breakpoints= {{
                            0: {
                            slidesPerView: 1,
                            },
                            630: {
                            slidesPerView: 2,
                            },
                            900: {
                            slidesPerView: 3,
                            },
                            1260: {
                                slidesPerView: 4,
    
                            }

                            
                        }}
                        
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        >
                        {products ? products.slice(Math.floor(5+Math.random()*10)).map(
                            item=>{return(
                                <SwiperSlide>
                                    <ProductListItem key={item.id} isLink={true} item={item} offPrice={item.offPrice}/>
                                </SwiperSlide>
                        )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                    </Swiper>
                </div>

                <div style={{padding:'0 20px' , marginBottom:'20px'}}>
                    <Feature />
                </div>      

            </div>
        )}
     </>
     );
    
}
 
export default CartPage;

 const Checkout = ({cart , total})=>{
    const setIsUserLogin =  IsCalledUserLoginDispatch()
    const user = User()
    const originalTotalPrice =cart.length ? cart.reduce((acc , product)=>{ return acc + product.quantity * product.price} , 0) : 0

    const totalDiscount = cart.length ? cart.reduce((acc , product) => acc + product.quantity * product.discount , 0) : 0

    return(
        <div className={Styles.checkOut_Fixed}>
        <div className={Styles.checkout_header}>
            <p>خلاصه سبد خرید</p>
        </div>
        <div className={Styles.Allprice}>
            <div> <p dir="rtl"> ${originalTotalPrice.toFixed(2)}  </p><p dir="rtl">قیمت کالاها  : </p></div>
            <div> <p dir="rtl">${totalDiscount ?  totalDiscount.toFixed(2).replace('-','') : 0} </p><p dir="rtl">تخفیف کالاها : </p></div>
        
        </div>
        <div className={Styles.price}>
            <p dir="rtl">جمع سبد خرید : {totalDiscount ? originalTotalPrice - totalDiscount.toFixed(2) : originalTotalPrice.toFixed(2)}$ </p>
        </div>
            {user ? (
                <Link className={Styles.checkout_submit} to="/checkout"> پرداخت سبد خرید</Link>
            ) : (
                <button onClick={()=> setIsUserLogin(true)} className={Styles.checkout_submit}> پرداخت سبد خرید</button>
            )}
          
        


        
        
        {/* {user ? :  } */}

    </div>
    )
}