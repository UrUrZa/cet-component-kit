import { Meta } from '@storybook/react';
import IconButtonMenu, { IIconButtonMenuProps } from '.';
import { Box } from '@mui/material';
import React from 'react';

const meta: Meta<IIconButtonMenuProps> = {
    title: 'Component/IconButtonMenu',
    component: IconButtonMenu,
};

export default meta;

const componentDefaultProps: IIconButtonMenuProps = {
    options: [
        {
            title: 'edit',
            command: ()=>console.log('edit')
        },
        {
            title: 'delete',
            command: ()=>console.log('delete')
        },
    ]
}

export const IconButtonMenuStory = () => {
    const componentProps: IIconButtonMenuProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
            <IconButtonMenu {...componentProps}/>
        </>

    );
}
export const IconButtonMenuStopPropagationStory = () => {
    const componentProps: IIconButtonMenuProps = {
        ...componentDefaultProps,
    }
    return (
        <Box width={'300px'} height={'500px'} onClick={()=>console.log('click Box')} border={'3px solid grey'}>
            <IconButtonMenu {...componentProps}/>
        </Box>

    );
}
