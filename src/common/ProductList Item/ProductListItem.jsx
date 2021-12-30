import Styles from './ProductListItem.module.css'

import React from 'react';

import {BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

import blackHeart from '../../image/heart.svg'
import RedHeart from '../../image/redHeart.svg'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


import { addToLike } from '../../redux/like/likeActions';
import { AddQuantity } from '../../redux/cart/cartActions';


const ProductListItem = ({item}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    const like = useSelector(state => state.like.like)
    

    const checkProductInCart=  (state , item)=>{
        const findItem = state.findIndex(e => e.id === item.id)
        if(findItem < 0) {return false}else{return true}
    }

    const checkProductInLike = (state , product)=>{
        const item = state.find(item => item.id === product.id)
        if(item&&item.like === true){return true}else{return false}
    }
    


    return (  
        <div className={Styles.itemParent}>
            <div className={Styles.item} dir="ltr">
                {item.offPrice >=1 ? <div className={`${Styles.header_offPrice} ${Styles.header_offPrice_gold}`}>
                    {item.offPrice >=10  && <AiFillStar/>}
                    <p>{item.offPrice}</p>
                    %
                </div> : ""}
                    

                <div className={Styles.item_header}>
                    <button className={Styles.rateParent} onClick={()=>dispatch(addToLike(item))}>
                        
                        <img className={Styles.item_header_img} src={ checkProductInLike(like , item)? RedHeart : blackHeart } alt='like'/>
                            <p>{ item.rating.rate}</p>
                            <span>({ checkProductInLike(like , item) ?  item.rating.count + 1 : item.rating.count})</span>
                    </button>
                </div>

                <Link to={{pathname:`/product` , search : `id=${item.id}&discount=${item.discount ? item.discount : 0}&offPrice=${item.offPrice ? item.offPrice : 0}`}} className={Styles.imgParent}>
                    <img src={item.image} alt={item.title}/>
                </Link>

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
                        <button className={Styles.itemAcrion} onClick={()=> dispatch(AddQuantity(item))}>
                            <p>خرید محصول</p>
                            <BiCart size="1.5em"/>
                        </button>
                    )}
                </div>

            </div>
        </div>
      
    );
}
 
export default React.memo(ProductListItem);
