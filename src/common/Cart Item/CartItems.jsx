import Styles from './CartItems.module.css'
import {UseCartDispatch } from '../../Context/cartContext/CartProvider';
import { BiTrash , BiMinus  ,BiPlus , BiChevronLeft } from "react-icons/bi";
import {AiFillStar} from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
import { AiFillCaretUp ,AiFillCaretLeft} from "react-icons/ai";

const CartItems = ({product , checkout}) => {

    const dispatch = UseCartDispatch()

    const [isDescribtion , setIsDescribtion] = useState(false)
    
    const AddQuantity = (product)=> {
        dispatch({type : "ADD_TO_CART" , payLoad : product})
    }
    const DecrimentQuantity = (product)=> {
        dispatch({type : "DECRIMENT_TO_CART" , payLoad : product})
    }
    const deleteProduct = (product)=>{
        dispatch({type : "DELETE_PRODUCT" , payLoad : product})
    }



    return (  
        <>
            <div className={Styles.cartItem} dir="rtl">
            
                <div className={Styles.cartItem_Product}>

                    <div className={Styles.cartItem_headerParent}>
                            {product.discount &&(
                                <p className={Styles.headerOffPrice}>%{product.offPrice}
                                
                                {product.offPrice >=10  && <AiFillStar style={{marginRight:'3px'}}/>}
                                </p>
                            )}
                            <div className={Styles.cartItem_header_offPrice}>
                                <p className={Styles.headerParent_ratingCount}>({product.rating.count})</p>
                                <p className={Styles.headerParent_ratingRate}>{product.rating.rate}</p>
                            </div>
                    </div>

                    <div className={Styles.imageParent}>
                        <img src={product.image} alt="product img"/>
                    </div>

                    <div className={Styles.describrion }>
                        <p className={Styles.describrion_title}>{product.title}</p>
                        <div className={Styles.price_quantityParent}>
                            <div>
                                {product.discount &&  <div className={Styles.describrion_offPrice}><p>تخفیف  : {product.discount}$</p></div>}
                                <div className={Styles.describrion_orgPrice}><p>قیمت : {product.price}$</p></div>
                            </div>
                           {checkout === true &&  <p className={Styles.describrion_quantity}>تعداد : {product.quantity}</p>}
                        </div>
                    </div>


                    {!checkout &&(
                        <div className={Styles.productAction}>
                        
                                <div className={Styles.addProductInCart}>
                                    <button onClick={()=> AddQuantity(product)}><BiPlus size="1.2em"/></button>
                                    <p>{product.quantity}</p>
                                    <button onClick={()=> DecrimentQuantity(product)}>{product.quantity === 1 ? <FiTrash2 size="1rem"/> : <BiMinus size="1.2em"/> }</button>
                                </div>

                                <div className={Styles.deleteProductParent}>
                                    <button onClick={()=> deleteProduct(product)}><FiTrash2 style={{marginLeft:'3px'}} size="1rem"/> حذف محصول</button>
                                </div>
                        </div>
                    )}

                </div>
                
                <div className={Styles.cartItem_Describtion}> 
                    <button className={Styles.productDiscribtionParent} onClick={()=> setIsDescribtion(!isDescribtion)}>
                        <p>
                            توضیحات <BiChevronLeft size="1.5em" />
                        </p>

                        <p>
                            {isDescribtion=== true ? <BiMinus size="1.2em"/> : <BiPlus size="1.2em"/>}
                        </p>
                    </button>

                    {isDescribtion === true && (
                        <div className={Styles.cartItem_Describtion_text}>
                           {product.description}
                        </div>
                    )}
                </div>


            </div>


        </>
    );
}
 
export default CartItems;