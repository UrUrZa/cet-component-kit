import React, { ReactNode, useEffect, useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSwiper = styled(Swiper)`
  &.swiper {
    height: 100%;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  width: auto;
  height: auto;
  overflow: auto;
  `;  

export interface ISellableItemsCarouselProps {
  currentItemIndex: number;
  items: ReactNode[];
  onItemChange: (itemIndex: number) => void;
}

const SellableItemsCarousel: React.FC<ISellableItemsCarouselProps> = ({items, currentItemIndex, onItemChange }) => {

  const swiperRef = useRef(null) as any;

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && currentItemIndex !== -1) {
      swiperRef.current.swiper.slideTo(currentItemIndex);
    }
  }, [currentItemIndex]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    onItemChange(currentIndex);
  };

  return (
    <StyledBox>
      <StyledSwiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -10,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <StyledSwiperSlide key={index}>
            {item}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledBox>
  );
};

export default SellableItemsCarousel;
