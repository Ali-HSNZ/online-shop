import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import SwiperCore ,{Autoplay, Navigation , Pagination}from 'swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/navigation/navigation.scss'

import './styles.css'

import electronicBanner from '../../image/electronic banner.jpg'
import jeweleryBanner from '../../image/jeweleryBanner.jpg'
import menBanner from '../../image/man1.jpg'
import womanBanner from '../../image/woman1.jpg'

SwiperCore.use([Navigation , Pagination , Autoplay])

const Slider = () => {

  return ( 
      
    
          <div className='sliderSwiperParent'>
                  <Swiper loop={true} dir='rtl' navigation  pagination={{ "dynamicBullets": true}} tag="div" wrapperTag="div" style={{borderRadius:'5px'}} spaceBetween={0} slidesPerView={1} autoplay={{delay:2100}}>

                        <SwiperSlide>
                              <Link to="/category?name=electronics">
                                    <img src={electronicBanner} alt="electronics"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="/category?name=jewelery">
                                    <img src={jeweleryBanner} alt="jewelery"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="/category?name=men's clothing">
                                    <img src={menBanner} alt="men's clothing"/>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                              <Link to="/category?name=women's clothing">
                                    <img src={womanBanner} alt="women's clothing"/>
                              </Link>
                        </SwiperSlide>

                  </Swiper>
          </div>
  );
}
 
export default Slider;