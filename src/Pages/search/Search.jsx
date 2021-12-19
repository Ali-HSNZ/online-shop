import axios from "axios";
import { useEffect, useState } from "react";
import {useQuery} from '../../hooks/useQuery'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Styles from './Search.module.css'
import Container from '../../common/Loding/Loding'
import { Link } from "react-router-dom";

import { BsFillCaretLeftFill } from "react-icons/bs";

const Search = () => {


    const [products , setProducts] = useState(null)

    const query = useQuery().get("productName");

    const filterdProducts = products && products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()) )



    useEffect(()=>{
        const getAllProducts = async()=>{
            await axios.get('https://fakestoreapi.com/products').then(product =>{
                return product.data.length > 0 ? setProducts(product.data) : setProducts('')
            }).catch();
        }

        getAllProducts()
    },[])



    if(products){
        for(let i = 0 ; i <= Math.floor(products.length/2) ; i++){
            const index = Math.floor(Math.random()*products.length);
            products[index].offPrice = Math.floor(Math.random()*50) + 1
            products[index].discount = Math.floor(Math.random()*200) + 1
        }
    }


    const renderProduct = ()=>{
        let resualt = null;

        if(filterdProducts && filterdProducts.length > 0){
            resualt = filterdProducts.map(products => (
                <div  key={products.id}>
                    <ProductListItem isLink={true} item={products} offPrice={products.offPrice}/>
                </div>
            ))
        }
        else if(products === null){
            resualt = Container()
        }
        return resualt
    }
    return ( 
        <>
            {filterdProducts&&filterdProducts.length === 0 && (
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