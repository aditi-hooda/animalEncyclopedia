import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react'
import './Slider.css'

export default function Slider(props) {
    return (
        <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className={props.class + " pt-5"}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {props.slides && props.slides.map(slide => {
                return (
                    <SwiperSlide><img src={slide} /></SwiperSlide>
                )
            })}
        </Swiper>
    );
}
