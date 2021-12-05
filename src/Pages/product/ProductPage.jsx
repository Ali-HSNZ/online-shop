import Styles from './Product.module.css'
import { BiHeart} from "react-icons/bi";

import iphoneSrc from '../../image/iphone.png'
import Feature from '../../Components/Features/Feature';
import { BsFillCaretLeftFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Navigation , Pagination}from 'swiper'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListItem from '../../common/ProductList Item/ProductListItem';

import Container from '../../common/Loding/Loding'

import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './sliderStyles.css'

import {useQuery} from '../../hooks/useQuery'
SwiperCore.use([Navigation , Pagination])



const ProductPage = (props) => {

    console.log(props)

    const query = useQuery().get('id');
    const queryDiscount = useQuery().get('discount');
    const queryOffPrice = useQuery().get('offPrice');

    console.log("queryDiscount => ",queryDiscount)

    const [products , setProducts] = useState(null)
    const [product , setProduct] = useState(null)


    useEffect(()=>{
        const getAllProducts = async()=>{
            try {
                axios.get('https://fakestoreapi.com/products').then(products =>{
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
        const getOneProducts = async()=>{
            try {
                axios.get(`https://fakestoreapi.com/products/${query}`).then(products =>{
                    if(products.data){
                      
                        setProduct(products.data)
                    }
                }).catch();
            } catch (error) {
                setProducts(null)
            }
        }
        getOneProducts()
        getAllProducts()
    },[])


    return (  
        <>
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
                                    <span>({product.rating.count})</span>
                            </div>
                            <p dir="ltr">{product.title}</p>
                        </div>
        
        
                        <div className={Styles.productCategory}>
                            <button>
                                افزودن به علاقه مندی ها
                                <BiHeart size="1.5em" className={Styles.productCategory_like}/>
                            </button>
                            <p dir='rtl'>دسته بندی :  {product.category}</p>
                        </div>
        
                        <div className={Styles.productPrice}>
                           
                            <div className={Styles.productPrice_discount}>
                                {queryOffPrice.length > 1 && <p dir='rtl' className={Styles.productPrice_Percentage}> (%{queryOffPrice})</p>}
                                {queryDiscount.length > 1 &&<p dir='rtl'>تخفیف : {queryDiscount}$</p>}
                            </div>
                            <p dir='rtl'>قیمت محصول : {product.price}$</p>
                        </div>
                        
                        <div className={Styles.buyProductParent}>
                            <button classNames={Styles.buyProduct_btn}>خرید محصول</button>
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
                                        <ProductListItem key={item.id} isLink={false} item = {item} offPrice={item.offPrice}/>
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