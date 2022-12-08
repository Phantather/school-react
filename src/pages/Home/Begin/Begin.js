import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade} from "swiper";
import BeginSlideBlock from "./BeginSlideBlock/BeginSlideBlock";
import "swiper/css";
import "swiper/css/effect-fade";
import img1 from '../../../assets/begin/bg1.png'
import img2 from '../../../assets/begin/bg2.png'
import img3 from '../../../assets/begin/bg3.png'
import img4 from '../../../assets/begin/bg4.png'
import img5 from '../../../assets/begin/bg5.png'
import img6 from '../../../assets/begin/bg6.png'
import img7 from '../../../assets/begin/bg7.png'

const Begin = () => {
    return (
        <section className="begin">
            <Swiper
                centeredSlides={true}
                loop={true}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                navigation={true}
                modules={[Autoplay,EffectFade]}
                className="begin__slide"
            >
                <SwiperSlide>
                    <BeginSlideBlock img={img1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img6}/>
                </SwiperSlide>
                <SwiperSlide>
                    <BeginSlideBlock img={img7}/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Begin;