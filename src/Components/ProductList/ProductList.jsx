import Styles from  "./ProductList.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Banner from "../../common/Banner/Banner";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay, Navigation , Pagination}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './sliderStyles.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchProducts } from "../../feature/products/productsReducer";
import { fetchingCategories } from "../../feature/categories/categoryReducer";

SwiperCore.use([Navigation , Pagination , Autoplay])

const ProductList = () => {
    const dispatch = useDispatch()

    const productsData = useSelector(state => state.products.data)
    const categoriesData = useSelector(state => state.categories.data)

    
    useEffect(()=>{
        dispatch(fetchProducts())
        dispatch(fetchingCategories())
    },[dispatch])


    return (  
        <div className={Styles.parent} dir="rtl">
            <div>
                {
                    categoriesData.length > 0 ? categoriesData.map((category,index) => {
                        const productsCategory = productsData&&productsData.filter( e => e.category === category)
                            return(
                                <div key={index}>
                                    {
                                        category === "jewelery" ? <Banner category={category}/> : 
                                        category === "women's clothing" ? <Banner category={category}/> : 

                                    
                                        <div dir="rtl" className={Styles.sliderParent} key={index}>
                                            
                                            {categoriesData && (
                                                <div className={Styles.Slider_categoryParent}>
                                                    <Link to={`/category?name=${category}`} className={Styles.Slider_categoryLink}>{category} <BsFillCaretLeftFill/></Link>
                                                    
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
                                                        delay: 2000 + Math.random()*1000,
                                                    }}>

                                                    {productsCategory ? productsCategory.map(
                                                        item=>{return(
                                                            <SwiperSlide key={item.id}>
                                                                <ProductListItem item = {item}/>
                                                            </SwiperSlide>
                                                    )}) : <p className={Styles.isNotProductText} dir="rtl">در حال بارگیری محصولات ...</p>}
                                                    
                                               
                                                </Swiper>
                                            </div>


                                        </div>
                                        
                                    }
                                </div>
                            )
                    }) : <p className={Styles.isNotProductText} dir="rtl"> در حال بارگیری دسته بندی ها و محصولات ...</p>
                }
            </div>
        </div>
    );
}
 
export default ProductList;