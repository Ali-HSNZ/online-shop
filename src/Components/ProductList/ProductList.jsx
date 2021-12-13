import Styles from  "./ProductList.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Banner from "../../common/Banner/Banner";

import PWClicked from './ProductWillClicked.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore ,{Autoplay, Navigation , Pagination}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './sliderStyles.css'


SwiperCore.use([Navigation , Pagination , Autoplay])

const ProductList = () => {

    const [products , setProducts] = useState(null)
    const [category , setCategory] = useState(null)


    useEffect(()=>{
        const getAllProducts = async()=>{
            try {
                axios.get('https://fakestoreapi.com/products').then(products =>{
                    if(products.data){
                        const cloneProducts = [...products.data]
                        for(let i = 0 ; i <= Math.floor(cloneProducts.length/3) ; i++){
                            const index = Math.floor(Math.random()*cloneProducts.length);
                            cloneProducts[index].offPrice = Math.floor(Math.random()*50) + 1
                            cloneProducts[index].discount = Math.floor(Math.random()*100) + 1
                        }
                        setProducts(cloneProducts)
                    }

                }).catch();
            } catch (error) {
                setProducts(null)
            }
        }
        const getAllCategorie = async()=>{
            axios.get("https://fakestoreapi.com/products/categories").then((categore)=>{
                setCategory(categore.data)
            }).catch(
                setCategory(null)
            )
        }
        getAllCategorie()
        getAllProducts()
    },[])



    return (  
        <div className={Styles.parent} dir="rtl">
            <div>
                {
                    category ? category.map((mapOnCategory,index) => {
                        const filterd = products&&products.filter( e => e.category === mapOnCategory)

                            
                            return(
                                <div key={index}>
                                    {mapOnCategory === "jewelery" && <Banner category={mapOnCategory}/> || mapOnCategory === "women's clothing" ? <Banner category={mapOnCategory}/> : 

                                    
                                        <div dir="rtl" className={Styles.sliderParent} key={index}>
                                            
                                            {category && (
                                                <div className={Styles.Slider_categoryParent}>
                                                    <Link to={`/category?name=${mapOnCategory}`} className={Styles.Slider_categoryLink}>{mapOnCategory} <BsFillCaretLeftFill/></Link>
                                                    
                                                    <div className={Styles.categoryLine_parent}>
                                                        <div></div>     <div></div>     <div></div>     <div></div>
                                                    </div>
                                                </div>
                                            ) }
                                            <div className='swiperParent' dir="ltr" key={index}>
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
                                                        delay: 2000+ Math.random()*1000,
                                                        disableOnInteraction: false
                                                    }}
                                                    
                                                    >
                                            

                                                    {filterd ? filterd.map(
                                                        item=>{return(
                                                            <SwiperSlide>
                                                                <ProductListItem key={item.id} isLink={true} item = {item} offPrice={item.offPrice}/>
                                                            </SwiperSlide>
                                                    )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                                                    
                                               
                                                </Swiper>
                                            </div>


                                        </div>
                                        
                                    }
                                </div>
                            )
                    }) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}> در حال بارگیری دسته بندی ها و محصولات ...</p>
                }
            </div>
        </div>
    );
}
 
export default ProductList;