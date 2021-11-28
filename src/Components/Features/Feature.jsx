import Styles from './Feature.module.css'
import guarantee from '../../image/guarantee (4).png'
import creditCard from '../../image/credit-card.png'
import headphones from '../../image/headphones.png'
import truck from '../../image/delivery-truck.png'
import returnBox from '../../image/return-box.png'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1220 },
        items:5
    },
    desktop: {
        breakpoint: { max: 1220, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 3
    }
};
const Feature = () => {
    return (
        <div className={Styles.parent}>
            
            <Carousel  responsive={responsive}  className={Styles.sliders} infinite={true}>
                <div className={Styles.parent_features}>
                    <div className={Styles.imgParent}>
                        <img src={headphones}/>
                    </div>
                   <p> پشتیبانی </p>
                </div>
                
                <div className={Styles.parent_features}>
                    <div className={Styles.imgParent}>
                        <img src={truck}/>
                    </div>
                    <p>تحویل سریع</p>
                </div>

                <div className={Styles.parent_features}>
                    <div className={Styles.imgParent}>
                        <img src={creditCard}/>
                    </div>
                    <p>پرداخت مطمئن</p>
                </div>

                <div className={Styles.parent_features}>
                    <div className={Styles.imgParent}>
                        <img src={guarantee}/>
                    </div>
                    <p>ضمانت کیفیت</p>
                </div>

                <div className={Styles.parent_features}>
                    <div className={Styles.imgParent}>
                        <img src={returnBox}/>
                    </div>
                    <p>بازگشت کالا</p>
                </div>

            </Carousel>

        </div>
    );
}
export default Feature;


