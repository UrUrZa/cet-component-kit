import { Meta } from '@storybook/react';
import WarningMasage, { IWarningMasageProps } from '.';
import React from 'react';

const meta: Meta<IWarningMasageProps> = {
    title: 'Component/WarningMasage',
    component: WarningMasage,
};

export default meta;

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
