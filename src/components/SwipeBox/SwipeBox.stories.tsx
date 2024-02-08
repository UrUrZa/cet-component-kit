import { Meta } from '@storybook/react';
import { SwipeBox, ISwipeBoxProps } from '.';
import { Box } from '@mui/system';

const meta: Meta<ISwipeBoxProps> = {
    title: 'Component/SwipeBox',
    component: SwipeBox,
};

export default meta;

const componentDefaultProps: ISwipeBoxProps = {
    onSwipeRight: () => console.log('onSwipeRight'),
    onSwipeLeft: () => console.log('onSwipeLeft'),
}

export const SwipeBoxStory = () => {
    const componentProps: ISwipeBoxProps = {
        ...componentDefaultProps,
    }
    return (
        <Box width='calc(100% - 2px)' height='500px' border='1px solid black' boxSizing={'border-box'}>
            <SwipeBox {...componentProps}>
                <Box sx={{width: '300px', height: '400px', bgcolor: 'red'}} />    
            </SwipeBox>
        </Box>
    );
}

export const SwipeBoxWithUpDownStory = () => {
    const componentProps: ISwipeBoxProps = {
        ...componentDefaultProps,
    }
    return (
        <Box width='calc(100% - 2px)' height='500px' border='1px solid black' boxSizing={'border-box'}>
            <SwipeBox
                {...componentProps}
                onSwipeDown={() => console.log('onSwipeDown')}
                onSwipeUp={() => console.log('onSwipeUp')}
            >
                <Box sx={{width: '300px', height: '400px', bgcolor: 'red'}} />    
            </SwipeBox>
        </Box>
    );
}
