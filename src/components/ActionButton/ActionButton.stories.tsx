import React from 'react';
import { Meta } from '@storybook/react';
import { ActionButton, IActionButtonProps } from '.';

export default {
    title: 'Component/ActionButton',
} as Meta;

const componentDefaultProps: IActionButtonProps = {
    onClick: () => console.log("Add Item")
}

export const ActionButtonStory = () => {
    const componentProps: IActionButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <ActionButton {...componentProps}/>
        </>
    );
}
