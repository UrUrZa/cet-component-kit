import React from 'react';
import { Meta } from '@storybook/react';
import { WarningMasage, IWarningMasageProps } from '.';

export default {
    title: 'Component/WarningMasage',
} as Meta;

const componentDefaultProps: IWarningMasageProps = {
    mesage:'Friday 15:30 conflicting event'
}

export const WarningMasageStory = () => {
    const componentProps: IWarningMasageProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <WarningMasage {...componentProps}/>
            <WarningMasage {...componentProps} mesage=''/>
        </>
    );
}
