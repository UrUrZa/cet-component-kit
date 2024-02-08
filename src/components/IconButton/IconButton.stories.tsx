import { Meta } from '@storybook/react';
import {IconButton, IIconButtonProps} from '.';
import { ButtonType } from '../IconNavButton';
import React from 'react';

const meta: Meta<IIconButtonProps> = {
    title: 'Component/IconButton',
    component: IconButton,
};

export default meta;

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
