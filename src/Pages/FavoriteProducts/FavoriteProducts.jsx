import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProductListItem from '../../common/ProductList Item/ProductListItem';
import {UseLikeState} from '../../Context/likeContext/likeContext';
import Styles from './FavoriteProducts.module.css'
const FavoriteProducts = () => {
    const {like} = UseLikeState()

    const filterLike = like&&like.filter(e => e.like  === true)

    return ( 
        <>
            {filterLike.length > 0 && <div className={Styles.parent}>
                {filterLike.length > 0 && filterLike.map(e => {
                    return(
                        <div>
                            <ProductListItem item={e}/>
                        </div>
                    )
                })}
            </div>}
            {filterLike.length === 0 && (
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