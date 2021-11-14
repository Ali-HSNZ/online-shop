import Styles from  "./ProductList.module.css"
import image1 from '../../image/11.png'
import { BiHeart , BiBookmark, BiArrowToTop   } from "react-icons/bi";
import check_mark from '../../image/check.png'
import garanty from '../../image/badge.png'
import delivery from '../../image/delivery.png'
import {products} from '../../data/data'
import {UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider'
// console.log(products)
import { BiTrashAlt , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const ProductList = () => {




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

    return (  
        <div className={Styles.parent} dir="rtl">

            {
                products ? products.map((product,index) => {
                    return(
                        <div className={Styles.item} key={product.id} dir="ltr">

                            <div className={Styles.imgParent}>
                                <img src={product.image} alt={product.name}/>
                                <div className={Styles.like_bookMark_parent}>
                                    <div className={Styles.like_bookMark_div}>
                                        <div><BiHeart size="1.7em"/></div>
                                        <div><BiBookmark size="1.7em"/></div>
                                    </div>
                                </div>
                            </div>
        
        
                            <div className={Styles.titleParent}>
                                
                                <p className={Styles.title} dir="rtl" title={product.name}>{product.name.length >= 27 ? product.name.substring(0,28)+'...' : product.name}</p>
                            </div>
        
        
                            <div className={Styles.describtion}>
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
                                        <p>${product.price}</p>
                                        <p>${product.offPrice}</p>
                                    </div>
                            </div>
        
                        </div>
                    )
                }) : <p>Loding...</p>
            }

        </div>
    );
}
 
export default ProductList;