import {BiHeart} from "react-icons/bi";
import  LoginStyles from'../user/LoginStyles.module.css'
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import {AiFillStar} from "react-icons/ai";
import SmallLoading from '../../common/small Loding/SmallLoading';
import Styles from './Menu.module.css'
import logoBrown from '../../image/logoBrown.png'


const Menu = ({categories , setCloseMenu , setIsMenu , isMenu}) => {
    const filteredCategories = categories&&categories.filter( e => e !== "men's clothing")
    return (
       <>
            <div className={LoginStyles.parent} onClick={()=>setIsMenu(false)}></div>
            <div className={Styles.main} onClick={()=>setCloseMenu(true)} dir='ltr'>

                <div className={Styles.logoParent}>
                    <NavLink to={'/'} onClick={()=> setIsMenu(false)}>
                        <img className={Styles.logoParent_Img} alt="لوگو" src={logoBrown}/>
                    </NavLink>
                </div>

                <div className={Styles.likeParent} >
                    <NavLink to={`/favoriteProducts`} className={Styles.likeParent_link} onClick={()=> setIsMenu(false)}>
                        <BiHeart className={Styles.iconStyle} size="1.7em"/> 
                        پسندیده ها         
                    </NavLink>
                </div>

                <div className={Styles.categoryParent}>
                    <div className={Styles.categoryParent_title}>
                         {!filteredCategories && <SmallLoading color='red'/>}
                       <p dir="rtl" className={Styles.categoryTitle}>دسته بندی ها : </p>
                    </div>
                    {filteredCategories && filteredCategories.map((categories , index) => (
                        <Link to={`/category?name=${categories}`}  onClick={()=> setIsMenu(false)} key={index} className={Styles.category}>{categories}</Link>
                    )) }
                </div>

                <div className={Styles.specialSaleParent}>
                    
                    <Link to={{pathname : `/category` , search:"name=men's clothing" , name:"specialSale"}} onClick={()=> setIsMenu(false)} className={Styles.specialSale}>
                        <AiFillStar className={Styles.specialSaleIcon} size="1.5em"/> 
                        محصولات ویژه
                    </Link>
                </div>


            </div>
       </>
    )
}

export default Menu