import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
export interface ISellableItemsCarouselProps {
    currentItemIndex: number;
    items: ReactNode[];
    onItemChange: (itemIndex: number) => void;
}
export declare const SellableItemsCarousel: React.FC<ISellableItemsCarouselProps>;
