import Styles from  "./ProductList.module.css"
import image1 from '../../image/11.png'
import { BiHeart , BiBookmark, BiArrowToTop   } from "react-icons/bi";
import check_mark from '../../image/check.png'
import garanty from '../../image/badge.png'
import delivery from '../../image/delivery.png'
// import {products} from '../../data/data'
import {UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider'
// console.log(products)
import { BiTrashAlt , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { User } from "../../Context/userProvider/UserProvider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Banner from "../../common/Banner/Banner";

//  get All Categorie ===>     https://fakestoreapi.com/products/categories
//  get all products ====> /products 
//  get specific product based on id =====>     /products/1
// /products?limit=5 (limit return results )
// /products?sort=desc (asc|desc get products in ascending or descending orders (default to asc))
// /products/products/categories (get all categories)
// /products/category/jewelery (get all products in specific category)
// /products/category/jewelery?sort=desc (asc|desc get products in ascending or descending orders (default to asc))

import Container from '../../common/Loding/Loding'



const ProductList = () => {

    const user = User()

    console.log('user => ',user)

    const [products , setProducts] = useState(null)
    const [category , setCategory] = useState(null)
    const [cart , setCart] = useState(null)
    const [productsCategore , setProductsCategore ] = useState(null)    

    useEffect(()=>{
        const getAllProducts = async()=>{
            try {
                axios.get('https://fakestoreapi.com/products').then(products =>{
                    setProducts(products.data)
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

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1220 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1220, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };
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
                                                    <Link to={`/category?name=${mapOnCategory}`} className={Styles.Slider_categoryLink}>نمایش همه محصولات : {mapOnCategory} <BsFillCaretLeftFill/></Link>
                                                </div>
                                            ) }
                                            <div  className={Styles.item} dir="ltr" key={index}>
                                                <Carousel infinite={true} className={Styles.sliders} responsive={responsive}>
                                                    {filterd ? filterd.map( (item)=>{return(
                                                        <ProductListItem key={item.id} item = {item}/>
                                                    )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                                                </Carousel>
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