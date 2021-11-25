import Styles from './Banner.module.css'
import { Link } from 'react-router-dom';
import bannerImage from '../../image/33.jpg'
import womanClouting from '../../image/womanClouting.jpg'


const Banner = ({category}) => {
    const categoryImage = category === "jewelery" ? bannerImage : womanClouting
    return (  
        <div className={Styles.parent}>
            <Link to={`/category?name=${category}`}>
                <img src={categoryImage} alt="product img"/>
            </Link>
        </div>
    );
}
 
export default Banner;