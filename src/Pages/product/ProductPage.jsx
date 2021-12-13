import Styles from './Product.module.css'
import { BiHeart} from "react-icons/bi";

import Feature from '../../Components/Features/Feature';
import { BsFillCaretLeftFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Pagination}from 'swiper'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from '../../common/ProductList Item/ProductListItem';

import Container from '../../common/Loding/Loding'

import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './sliderStyles.css'

import {useQuery} from '../../hooks/useQuery'
import { UseCartDispatch , UseCart } from '../../Context/cartContext/CartProvider';
import { Link } from 'react-router-dom';
import { UseLikeDispatcher , UseLikeState} from '../../Context/likeContext/likeContext';
import blackHeart from '../../image/heart.svg'
import RedHeart from '../../image/redHeart.svg'

SwiperCore.use([Navigation , Pagination])



const ProductPage = (props) => {

    const {like} = UseLikeState()
    const setLike = UseLikeDispatcher()

    const cartDispatch = UseCartDispatch()
    const {cart} = UseCart()

    const query = useQuery().get('id');
    const queryDiscount = useQuery().get('discount');
    const queryOffPrice = useQuery().get('offPrice');

    const addToLike = (item) => {
        setLike({type : 'ADD_TO_LIKE' , payLoad:item})
    }

    const [products , setProducts] = useState(null)
    const [product , setProduct] = useState(null)

    const [isLoading , setIsLoading] = useState(false)



    const checkProductInCart = (cart , product)=>{
        return cart&&cart.find(item => item.id === product.id)
    }
 
    const getAllProducts = async()=>{
        try {
             await axios.get('https://fakestoreapi.com/products').then(products =>{
                setProducts(products.data)
                checkProductInCart(cart , product)
            }).catch();
        } catch (error) {
            setProducts(null)
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    useEffect(()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
             
              
           
            setIsLoading(true)


        const getOneProducts = async()=>{

            try {
                axios.get(`https://fakestoreapi.com/products/${query}`).then(products =>{
                    if(products.data){
                        setProduct(products.data)

                        checkProductInCart(cart , products.data)
                        setIsLoading(false)
                    }
                }).catch();

            
        } catch (error) {setIsLoading(false)}
            
        }
        getOneProducts()
        
    },[query])



    const addToCart = (product)=>{
        cartDispatch({type : 'ADD_TO_CART' , payLoad : product})
    }
    const checkProductInLike = (state , product)=>{
        const item = state.find(item => item.id === product.id)
        if(item&&item.like === true){return true}else{return false}
    }


    return (  
        <>
         {isLoading === true && Container()}
            {product ? (
                <div className={Styles.parent}>


                <div className={Styles.product}>
            
                    <div className={Styles.imgParent}>
                        <img src={product.image}/>
                    </div>
        
                    <div className={Styles.productDesc}>
        
                        <div className={Styles.productTitle}>
                            <div className={Styles.likeParent}>
                                <BiHeart size="1.3em" style={{color:'red'}}/>
                                    <p>{product.rating.rate}</p>
                                    <span>({checkProductInLike(like , product) ? product.rating.count + 1 :product.rating.count  })</span>
                            </div>
                            <p dir="ltr">{product.title}</p>
                        </div>
        
        
                        <div className={Styles.productCategory} dir='rtl'>
                            <p dir='rtl'>دسته بندی :  {product.category}</p>
                            <button dir='ltr' onClick={()=> addToLike(product)}>
                                علاقه مندی ها
                                <img src={checkProductInLike(like , product) ? RedHeart : blackHeart}/>
                            </button>
                        </div>
        
                        <div className={Styles.productPrice}  dir='rtl'>
                           
                            <p dir='rtl' className={Styles.priceText}>قیمت : {product.price}$</p>
                            <div className={Styles.productPrice_discount} dir='ltr'>
                                {queryOffPrice.length > 1 && <p dir='rtl' className={Styles.productPrice_Percentage}> (%{queryOffPrice})</p>}
                                {queryDiscount.length > 1 &&<p dir='rtl'>تخفیف : {queryDiscount}$</p>}
                            </div>
                        </div>
                        
                        <div className={Styles.buyProductParent}>
                            {checkProductInCart(cart , product)? (
                                <Link className={`${Styles.buyProduct_btn} ${Styles.buyProduct_Link}`} to='/cart'>سبد خرید</Link>
                                ) : (
                                    <button className={`${Styles.buyProduct_btn} ${Styles.buyProduct_buy}`} onClick={()=>addToCart(product)}>خرید محصول</button>
                            
                            )}
                        </div>
                    </div>
        
                </div>
        
                <div className={Styles.productDescribtion}>
                        <p dir='rtl'>توضیحات محصول : </p>
                        <p dir='ltr'>{product.description}</p>
                </div>
        
        
                    <Feature/>
                    <div className={Styles.Slider_categoryParent}>
                        <p  className={Styles.Slider_categoryLink} dir="rtl"> 
                           محصولات پیشنهادی
                            <BsFillCaretLeftFill className={Styles.Slider_categoryParent_icon}/>
                        </p>
                        <div className={Styles.categoryLine_parent}>
                            <div></div>     <div></div>     <div></div>     <div></div>
                        </div>
                    </div>
        
                    <div className='swiperParent_ProductPage' dir="ltr">
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
                            }}>
                            {products ? products.slice(Math.floor(5+Math.random()*10)).map(
                                item=>{return(
                                    <SwiperSlide>
                                        <ProductListItem key={item.id} isLink={true} item={item} offPrice={item.offPrice}/>
                                    </SwiperSlide>
                            )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                        </Swiper>
                    </div>
        
                </div>
            ) : (Container())}

           
        </>
    );
}
 
export default ProductPage;