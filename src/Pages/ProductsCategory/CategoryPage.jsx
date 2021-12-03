import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import Styles from './CategoryPage.module.css'
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Container from '../../common/Loding/Loding'
import Line from "../../common/line/Line";

const CategoryPage = (props) => {
    const [products,setProducts] = useState(null)
    const [productsAction , setProductsAction] = useState(null)
    
    const query = useQuery().get('name');
    const isSpecialSale = props.location.name === "specialSale";
    const [searchValue , setSearchValue] = useState("")

    
    // if(query === "men's clothing" && isSpecialSale){
    //     if(products&&products.length>0){
    //         for(let i = 0 ; i < products.length ; i++){
    //         products[i].offPrice = Math.floor(50 +Math.random()*40) + 1
    //         products[i].discount = Math.floor(20+Math.random()*200) + 1
    //         }
    //     }
    // }else{
    //     if(products&&products.length>0){
    //         for(let i = 0 ; i <= 5 ; i++){
    //             const index = Math.floor(Math.random()*4);
    //             products[index].offPrice = Math.floor(Math.random()*18) + 1
    //             products[index].discount = Math.floor(Math.random()*200) + 1
    //         }
    //     }
    // }


    useEffect(()=>{
        const getProducts = async() => {
            if(query !== "" && query.length >0){
                await axios.get(`https://fakestoreapi.com/products/category/${query}`).then(products => {
                    // return products.data.length > 0 ? setProducts(products.data) :  setProducts('')

                    if(products.data){
                        const newProucts = [...products.data]
                        for(let i = 0 ; i <= 4 ; i++){
                            const index = Math.floor(Math.random()*newProucts.length);
                            newProucts[index].offPrice = Math.floor(Math.random()*18) + 1
                            newProucts[index].discount = Math.floor(Math.random()*200) + 1
                        }
                        setProducts(newProucts)
                        setProductsAction(newProucts)
                    }

                }).catch()
            }else{
                
            }
        }
        getProducts()
    },[query])


    const renderProducts = ()=>{
        let resualt = null;

        if(productsAction && productsAction){
            resualt = productsAction.map((item,index) =>{return(
                <div>
                    <ProductListItem key={index} item={item}/>
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

    const BigFilter = ()=>{}
    const smallFilter = ()=>{}


    // var searchData = "";
    const  [searchData , setSearchData] = useState(null)

    useEffect(()=>{
        const item = products&&products.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()))

        if(searchData&&searchData.length > 0){
            setProductsAction(item)
        }else{
            setProductsAction(products)
        }
        // setProducts(item)
    },[searchData])


    return ( 
        <>
            <div className={Styles.filterParent}>
                <button className={Styles.shegefthAngiz}> محصولات شگفت انگیز</button>
                <button className={Styles.shegefthAngiz}>بیشترین تخفیف</button>
                <div>
                    <button onClick={BigFilter}>بیشترین</button>
                    <button onClick={smallFilter}>کمترین</button>
                    <p> : فیلتر قیمت</p>
                </div>
                <div className={Styles.searchParent}>
                    {/* <button onClick={()=>searchHandler(searchData)}>جستجو</button> */}
                    <input placeholder=" جستجو بین محصولات" dir='rtl' onChange={e=>setSearchData(e.target.value)}/>
                    <p className={Styles.searchText}> : جستجو</p>
                </div>
            </div>

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