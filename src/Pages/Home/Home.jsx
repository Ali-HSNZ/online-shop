import Feature from "../../Components/Features/Feature";
import ProductList from "../../Components/ProductList/ProductList";
import Slide from "../../Components/Slide/Slide"
import Styles from './Home.module.css'
const Home = () => {
  
    return (
        <div className={Styles.parent}>
            <div className={Styles.parentProduct}>
                <ProductList/>
                <Feature/>
                <Slide/>
            </div>
        </div>
    );

}
 
export default Home;