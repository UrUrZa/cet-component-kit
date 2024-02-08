import { Meta } from '@storybook/react';
import { ISellableItemsCarouselProps, SellableItemsCarousel } from '.';
import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import { children, makeDummieAbonementOffer, makeDummieSubjectView } from '../../types/dummies';
import { AbonementOfferSellableItem } from '../AbonementOfferSellableItem';
import { AbonementType } from '../../types/domain';

const meta: Meta<ISellableItemsCarouselProps> = {
    title: 'Component/SellableItemsCarousel',
    component: SellableItemsCarousel,
};

export default meta;

const componentDefaultProps: ISellableItemsCarouselProps = {
    currentItemIndex: 1,
    items: [],
    onItemChange: (itemIndex: number) => console.log('itemIndex', itemIndex),
}

const dummieCarouselItems: ReactNode[] = [
    <Box sx={{width: '300px', height: '300px', backgroundColor: 'red'}} onClick={()=>console.log('slide 1 click')}> slide 1</Box>,
    <Box sx={{width: '300px', height: '300px', backgroundColor: 'blue'}}onClick={()=>console.log('slide 2 click')} > slide 2</Box>,
    <Box sx={{width: '300px', height: '300px', backgroundColor: 'green'}} onClick={()=>console.log('slide 3 click')} > slide 3</Box>,
    <Box sx={{width: '800px', height: '800px', backgroundColor: 'yellow'}}> slide 4</Box>,
    <Box width={'30%'} height={'50%'} sx={{backgroundColor: 'pink'}} onClick={()=>console.log('box 1 click')}> box 1</Box>,
];

export const SellableItemsCarouselStory = () => {
    const componentProps: ISellableItemsCarouselProps = {
        ...componentDefaultProps,
        items: dummieCarouselItems,
    }
    return (
        <Box height={'500px'} width={'500px'}>
            <SellableItemsCarousel {...componentProps}/>
        </Box>
    );
}

export const SellableItemsCarouselToggleStory = () => {
    const [currentId, setCurrentId] = React.useState<number>(1);
    const componentProps: ISellableItemsCarouselProps = {
        ...componentDefaultProps,
        currentItemIndex: currentId,
        items: dummieCarouselItems,
        onItemChange: (itemIndex: number) => setCurrentId(itemIndex),
    }
    return (
        <Box height={'500px'} width={'500px'}>
            <SellableItemsCarousel {...componentProps}/>
            <button onClick={()=>setCurrentId(1)}>1</button>
            <button onClick={()=>setCurrentId(2)}>2</button>
            <button onClick={()=>setCurrentId(3)}>3</button>
            <button onClick={()=>setCurrentId(4)}>4</button>
            <button onClick={()=>setCurrentId(5)}>5</button>
        </Box>
    );
}
export const SellableItemsCarouselWithAbonementOfferItemsStory = () => {
  const [currentId, setCurrentId] = React.useState<number>(1);
    
    const dummieAbonementOffers = children.map(makeDummieAbonementOffer);
    const dummieSubjectViews = children.map(makeDummieSubjectView);


    const dummieCarouselItems: ReactNode[] = dummieAbonementOffers.map(({id, limitLessons, limitTime, price, type} ) => {
        
        const isUnlimited = type === AbonementType.unlimited;
        
        return (
            <AbonementOfferSellableItem
                id={id}
                limitLessons={limitLessons}
                limitTime={limitTime}
                price={price}
                subjects={dummieSubjectViews}
                isUnlimited={isUnlimited}
                onClick={()=>console.log(id)}
            />
        );
    });

    const componentProps: ISellableItemsCarouselProps = {
        ...componentDefaultProps,
        currentItemIndex: currentId,
        items: dummieCarouselItems,
    }
    return (
        <Box height={'100%'} width={'100%'}>
            <SellableItemsCarousel {...componentProps}/>
            <button onClick={()=>setCurrentId(1)}>1</button>
            <button onClick={()=>setCurrentId(2)}>2</button>
            <button onClick={()=>setCurrentId(3)}>3</button>
            <button onClick={()=>setCurrentId(4)}>4</button>
            <button onClick={()=>setCurrentId(5)}>5</button>
            <button onClick={()=>console.log(currentId)}>currebtId</button>
        </Box>
    );
}
