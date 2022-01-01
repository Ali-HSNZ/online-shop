import Styles from './CartPage.module.css'

import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

import { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Autoplay}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './cartSlider.css'


import ProductListItem from '../../common/ProductList Item/ProductListItem';
import CartItems from '../../common/Cart Item/CartItems';

import Feature from '../../Components/Features/Feature';
import Checkout from './Checkout';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteAllProduct } from '../../feature/cart/cartReducer';
import { fetchProducts } from '../../feature/products/productsReducer';


SwiperCore.use([Autoplay , Navigation]);

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart)

    const products = useSelector(state => state.products.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])


    const renderProducts = ()=> {
        var resualt;

        if(cart && cart.length > 0){
           
            resualt = (
                <div className={Styles.parent}>
                    <div className={Styles.cartParent}>

                        <button className={Styles.deleteAllProduct} onClick={()=> dispatch(deleteAllProduct())}>
                            حذف همه محصولات از سبد خرید
                            <FiTrash2 className={Styles.deleteAllProduct_icon} size={'1.2em'}/>
                        </button>

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
            resualt = <div className={Styles.alert_product}>
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


        {cart.length === 0 && (
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
                        breakpoints= {{ 0: { slidesPerView: 1},630: {slidesPerView: 2,},900: {slidesPerView: 3,},1260: { slidesPerView: 4,}}}
                        autoplay={{delay: 2500}}>
                    
                            
                        
                        {products.length > 0 ? products.slice(10).map(
                            item=>{return(
                                <SwiperSlide key={item.id} >
                                    <ProductListItem item={item} offPrice={item.offPrice}/>
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

