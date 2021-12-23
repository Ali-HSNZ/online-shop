
import React,{ useEffect, useState , useRef } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Container from '../../common/Loding/Loding'
import _ from "lodash"
import { useDispatch } from "react-redux";
import { fetchProductsCategory } from "../../redux/products category/productsCategoryActions";
import { useSelector } from "react-redux";


const CategoryPage = ({location}) => {
    const products = useSelector(state => state.productsCategory)
    
    
    const query = useQuery().get('name');
    const isSpecialSale = location.name === "specialSale";
    
    
    const [productsAction , setProductsAction] = useState(products.data)
    const [isProductsOnSearched , setIsProductsOnSearched] = useState(false)
    const  [searchData , setSearchData] = useState(null)



    const dispatch = useDispatch()

    const inputSearchRef = useRef()


    useEffect(()=>{
        dispatch(fetchProductsCategory(query))
    },[query])

    useEffect(()=>{
        const item = products.data ? products.data.filter(e => e.title.toLowerCase().includes(searchData && searchData.toLowerCase())) : []
       
        if(searchData&&searchData.length > 0){
            item.length === 0 ? setIsProductsOnSearched(true)  : setIsProductsOnSearched(false)
            setProductsAction(item)
        }else{
            setProductsAction(products.data)
            setIsProductsOnSearched(false)
        }
    },[searchData , products])

    const renderProducts = ()=>{
        let resualt = null;

        if(productsAction.length > 0){
            resualt = productsAction.map((item,index) =>{
                return(
                    <div key={index}>
                        <ProductListItem  isLink={true} item={item}/>
                    </div>
                )
            })
        }else{
            resualt = Container()
        }

        return resualt;
    }

    const sortHandler = (e)=>{
        if(e === "highest"){
            setProductsAction(_.orderBy(products.data,"price",'desc'))
        }
        else if(e === "lowest"){
            setProductsAction(_.orderBy(products.data,"price",'asc'))
        }
        else if(e === "highestDiscount"){
            const filterProducts = products.data && products.data.filter(product => product.discount >= 0)
            const sortProducts = _.orderBy(filterProducts,"discount",'desc')
            setProductsAction(sortProducts)
        }
        else if(e === "amazing"){
            const sortAmazing = products.data && products.data.filter(product => product.offPrice !== 0)
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
                    {renderProducts().length > 0 && (
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