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



    const exportCategorie = (categorieName)=>{
        const categorie =  products && products.filter(element => element.category === categorieName);
        return categorie
    }




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
            axios.get("http://fakestoreapi.com/products/categories").then((categore)=>{
                setCategory(categore.data)
            }).catch()
        }
        getAllCategorie()
        getAllProducts()
    },[])



    const dispatch = UseCartDispatch()
    const {cart} = UseCart()



    const checkProductInCart=  (state , product)=>{
        const item = state.findIndex(item => item.id === product.id)
        if(item < 0) {return false}else{return true}
    }


    const addToCartHandler = (product)=> {
        dispatch({type : "ADD_TO_CART" , payLoad : product})
    }

    const deleteProduct = (product)=> {
        dispatch({type : "DELETE_PRODUCT" , payLoad : product})
    }

    console.log()

    // const returnComponent = (category)=>{
        // const productCategore =products&& products.filter(item => item.category === category);

        // productCategore && productCategore.map(e => console.log(e))

        // console.log(category)

        // return(
        //     <div>
        //         {productCategore && productCategore.map(e => {return (
        //            <>
        //             <p>{e.title}</p>
        //             <p style={{color:'red' , fontWeight:'700',fontFamily:'iransansweb'}}>{category}</p>
        //             </>
        //         )} )}
        //      </div>
        //  )

         
    // } 


  
    return (  
        <div className={Styles.parent} dir="rtl">

            <div>
                {
                    category ? category.map((category,index) => {
                        const filterd = products&&products.filter( e => e.category === category)
                       
                        return(
                             <div dir="rtl" key={index}>
                                {category && (
                                     <div className={Styles.item} dir="ltr">
                                        <div>
                                            <p style={{color:'red'}}>{category}</p>
                                        </div>
                                    </div>
                                ) }
                                {filterd ? filterd.map((e,index) =>{return(
                                     <div className={Styles.item} dir="ltr" key={index}>
                                        <div className={Styles.describtion}>
                                            <p>{e.title}</p>
                                        </div>
                                    </div>
                                )}) : <p>Loding...</p>}
                            </div>
                        )
                          
                        
                    }) : <p>Loding...</p>
                }
            </div>

            {/* {
                products ? products.map((product) => {
                    return(
                        <div className={Styles.item} key={product.id} dir="ltr">

                            <div className={Styles.imgParent}>
                                <img src={product.image} alt={product.title}/>
                                <div className={Styles.like_bookMark_parent}>

                                    <div className={Styles.likeParent}>
                                           <BiHeart size="1.3em" style={{color:'red'}}/>
                                            <p>{product.rating.rate}</p>
                                            <span>({product.rating.count})</span>
                                        
                                       
                                    </div>
                                </div>
                            </div>
        
        
                            <div className={Styles.titleParent}>
                                
                                <p className={Styles.title} dir="rtl" title={product.title}>{product.title.length >= 20 ? product.title.substring(0,20)+'...' : product.title}</p>
                            </div>
        
        
                            {/* <div className={Styles.describtion}>
                                {product.description.map((productSupport , index) => {return (
                                    <div key={index}>
                                        <p>{productSupport.support}</p> 
                                        <img src={
                                            productSupport.support === "ارسال رایگان" && delivery ||
                                            productSupport.support === "اورجینال" && check_mark ||
                                            productSupport.support === "گارانتی مادام العمر" && garanty
                                        } alt={product.name}/>
                                    </div>
                                )})}
                            </div>
        
        
                            <div className={Styles.footer}>

                                    <div className={Styles.addToCartParent}>
                                            {checkProductInCart(cart , product) ?   
                                                <> 
                                                    <Link to="/cart">سبد خرید</Link>
                                                    <button className={Styles.trashBtn} onClick={() => deleteProduct(product)}>
                                                        <BiTrashAlt style={{cursor:'pointer'}}  size="2.1em"/>
                                                    </button>
                                                </> : 
                                                <button className={Styles.addTodoBtn} onClick={()=>addToCartHandler(product)}>
                                                    خرید محصول
                                                </button>
                                            }
                                    </div>


                                    
                                    <div className={Styles.price}>
                                        {/* <p>${product.price}</p> 
                                        <p>${product.price}</p>
                                    </div>
                            </div>
        
                        </div>
                    )
                }) : <p>در حال بارگیری داده ها...</p>
            } */}

        </div>
    );
}
 
export default ProductList;