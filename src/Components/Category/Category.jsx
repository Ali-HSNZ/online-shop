import Styles from './Category.module.css'
import { Link } from 'react-router-dom';
import image1 from '../../image/123456.jpg'
import imageWoman from '../../image/woman.jpg'
import imageJewelery from '../../image/jewelery.jpg'
import imageElectronics from '../../image/electronics.jpg'


const Category = () => {
    return (  
        <div className={Styles.parent}>
            <p className={Styles.headerTitle}>تمامی دسته بندی های فروشگاه</p>
            <div className={Styles.itemParent}>
                <div className={Styles.item}>
                    <Link>
                        <img src={image1}/>
                        <div className={Styles.itemFront}>
                            <p>jewelery</p>
                            <p className={Styles.itemFront_count}>+ (6) کالا</p>
                        </div>
                    </Link>
                </div>
                <div className={Styles.item}>
                    <Link>
                        <img src={imageWoman}/>
                        <div className={Styles.itemFront}>
                            <p>jewelery</p>
                            <p className={Styles.itemFront_count}>+ (6) کالا</p>
                        </div>
                    </Link>
                    
                </div>
                <div className={Styles.item}>
                    <Link>
                        <img src={imageJewelery}/>
                        <div className={Styles.itemFront}>
                            <p>jewelery</p>
                            <p className={Styles.itemFront_count}>+ (6) کالا</p>
                        </div>
                    </Link>
                </div>
                <div className={Styles.item}>
                <Link>
                        <img src={imageElectronics}/>
                        <div className={Styles.itemFront}>
                            <p>jewelery</p>
                            <p className={Styles.itemFront_count}>+ (6) کالا</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Category;