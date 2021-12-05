import Styles from './ProductListItem.module.css'
import { BiHeart} from "react-icons/bi";
import {UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider'
import { BiTrashAlt , BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import { useEffect, useState } from 'react';


const ProductListItem = ({item , isLink , goToTop}) => {
    const dispatch = UseCartDispatch()
    const {cart} = UseCart()

    const [isClickedOnProducts , setIsClickedOnProducts] = useState(false)

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
        <div className={Styles.itemParent}>
            {/* <div className={Styles.itemParent_center}> */}

                <div className={Styles.item} dir="ltr">
                    {item.offPrice >=1 ? <div className={`${Styles.header_offPrice} ${Styles.header_offPrice_gold}`}>
                        {item.offPrice >=10  && <AiFillStar/>}
                        <p>{item.offPrice}</p>
                        %
                    </div> : ""}
                    

                    <div className={Styles.item_header}>
                        <div className={Styles.likeParent}>
                            <BiHeart size="1.3em" style={{color:'red'}}/>
                                <p>{item.rating.rate}</p>
                                <span>{item.rating.count}</span>
                        </div>
                    </div>

                    {isLink === true ? (
                        <Link to={{pathname:`/product` , search : `id=${item.id}&discount=${item.discount ? item.discount : 0}&offPrice=${item.offPrice ? item.offPrice : 0}`}} className={Styles.imgParent}>
                            <img src={item.image} alt={item.title}/>
                        </Link>
                    ) : (
                        <div className={Styles.imgParent}>
                            <img src={item.image} alt={item.title}/>
                        </div>
                    )}


                    

                    <div className={Styles.titleParent}>
                        <p className={Styles.title} title={item.title}>{item.title.length >= 20 ? item.title.substring(0,20)+'...' : item.title}</p>
                    </div>

                    <div className={Styles.item_footer} dir="rtl">
                        <p dir="rtl">قیمت : {item.price}$</p>
                        {item.discount >= 1 ? <p className={Styles.itemOffPrice} dir="rtl">تخفیف : {item.discount}$</p> : ""}
                    </div>


                <div className={Styles.itemActionParent}>
                    {checkProductInCart(cart , item) === true ? (
                        <Link to="/cart" className={Styles.itemAcrionActive}>سبد خرید</Link>
                    ) : (
                        <button className={Styles.itemAcrion} onClick={()=> {return addToCartHandler(item)}}>
                            <p>خرید محصول</p>
                            <BiShoppingBag size="1.5em"/>
                        </button>
                    )
                    }

                    
                </div>


            
            
            
            
            
            
                </div>

        {/* </div> */}
    </div>
      
    );
}
 
export default ProductListItem;