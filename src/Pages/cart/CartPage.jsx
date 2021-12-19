import Styles from './CartPage.module.css'

import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Autoplay}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './cartSlider.css'

import axios from 'axios';

import ProductListItem from '../../common/ProductList Item/ProductListItem';
import CartItems from '../../common/Cart Item/CartItems';

import Feature from '../../Components/Features/Feature';
import Checkout from './Checkout';
import { useSelector } from 'react-redux';


SwiperCore.use([Autoplay , Navigation]);

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart)

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
        var resualt;

        if(cart && cart.length > 0){
           
            resualt = (
                <div className={Styles.parent}>
                    <div className={Styles.cartParent}>
                        {cart.map((product,index) => {return (
                            <CartItems key={index} product={product}/>
                        )})}
                    </div>
                    <div className={Styles.checkoutParent}>
                        <Checkout/>
                    </div>
                </div>
            )
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


        {cart.length ===0 && (
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
                        }}
                        >
                        {products ? products.slice(Math.floor(5+Math.random()*10)).map(
                            item=>{return(
                                <SwiperSlide key={item.id} >
                                    <ProductListItem isLink={true} item={item} offPrice={item.offPrice}/>
                                </SwiperSlide>
                        )}) : <p className={Styles.isNotProductText} dir='rtl'>در حال بارگیری محصولات ...</p>}
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

