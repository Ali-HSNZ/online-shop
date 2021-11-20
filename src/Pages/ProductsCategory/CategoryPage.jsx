import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import {UseCartDispatch } from '../../Context/cartContext/CartProvider'
import ProductListItem from "../../common/ProductList Item/ProductListItem";

const CategoryPage = () => {
    const [products,setProducts] = useState(null)
    const query = useQuery().get('name');

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
    return ( 
        <div className={Styles.parent}>
            {products ? products.map((item,index) =>{return(
               <ProductListItem item={item}/>
            )}) : <p>Loding...</p>}
        </div>
    );
}
 
export default CategoryPage;