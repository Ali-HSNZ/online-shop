import {BiHeart} from "react-icons/bi";
import  LoginStyles from'../user/LoginStyles.module.css'
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import {AiFillStar} from "react-icons/ai";
import SmallLoading from '../../common/small Loding/SmallLoading';
import Styles from './Menu.module.css'
import logoBrown from '../../image/logoBrown.png'


const Menu = ({categories , setCloseMenu , setIsMenu}) => {
    const filteredCategories = categories&&categories.filter( e => e !== "men's clothing")
    return (
       <>
            <div className={LoginStyles.parent} onClick={()=>setIsMenu(false)}></div>
            <div className={Styles.main} onClick={()=>setIsMenu(true)}>

                <div className={Styles.logoParent}>
                    <NavLink to={'/'} onClick={()=> setCloseMenu(true)}>
                        <img className={Styles.logoParent_Img} alt="لوگو" src={logoBrown}/>
                    </NavLink>
                </div>

                <div className={Styles.likeParent} >
                    <NavLink to={`/`} className={Styles.likeParent_link} onClick={()=> setCloseMenu(true)}>
                        <BiHeart className={Styles.iconStyle} size="1.7em"/> 
                        پسندیده ها         
                    </NavLink>
                </div>

                <div className={Styles.categoryParent}>
                    <div className={Styles.categoryParent_title}>
                         {!filteredCategories && <SmallLoading color='red'/>}
                       <p dir="rtl" className={Styles.categoryTitle}>دسته بندی ها : </p>
                    </div>
                    {filteredCategories && filteredCategories.map(categories => (
                        <Link to={`/category?name=${categories}`}  onClick={()=> setCloseMenu(true)} className={Styles.category}>{categories}</Link>
                    )) }
                </div>

                <div className={Styles.specialSaleParent}>
                    
                    <Link to={{pathname : `/category` , search:"name=men's clothing" , name:"specialSale"}}  onClick={()=> setCloseMenu(true)} className={Styles.specialSale}>
                        <AiFillStar className={Styles.specialSaleIcon} size="1.5em"/> 
                        محصولات ویژه
                    </Link>
                </div>


            </div>
       </>
    )
}

export default Menu