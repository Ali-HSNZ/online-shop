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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Category from "../Category/Category";

//  get All Categorie ===>     https://fakestoreapi.com/products/categories
//  get all products ====> /products 
//  get specific product based on id =====>     /products/1
// /products?limit=5 (limit return results )
// /products?sort=desc (asc|desc get products in ascending or descending orders (default to asc))
// /products/products/categories (get all categories)
// /products/category/jewelery (get all products in specific category)
// /products/category/jewelery?sort=desc (asc|desc get products in ascending or descending orders (default to asc))




const ProductList = () => {

    const [products , setProducts] = useState(null)
    const [category , setCategory] = useState(null)
    const [productsCategore , setProductsCategore ] = useState(null)    

    useEffect(()=>{
        const getAllProducts = async()=>{
            try {
                const {data} = axios.get('https://fakestoreapi.com/products').then(products =>{
                    
                    setProducts(products.data)
                }).catch();
               
                
            } catch (error) {
                setProducts(null)
            }
        }
        const getAllCategorie = async()=>{
            axios.get("https://fakestoreapi.com/products/categories").then((categore)=>{
                setCategory(categore.data)
            }).catch()
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

    const newCategory = category&&category.slice(0,2)


    console.log("newCategory : ",newCategory)
    return (  
        <div className={Styles.parent} dir="rtl">

            <div>
                {
                    category ? category.map((category,index) => {
                        const filterd = products&&products.filter( e => e.category === category)
                            
                            return(
                                <div>
                                   <div dir="rtl" className={Styles.sliderParent} key={index}>
                                    
                                        {category && (
                                            <div className={Styles.Slider_categoryParent}>
                                                <Link to={`/category?name=${category}`} className={Styles.Slider_categoryLink}>نمایش همه محصولات : {category} <BsFillCaretLeftFill/></Link>
                                            </div>
                                        ) }
                                        <div  className={Styles.item} dir="ltr" key={index}>
                                            <Carousel infinite={true} className={Styles.sliders} responsive={responsive}>
                                                {filterd ? filterd.map( (item)=>{return(
                                                    <ProductListItem item = {item}/>
                                                )}) : <p>Loding...</p>}
                                            </Carousel>
                                            {/* <Category/> */}
                                        </div>


                                    </div>
                                        {index === 1 && <Category/>}
                                </div>
                            )
                    }) : <p>Loding...</p>
                }
            </div>
        </div>
    );
}
 
export default ProductList;