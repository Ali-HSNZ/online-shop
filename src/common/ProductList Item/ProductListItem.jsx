import Styles from './ProductListItem.module.css'
import { BiHeart} from "react-icons/bi";
import {UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider'
import { BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductListItem = ({item}) => {
    const dispatch = UseCartDispatch()
    const {cart} = UseCart()
    const checkProductInCart=  (state , product)=>{
        const item = state.findIndex(item => item.id === product.id)
        if(item < 0) {return false}else{return true}
    }
    
    const addToCartHandler = (product)=> {
        dispatch({type : "ADD_TO_CART" , payLoad : product})
    }


    const deleteProduct = (product)=> {
        dispatch({type : "DELETE_PRODUCT" , payLoad : product})
    }

    return (  
        <div className={Styles.item} key={item.id} dir="ltr">
            <div className={Styles.imgParent}>
                <img src={item.image} alt={item.title}/>
                <div className={Styles.like_bookMark_parent}>
                    <div className={Styles.likeParent}>
                        <BiHeart size="1.3em" style={{color:'red'}}/>
                            <p>{item.rating.rate}</p>
                            <span>({item.rating.count})</span>
                    </div>
                </div>
            </div>
            <div className={Styles.titleParent}>
                <p className={Styles.title} title={item.title}>{item.title.length >= 20 ? item.title.substring(0,20)+'...' : item.title}</p>
            </div>
            <div className={Styles.footer}>
                <div className={Styles.addToCartParent}>
                        {checkProductInCart(cart , item) ?   
                            <> 
                                <Link to="/cart">سبد خرید</Link>

                                <section className={Styles.trashBtn} onClick={() => deleteProduct(item)}>
                                    حذف
                                    <BiTrashAlt style={{cursor:'pointer'}}  size="1em"/> 

                                </section>
                            </> : 
                            <button className={Styles.addTodoBtn} onClick={()=>addToCartHandler(item)}>
                                خرید محصول
                            </button>
                        }
                </div>
                <div className={Styles.price}>
                    <p>${item.price}</p> 
                </div>
            </div>
        </div>
    );
}
 
export default ProductListItem;