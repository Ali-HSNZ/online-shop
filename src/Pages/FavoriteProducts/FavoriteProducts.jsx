import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProductListItem from '../../common/ProductList Item/ProductListItem';
import { UseLikeDispatcher , UseLikeState} from '../../Context/likeContext/likeContext';
import Styles from './FavoriteProducts.module.css'
const FavoriteProducts = () => {
    const {like} = UseLikeState()
    return ( 
        <>
            {like.length > 0 && <div className={Styles.parent}>
                {like.length > 0 && like.map(e => {
                    return(
                        <div>
                            <ProductListItem item={e}/>
                        </div>
                    )
                })}
            </div>}
            {like.length === 0 && (
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