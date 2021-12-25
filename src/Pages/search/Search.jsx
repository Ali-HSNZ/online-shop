import axios from "axios";
import { useEffect, useState } from "react";
import {useQuery} from '../../hooks/useQuery'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Styles from './Search.module.css'
import Container from '../../common/Loding/Loding'
import { Link } from "react-router-dom";

import { BsFillCaretLeftFill } from "react-icons/bs";
import { useDispatch ,useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/ProductsActions";

const Search = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data)

    const query = useQuery().get("productName");

    const filterdProducts = products && products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) )



    useEffect(()=>{
        dispatch(fetchProducts())
    },[])



    const renderProduct = ()=>{
        let resualt = null;

        if(filterdProducts.length > 0){
            resualt = filterdProducts.map(products => (
                <div  key={products.id}>
                    <ProductListItem item={products} offPrice={products.offPrice}/>
                </div>
            ))
        }
        else if(products.length < 1){
            resualt = Container()
        }
        return resualt
    }
    return ( 
        <>
            {filterdProducts.length === 0 && products.length > 0 && (
                <div className={Styles.alert_product}>
                    <p>میرم</p>
                    <Link to="/">فروشگاه</Link>
                    <p>به</p>
                    <BsFillCaretLeftFill/>
                    <p> محصولی با این اسم پیدا نشد</p>
                </div>
            )}
        
            <div className={Styles.parent}>
                {renderProduct()}
            </div>
        </>
     );
}
 
export default Search;