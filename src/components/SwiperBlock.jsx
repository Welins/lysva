import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperBlock() {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      allowTouchMove={false}
    >
      <SwiperSlide>
        <ReactCompareSlider
          handle={<ReactCompareSliderHandle style={{ color: '#168BED' }} />}
          itemOne={<ReactCompareSliderImage src="/assets/result-item-1-before.png" alt="Image before" />}
          itemTwo={<ReactCompareSliderImage src="/assets/result-item-1-after.png" alt="Image after" />}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReactCompareSlider
          handle={<ReactCompareSliderHandle style={{ color: '#168BED' }} />}
          itemOne={<ReactCompareSliderImage src="/assets/result-item-2-before.png" alt="Image before" />}
          itemTwo={<ReactCompareSliderImage src="/assets/result-item-2-after.png" alt="Image after" />}
        />
      </SwiperSlide>
    </Swiper>
  )
}
