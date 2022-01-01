
import React,{ useEffect, useState , useRef } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Container from '../../common/Loding/Loding'
import _ from "lodash"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProductsOnCategory } from "../../feature/productsOnCategory/productsOnCategory";


const CategoryPage = ({location}) => {
    const products = useSelector(state => state.productsOnCategory.data)
    
    
    const query = useQuery().get('name');
    const isSpecialSale = location.name === "specialSale";
    
    
    const [productsAction , setProductsAction] = useState(products)
    const [isProductsOnSearched , setIsProductsOnSearched] = useState(false)
    const  [searchData , setSearchData] = useState(null)



    const dispatch = useDispatch()

    const inputSearchRef = useRef()


    useEffect(()=>{
        dispatch(fetchProductsOnCategory(query))
    },[query , dispatch])

    useEffect(()=>{
        const item = products ? products.filter(e => e.title.toLowerCase().includes(searchData && searchData.toLowerCase())) : []
       
        if(searchData && searchData.length > 0){
            item.length === 0 ? setIsProductsOnSearched(true)  : setIsProductsOnSearched(false)
            setProductsAction(item)
        }else{
            setProductsAction(products)
            setIsProductsOnSearched(false)
        }
    },[searchData , products])

    const renderProducts = ()=>{
        let resualt = null;

        if(productsAction.length > 0 && products){
            resualt = productsAction.map((item,index) =>{
                return(
                    <div key={index}>
                        <ProductListItem item={item}/>
                    </div>
                )
            })
        }
        else if (isProductsOnSearched === false){
            resualt = Container()
        }

        return resualt;
    }

    const sortHandler = (e)=>{
        if(e === "highest"){
            setProductsAction(_.orderBy(products,"price",'desc'))
        }
        else if(e === "lowest"){
            setProductsAction(_.orderBy(products,"price",'asc'))
        }
        else if(e === "highestDiscount"){
            const filterProducts = products && products.filter(product => product.discount >= 0)
            const sortProducts = _.orderBy(filterProducts,"discount",'desc')
            setProductsAction(sortProducts)
        }
        else if(e === "amazing"){
            const sortAmazing = products && products.filter(product => product.offPrice !== 0)
            setProductsAction(sortAmazing)
        }
    }




    return ( 
        <>
            {products && (
                <div className={Styles.filterParent}>
                    <div className={Styles.btnAmazingProducts_parent}>
                        <div>
                            <button className={Styles.shegefthAngiz} onClick={()=> sortHandler("amazing")}> محصولات شگفت انگیز</button>
                            <button className={Styles.shegefthAngiz} onClick={()=> sortHandler("highestDiscount")}>بیشترین تخفیف</button>
                            <p>  : محصولات ویژه </p>
                        </div>

                        <div>
                            <button onClick={()=>sortHandler("highest")} className={Styles.sortBtn}>بیشترین</button>
                            <button onClick={()=>sortHandler("lowest")} className={Styles.sortBtn}>کمترین</button>
                            <p> : فیلتر قیمت</p>
                        </div>

                    </div>
                    <div className={Styles.searchParent}>
                        <input placeholder=" جستجو بین همه محصولات" ref={inputSearchRef} dir='rtl' onChange={e=>setSearchData(e.target.value)}/>
                        <p className={Styles.searchText}> : جستجو</p>
                    </div>
                </div>
            )}

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
                    {productsAction.length > 0 && (
                        <div className={Styles.categoryStyle}>
                        <p>{query}</p>
                            <div className={Styles.categoryLine_parent}>
                                <div></div>     <div></div>     <div></div>     <div></div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {isProductsOnSearched === true && (
                <div className={Styles.noDataOnSearched}>
                    <div className={Styles.noDataOnSearched_text} dir='rtl'>
                        محصولی با اسم 
                        <p style={{color:'black'}}>{inputSearchRef.current.value}</p>
                        پیدا نشد
                    </div>
                </div>
            )}

            <div className={Styles.parent}>{renderProducts()}</div>
        
        </>
    );
}
 
export default React.memo(CategoryPage);