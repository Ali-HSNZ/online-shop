import Styles from  "./ProductList.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import ProductListItem from "../../common/ProductList Item/ProductListItem";
import Banner from "../../common/Banner/Banner";


const ProductList = () => {

    const [products , setProducts] = useState(null)
    const [category , setCategory] = useState(null)

    useEffect(()=>{
        const getAllProducts = async()=>{
            try {
                axios.get('https://fakestoreapi.com/products').then(products =>{
                    setProducts(products.data)
                }).catch();
            } catch (error) {
                setProducts(null)
            }
        }
        const getAllCategorie = async()=>{
            axios.get("https://fakestoreapi.com/products/categories").then((categore)=>{
                setCategory(categore.data)
            }).catch(
                setCategory(null)
            )
        }
        getAllCategorie()
        getAllProducts()
    },[])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1220 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1220, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    const discountProducts = 11;
    

    if(products){
        for(var i = 0 ; i <= discountProducts ; i++){
            var index = Math.floor(Math.random()*discountProducts);
            products[index].offPrice = Math.floor(Math.random()*50) + 2
            products[index].discount = Math.floor(Math.random()*200) + 2
        }
    }


    return (  
        <div className={Styles.parent} dir="rtl">

            <div>
                {
               
                    category ? category.map((mapOnCategory,index) => {
                        const filterd = products&&products.filter( e => e.category === mapOnCategory)

                            
                            return(
                                <div key={index}>
                                    {mapOnCategory === "jewelery" && <Banner category={mapOnCategory}/> || mapOnCategory === "women's clothing" ? <Banner category={mapOnCategory}/> : 

                                    
                                        <div dir="rtl" className={Styles.sliderParent} key={index}>
                                            
                                            {category && (
                                                <div className={Styles.Slider_categoryParent}>
                                                    <Link to={`/category?name=${mapOnCategory}`} className={Styles.Slider_categoryLink}>{mapOnCategory} <BsFillCaretLeftFill/></Link>
                                                    <div className={Styles.categoryLine_parent}>
                                                        <div></div>     <div></div>     <div></div>     <div></div>
                                                    </div>
                                                </div>
                                            ) }
                                            <div  className={Styles.item} dir="ltr" key={index}>
                                                <Carousel infinite={true} className={Styles.sliders} responsive={responsive}>
                                                    {filterd ? filterd.map(
                                                        item=>{return(
                                                        
                                                        <ProductListItem key={item.id} item = {item} offPrice={item.offPrice}/>
                                                    )}) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}>در حال بارگیری محصولات ...</p>}
                                                </Carousel>
                                            </div>


                                        </div>
                                        
                                    }
                                </div>
                            )
                    }) : <p style={{color:'green' , marginTop:'20px',fontFamily:'iransansweb',fontWeight:'700'}}> در حال بارگیری دسته بندی ها و محصولات ...</p>
                }
            </div>
        </div>
    );
}
 
export default ProductList;