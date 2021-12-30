import { BsFillCaretLeftFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductListItem from '../../common/ProductList Item/ProductListItem';
import Styles from './FavoriteProducts.module.css'


const FavoriteProducts = () => {

    const like = useSelector(state => state.like.like)
    const availableProducts = like && like.filter(e => e.like  === true)

    return ( 
        <>
            {
                availableProducts.length > 0 && (
                    <div className={Styles.parent}>
                        {availableProducts.map((product , index) => {
                            return(
                                <div key={index}>
                                    <ProductListItem  item={product}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            {availableProducts.length === 0 && (
                <div className={Styles.alert_product}>
                <p>میرم</p>
                <Link to="/">فروشگاه</Link>
                <p>به</p>
                <BsFillCaretLeftFill/>
                <p>لیست علاقه‌مندی ها خالیه </p>
            </div>
        )}
       </>
    );
}
 
export default FavoriteProducts;