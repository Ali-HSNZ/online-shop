import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import { Link } from "react-router-dom";
import {UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider'
import { BiTrashAlt , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";
import { BiHeart , BiBookmark, BiArrowToTop   } from "react-icons/bi";

const CategoryPage = () => {
    const [products,setProducts] = useState(null)
    const {cart} = UseCart()
    const dispatch = UseCartDispatch()
    const query = useQuery().get('name');
    console.log(query)

    useEffect(()=>{
        const getProducts = async() => {
            if(query !== "" && query.length > 0){
                axios.get(`https://fakestoreapi.com/products/category/${query}`).then(products => {
                    return setProducts(products.data)
                }).catch()
            }
        }
        getProducts()
    },[])

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


    console.log("products in Category : ",products)

    return ( 
        <div className={Styles.parent}>
            {products ? products.map((item,index) =>{return(
                <div className={Styles.item} key={item.id} dir="ltr">


                    <div className={Styles.imgParent}>
                        <img src={item.image} alt={item.title}/>
                        <div className={Styles.like_bookMark_parent}>

                            <div className={Styles.likeParent}>
                                <BiHeart size="1.3em" style={{color:'red'}}/>
                                    <p>{item.rating.rate}</p>
                                    <span>({item.rating.count})</span>
                            </div>
                        </div>
                    </div>

                    <div className={Styles.titleParent}>
                        <p className={Styles.title} title={item.title}>{item.title.length >= 20 ? item.title.substring(0,20)+'...' : item.title}</p>
                    </div>



                    <div className={Styles.footer}>

                        <div className={Styles.addToCartParent}>
                                {checkProductInCart(cart , item) ?   
                                    <> 
                                        <Link to="/cart">سبد خرید</Link>
                                        <button className={Styles.trashBtn} onClick={() => deleteProduct(item)}>
                                            <BiTrashAlt style={{cursor:'pointer'}}  size="2.1em"/>
                                        </button>
                                    </> : 
                                    <button className={Styles.addTodoBtn} onClick={()=>addToCartHandler(item)}>
                                        خرید محصول
                                    </button>
                                }
                        </div>

                        <div className={Styles.price}>
                            <p>${item.price}</p> 
                            <p>${item.price}</p>
                        </div>
                    </div>



                </div>
            )}) : <p>Loding...</p>}
        </div>
    );
}
 
export default CategoryPage;