import { Meta } from '@storybook/react';
import { NumberField, INumberFieldProps } from '.';
import React from 'react';

const meta: Meta<INumberFieldProps> = {
    title: 'Component/NumberField',
    component: NumberField,
};

export default meta;

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
