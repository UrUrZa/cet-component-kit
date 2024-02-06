import React from 'react';
import { Meta } from '@storybook/react';
import {IconButton, IIconButtonProps} from '.';
import { ButtonType } from '../IconNavButton';

export default {
    title: 'Component/IconButton',
} as Meta;

const componentDefaultProps: IIconButtonProps = {
 type:ButtonType.confirm,
 onClick: ()=>console.log("Click"),
}

export const IconButtonStory = () => {
    const componentProps: IIconButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <IconButton {...componentProps}/>
            <IconButton {...componentProps} type={ButtonType.cancel}/>
            <IconButton {...componentProps} type={ButtonType.notifications}/>
            <IconButton {...componentProps} disabled/>
            <IconButton {...componentProps} type={ButtonType.cancel} disabled/>
            <IconButton {...componentProps} type={ButtonType.notifications} disabled/>
        </>
    );
}
