import Styles from './Banner.module.css'
import { Link } from 'react-router-dom';
import bannerImage from '../../image/33.jpg'




const Banner = () => {
    return (  
        <div className={Styles.parent}>
            <Link to="/">
                <img src={bannerImage}/>
            </Link>
        </div>
    );
}
 
export default Banner;