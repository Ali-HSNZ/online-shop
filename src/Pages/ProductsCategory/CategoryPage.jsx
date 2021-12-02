import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Container from '../../common/Loding/Loding'
import Line from "../../common/line/Line";

const CategoryPage = (props) => {
    const [products,setProducts] = useState(null)
    const query = useQuery().get('name');
    const isSpecialSale = props.location.name === "specialSale"

    
    if(query === "men's clothing" && isSpecialSale){
        if(products&&products.length>0){
            for(let i = 0 ; i < products.length ; i++){
            products[i].offPrice = Math.floor(50 +Math.random()*40) + 1
            products[i].discount = Math.floor(20+Math.random()*200) + 1
            }
        }
    }else{
        if(products&&products.length>0){
            for(let i = 0 ; i <= 5 ; i++){
                const index = Math.floor(Math.random()*4);
                products[index].offPrice = Math.floor(Math.random()*18) + 1
                products[index].discount = Math.floor(Math.random()*200) + 1
            }
        }
    }

    useEffect(()=>{
        const getProducts = async() => {
            if(query !== "" && query.length >0){
                await axios.get(`https://fakestoreapi.com/products/category/${query}`).then(products => {
                    return products.data.length > 0 ? setProducts(products.data) :  setProducts('')
                }).catch()
            }else{
                
            }
        }
        getProducts()
    },[query])


    const renderProducts = ()=>{
        let resualt = null;

        if(products && products.length > 0){
            resualt = products.map((item,index) =>{return(
                <div>
                    <ProductListItem key={index} item={item}/>
                </div>
            )})
        }else if(products === null){
            resualt = Container()

        }            
        if(products === ""){
            resualt = <p>محصولی در این دسته بندی ثبت نشده است</p>
        }

        return resualt;
    }


    return ( 
        <>
        {query=== "men's clothing" && isSpecialSale ? (
            <>
             {renderProducts().length > 0 && (
                <div className={Styles.categoryStyle}>
                <p>محصولات شگفت انگیز</p>
                    <div className={Styles.categoryLine_parent}>
                        <div></div>     <div></div>     <div></div>     <div></div>
                    </div>
                </div>
             )}
            </>
        ) : (
            <>
                {renderProducts().length > 0 && (
                    <div className={Styles.categoryStyle}>
                    <p>{query}</p>
                        <div className={Styles.categoryLine_parent}>
                            <div></div>     <div></div>     <div></div>     <div></div>
                        </div>
                    </div>
                )}
            </>
        )
        
        }
        
            <div className={Styles.parent}>
                {
                   renderProducts()
                }
            </div>
        </>
    );
}
 
export default CategoryPage;