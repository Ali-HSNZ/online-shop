import Styles from './Slider.module.css'
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import { BsFillCaretLeftFill } from "react-icons/bs";

const Slider = () => {

const slide = [
        {id : 1 , dot:false , title : " 1 سلام زندگی" ,  imageSrc : "https://dkstatics-public.digikala.com/digikala-adservice-banners/119ea8f18b5660c6d4e8e4a73f72130a8beda82a_1637149599.jpg" },
        {id : 2 , dot:false , title : " 2 سلام زندگی" ,  imageSrc : "https://dkstatics-public.digikala.com/digikala-adservice-banners/0f496bd8c34877e25032e7e708f2e29c88b607c2_1637063652.jpg" },
        {id : 3 , dot:false , title : " 3 سلام زندگی" ,  imageSrc : "https://dkstatics-public.digikala.com/digikala-adservice-banners/a16e123de6ba49e02bdaa9e2813826e27aad74d0_1637262761.jpg" },

    ]
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const returnComponent = ()=> {
        var returnValue;

        returnValue = slide ?
            <div className={Styles.parent}>
                <Carousel infinite={true} className={Styles.sliders} responsive={responsive}>
                    {slide.map((e , index) => {
                        return (
                            <div className={Styles.item} key={index}>
                                    <img src={e.imageSrc}  alt={e.imageSrc} className={Styles.imgParent_imgActive}/>
                                    <Link to="/" className={Styles.linkBtn}><BsFillCaretLeftFill style={{marginRight:"5px"}}/>دیدن محصول </Link>
                            </div>
                            )
                    })}
                </Carousel>
            </div>

        : <h1>Loding</h1>

        return returnValue
    }

    return (
        <>{returnComponent()}</>
    );
    
}
 
export default Slider;