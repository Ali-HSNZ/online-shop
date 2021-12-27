import Styles from './Menu.module.css'

import {BiHeart} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import {AiFillStar} from "react-icons/ai";
import SmallLoading from '../../common/small Loding/SmallLoading';
import logoBrown from '../../image/logoBrown.png'

import { useDispatch  , useSelector} from "react-redux";

import { useEffect } from "react";

import {fetchingCategories} from '../../redux/categories/categoryActions'
import { windowIsMenu } from '../../redux/window/windowActions';


const Menu = () => {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.data)
    const filteredCategories = categories && categories.filter( e => e !== "men's clothing")

    useEffect(()=>{
        dispatch(fetchingCategories)
    },[])

    return (
       <>
            <div className={Styles.parent} onClick={()=>dispatch(windowIsMenu(false))}></div>
            <div className={Styles.main} dir='ltr'>

                <div className={Styles.logoParent}>
                    <NavLink to={'/'} onClick={()=>dispatch(windowIsMenu(false))}>
                        <img className={Styles.logoParent_Img} alt="لوگو" src={logoBrown}/>
                    </NavLink>
                </div>

                <div className={Styles.likeParent}>
                    <NavLink to={`/favoriteProducts`} className={Styles.likeParent_link} onClick={()=> dispatch(windowIsMenu(false))}>
                        <BiHeart className={Styles.iconStyle} size="1.7em"/> 
                        پسندیده ها         
                    </NavLink>
                </div>

                <div className={Styles.categoryParent}>
                    <div className={Styles.categoryParent_title}>
                         {categories.length === 0 && <SmallLoading color='red'/>}
                       <p dir="rtl" className={Styles.categoryTitle}>دسته بندی ها : </p>
                    </div>
                    {filteredCategories && filteredCategories.map((categories , index) => (
                        <Link to={`/category?name=${categories}`}  onClick={()=> dispatch(windowIsMenu(false))} key={index} className={Styles.category}>{categories}</Link>
                    )) }
                </div>

                <div className={Styles.specialSaleParent}>
                    
                    <Link to={{pathname : `/category` , search:"name=men's clothing" , name:"specialSale"}} onClick={()=> dispatch(windowIsMenu(false))} className={Styles.specialSale}>
                        <AiFillStar className={Styles.specialSaleIcon} size="1.5em"/> 
                        محصولات ویژه
                    </Link>
                </div>


            </div>
       </>
    )
}

export default Menu