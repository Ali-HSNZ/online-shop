import Styles from './CartItems.module.css'
import { UseCart, UseCartDispatch } from '../../Context/cartContext/CartProvider';
import { BiTrash , BiMinus  ,BiPlus } from "react-icons/bi";

const CartItems = ({product , checkout}) => {

    const dispatch = UseCartDispatch()

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
        <div className={Styles.cartItem} dir="rtl">
            <div className={Styles.imageParent}>
                <img src={product.image}/>
            </div>

            <div className={checkout ? Styles.describrion_route_checkout :  Styles.describrion }>
                <p className={Styles.describrion_titile}>{product.title}</p>
                <div className={Styles.describrion_orginalPriceParent}><p>قیمت محصول :</p><p>{product.price * product.quantity}</p><p>تومان</p></div>
            </div>

            {!checkout &&(
                <div className={Styles.ProductAction}>
                
                        <div className={Styles.addProductInCart}>
                            <button onClick={()=> AddQuantity(product)}><BiPlus/></button>
                            <p>{product.quantity}</p>
                            <button onClick={()=> DecrimentQuantity(product)}>{product.quantity === 1 ? <BiTrash size="1rem"/> : <BiMinus/> }</button>
                        </div>

                        <div className={Styles.deleteProductParent}>
                            <button onClick={()=> deleteProduct(product)}><BiTrash size="1rem"/> حذف </button>
                        </div>
                </div>
            )}
        </div>
    );
}
 
export default CartItems;