import Feature from "../../Components/Features/Feature";
import ProductList from "../../Components/ProductList/ProductList";
import Styles from './Home.module.css'
import Slider from "../../Components/Slider/Slider";
const Home = () => {
  
    return (
        <div className={Styles.parent}>
            <div className={Styles.parentProduct}>
                <Slider/>
                <Feature/>
                <ProductList/>
            </div>
        </div>
    );

}
 
export default Home;