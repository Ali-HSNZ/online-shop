
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import SwiperCore ,{Navigation , Pagination}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import './styles.css'


SwiperCore.use([Navigation , Pagination])

const Slider = () => {

  return (  
          <div>
                  <Swiper navigation pagination pagination={{ "dynamicBullets": true}} tag="section" wrapperTag="div" style={{borderRadius:'5px'}} spaceBetween={0} slidesPerView={1}>

                        <SwiperSlide>
                              <Link to="https://swiperjs.com/get-started#swiper-css-styles-size">
                                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02bfa74f0678ff037e7b72c32f00a41420050a9f_1638022430.jpg"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="https://swiperjs.com/get-started#swiper-css-styles-size">
                                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02bfa74f0678ff037e7b72c32f00a41420050a9f_1638022430.jpg"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="https://swiperjs.com/get-started#swiper-css-styles-size">
                                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02bfa74f0678ff037e7b72c32f00a41420050a9f_1638022430.jpg"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="https://swiperjs.com/get-started#swiper-css-styles-size">
                                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/02bfa74f0678ff037e7b72c32f00a41420050a9f_1638022430.jpg"/>
                              </Link>
                        </SwiperSlide>

                  </Swiper>
          </div>
  );
}
 
export default Slider;

