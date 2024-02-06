import React from 'react';
import { Meta } from '@storybook/react';
import { TextButton, ITextButtonProps } from '.';

export default {
    title: 'Component/TextButton',
} as Meta;

const componentDefaultProps: ITextButtonProps = {
    title: 'Some title',
    onClick: console.log,
}

export const TextButtonStory = () => {
    const componentProps: ITextButtonProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <TextButton {...componentProps}/>
        </>
    );
}
