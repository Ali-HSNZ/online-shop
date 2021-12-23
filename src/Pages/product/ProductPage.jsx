import Styles from './Product.module.css'
import { BiHeart} from "react-icons/bi";

import Feature from '../../Components/Features/Feature';
import { BsFillCaretLeftFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Pagination}from 'swiper'
import React, { useEffect, useState } from 'react';
import ProductListItem from '../../common/ProductList Item/ProductListItem';

import Container from '../../common/Loding/Loding'
import SmallLoading from '../../common/small Loding/SmallLoading'

import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './sliderStyles.css'

import {useQuery} from '../../hooks/useQuery'
import { Link } from 'react-router-dom';

import blackHeart from '../../image/heart.svg'
import RedHeart from '../../image/redHeart.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {AddQuantity} from '../../redux/cart/cartActions'
import {addToLike} from '../../redux/like/likeActions'


import {fetchProducts} from '../../redux/products/ProductsActions'
import { fetchOneProduct } from '../../redux/one Product/oneProductActions';



//================================


SwiperCore.use([Navigation , Pagination])

const ProductPage = () => {

    const like = useSelector(state => state.like.like)
    const product = useSelector(state => state.oneProduct)
    const cart = useSelector(state => state.cart.cart)
    const products = useSelector(state => state.products.data)

    const dispatch = useDispatch()

    const query = useQuery().get('id');
    const queryDiscount = useQuery().get('discount');
    const queryOffPrice = useQuery().get('offPrice');

    const [isLoading , setIsLoading] = useState(false)

//================================

    const checkProductInCart = (cart , product)=>{
        return cart&&cart.find(item => item.id === product.id)
    }

    const checkProductInLike = (state , product)=>{
        const item = state.find(item => item.id === product.id)
        if(item&&item.like === true){return true}else{return false}
    }

//================================

    useEffect(()=>{
        checkProductInCart(cart , product)
        dispatch(fetchProducts())
        product.loading === true ? setIsLoading(true) : setIsLoading(false)
    },[cart , product])

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(fetchOneProduct(query))
    },[query])

//================================


    return (  
        <>
            {product.data && (
                <div className={Styles.parent}>


                    <div className={Styles.product}>
                
                        <div className={Styles.imgParent}>
                            <img src={product.data.image} alt={product.data.title}/>
                        </div>
            
                        <div className={Styles.productDesc}>
            
                            <div className={Styles.productTitle}>
                                <div className={Styles.likeParent}>
                                    {product.data.rating ? (
                                        <>
                                            <BiHeart size="1.3em" style={{color:'red'}}/>
                                            <p>{product.data.rating.rate}</p>
                                            <span>({checkProductInLike(like , product.data) ? product.data.rating.count + 1 :product.data.rating.count  })</span>
                                        </>
                                    ) : (
                                        <SmallLoading color="red"/>
                                    )}
                                </div>
                                {product.data.title ? (
                                    <p dir="ltr">{product.data.title}</p>
                                ) : (
                                    <div className={Styles.productTitle_text} dir="rtl">
                                        نام محصول : 
                                        <SmallLoading color="red"/>
                                    </div>
                                )}
                            </div>
            
            
                            <div className={Styles.productCategory} dir='rtl'>
                                {product.data.category ? (
                                    <p className={Styles.productCategory_text} dir='rtl'>دسته بندی :  {product.data.category}</p>
                                ) : (
                                    <div className={Styles.productCategory_text} dir='rtl'>
                                        دسته بندی :  
                                        <SmallLoading color="red"/> 
                                    </div>
                                )}
                            
                                <button dir='ltr' onClick={()=> dispatch(addToLike(product.data))}>
                                    علاقه مندی ها
                                    <img src={checkProductInLike(like , product.data) ? RedHeart : blackHeart} alt='like'/>
                                </button>
                            </div>
            
                            <div className={Styles.productPrice}  dir='rtl'>
                                {product.data.price ? (
                                    <p dir='rtl' className={Styles.priceText}>قیمت : {product.data.price}$</p>
                                ) : (
                                    <div dir='rtl' className={Styles.priceText}>
                                        قیمت : 
                                        <SmallLoading color="red"/>
                                    </div>
                                )}
                                <div className={Styles.productPrice_discount} dir='ltr'>
                                    {queryOffPrice.length > 1 && <p dir='rtl' className={Styles.productPrice_Percentage}> (%{queryOffPrice})</p>}
                                    {queryDiscount.length > 1 &&<p dir='rtl'>تخفیف : {queryDiscount}$</p>}
                                </div>
                            </div>
                            
                            <div className={Styles.buyProductParent}>
                                {checkProductInCart(cart , product.data)? (
                                    <Link className={`${Styles.buyProduct_btn} ${Styles.buyProduct_Link}`} to='/cart'>سبد خرید</Link>
                                    ) : (
                                        <button className={`${Styles.buyProduct_btn} ${Styles.buyProduct_buy}`} onClick={()=>dispatch(AddQuantity(product.data))}>خرید محصول</button>
                                    )
                                }
                            </div>
                        </div>
            
                    </div>
        
                    <div className={Styles.productDescribtion}>
                        {product.data.description ? (
                            <>
                                <p dir='rtl'>توضیحات محصول : </p>
                                <p dir='ltr'>{product.data.description}</p>
                            </>
                        ) : (
                            <div dir='rtl' className={Styles.productDescribtion_loading}>
                                <p>توضیحات محصول : </p>
                                <SmallLoading color='red'/>
                            </div>
                        )}
                           
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
                            {products ? products.slice(10).map(
                                item=>{return(
                                    <SwiperSlide key={item.id}>
                                        <ProductListItem isLink={true} item={item} offPrice={item.offPrice}/>
                                    </SwiperSlide>
                            )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                        </Swiper>
                    </div>
        
                </div>
            )}

           
        </>
    );
}
 
export default ProductPage;