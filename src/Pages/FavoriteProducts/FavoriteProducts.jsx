import { BsFillCaretLeftFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductListItem from '../../common/ProductList Item/ProductListItem';
import Styles from './FavoriteProducts.module.css'
const FavoriteProducts = () => {
    const like = useSelector(state => state.like.like)

    const filterLike = like&&like.filter(e => e.like  === true)

    return ( 
        <>
            {
                filterLike.length > 0 && (
                    <div className={Styles.parent}>
                        {filterLike.map((product , index) => {
                            return(
                                <div key={index}>
                                    <ProductListItem  item={product}/>
                                </div>
                            )
                        })}
                    </div>
                )
            }
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