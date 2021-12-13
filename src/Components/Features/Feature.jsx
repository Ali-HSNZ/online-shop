import Styles from './Feature.module.css'
import guarantee from '../../image/guarantee (4).png'
import creditCard from '../../image/credit-card.png'
import headphones from '../../image/headphones.png'
import truck from '../../image/delivery-truck.png'
import returnBox from '../../image/return-box.png'


import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore ,{Autoplay, Navigation , Pagination}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'
import './featureSlider.css'

SwiperCore.use([Navigation , Pagination , Autoplay])



const Feature = () => {
    return (
        <div className='FeatureSwiperParent' dir='ltr'>
            
            {/* <Swiper loop={true} navigation pagination  tag="div" wrapperTag="div" spaceBetween={0} slidesPerView={4} */}
            <Swiper loop={true} navigation  tag="div" wrapperTag="div" spaceBetween={0} slidesPerView={5}

                    breakpoints= {{
                        0: {
                        slidesPerView: 2,
                        },
                        600: {
                        slidesPerView: 3,
                        },
                        820: {
                        slidesPerView: 4,
                        },
                        1260: {
                            slidesPerView: 5,
                        }
                    }}
                    
                    autoplay={{delay:1900}}

                    >
                <SwiperSlide>
                    <div className={Styles.parent_features}>
                        <div className={Styles.imgParent}>
                            <img src={headphones}/>
                        </div>
                        <p> پشتیبانی </p>
                    </div> 
                </SwiperSlide>


                <SwiperSlide>
                    <div className={Styles.parent_features}>
                        <div className={Styles.imgParent}>
                            <img src={truck}/>
                        </div>
                        <p>تحویل سریع</p>
                    </div>
                </SwiperSlide>
                

                <SwiperSlide>
                    <div className={Styles.parent_features}>
                        <div className={Styles.imgParent}>
                            <img src={creditCard}/>
                        </div>
                        <p>پرداخت مطمئن</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Styles.parent_features}>
                        <div className={Styles.imgParent}>
                            <img src={guarantee}/>
                        </div>
                        <p>ضمانت کیفیت</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Styles.parent_features}>
                        <div className={Styles.imgParent}>
                            <img src={returnBox}/>
                        </div>
                        <p>بازگشت کالا</p>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
}
export default Feature;


