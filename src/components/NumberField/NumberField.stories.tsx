import React from 'react';
import { Meta } from '@storybook/react';
import { NumberField, INumberFieldProps } from '.';

export default {
    title: 'Component/NumberField',
} as Meta;

const componentDefaultProps: INumberFieldProps = {
    // value: 0,
    onChange: console.log,
    endAdornment: 'min',
    placeHolder: 'Enter a number',
}

export const NumberFieldStory = () => {
    const componentProps: INumberFieldProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <NumberField {...componentProps}/>
        </>
    );
}
