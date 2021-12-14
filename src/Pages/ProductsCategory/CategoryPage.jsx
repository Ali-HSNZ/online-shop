import axios from "axios";
import { useEffect, useState , useRef } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Container from '../../common/Loding/Loding'

import _ from "lodash"

const CategoryPage = (props) => {
    const [products,setProducts] = useState(null)
    const [productsAction , setProductsAction] = useState(null)
    
    const query = useQuery().get('name');
    const isSpecialSale = props.location.name === "specialSale";
    const [isProductsOnSearched , setIsProductsOnSearched] = useState(false)
    

    const inputSearchRef = useRef()


    useEffect(()=>{
        const getProducts = async() => {
            if(query !== "" && query.length >0){
                await axios.get(`https://fakestoreapi.com/products/category/${query}`).then(products => {

                    if(products.data){
                        const newProucts = [...products.data]

                        for(let i = 0 ; i < newProucts.length ; i++){
                            newProucts[i].offPrice = 0
                            newProucts[i].discount = 0
                        }

                        for(let i = 0 ; i <= Math.floor(newProucts.length/2) ; i++){
                            const index = Math.floor(Math.random()*newProucts.length);
                            newProucts[index].offPrice = Math.floor(Math.random()*18) + 1
                            newProucts[index].discount = Math.floor(Math.random()*200) + 1
                        }

                        setProducts(newProucts)
                        setProductsAction(newProucts)
                    }

                }).catch()
            }else{}
        }
        getProducts()
    },[query])


    const renderProducts = ()=>{
        let resualt = null;

        if(productsAction && productsAction){
            resualt = productsAction.map((item,index) =>{return(
                <div key={index}>
                    <ProductListItem  isLink={true} item={item}/>
                </div>
            )})
        }else if(productsAction === null){
            resualt = Container()
        }            
        if(productsAction === ""){
            resualt = <p>محصولی در این دسته بندی ثبت نشده است</p>
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
        else if(e === "highestOffPrice"){
            const cloneProducts = [...products]
            const s = cloneProducts&&cloneProducts.filter(e => e.discount >= 0)
            const p = _.orderBy(s,"discount",'desc')
            setProductsAction(p)
        }
        else if(e === "filterShegefthAngiz"){
            const cloneProducts = [...products]
            const s = cloneProducts&&cloneProducts.filter(e => e.offPrice !== 0)
            setProductsAction(s)

        }
    }

    const  [searchData , setSearchData] = useState(null)

    useEffect(()=>{
        const item = products&&products.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()))

        if(searchData&&searchData.length > 0){
            if(item.length === 0){
                setIsProductsOnSearched(true)
            }else{
                setIsProductsOnSearched(false)
            }
            setProductsAction(item)
        }else{
            setProductsAction(products)
            setIsProductsOnSearched(false)

        }
        // setProducts(item)
    },[searchData])


    return ( 
        <>
        {products && (
                    <div className={Styles.filterParent}>
                        <div className={Styles.btnAmazingProducts_parent}>
                            <div>
                                <button className={Styles.shegefthAngiz} onClick={()=> sortHandler("filterShegefthAngiz")}> محصولات شگفت انگیز</button>
                                <button className={Styles.shegefthAngiz} onClick={()=> sortHandler("highestOffPrice")}>بیشترین تخفیف</button>
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
        )
        }
        

            {isProductsOnSearched === true && (
                <div className={Styles.noDataOnSearched}>
                    <div className={Styles.noDataOnSearched_text} dir='rtl'>
                        محصولی با اسم 
                        <p style={{color:'black'}}> hello </p>
                        پیدا نشد
                    </div>
                </div>
            )}
            <div className={Styles.parent}>
                {
                   renderProducts()
                }
            </div>
        </>
    );
}
 
export default CategoryPage;