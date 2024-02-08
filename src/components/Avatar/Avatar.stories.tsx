import { Meta } from '@storybook/react';
import { Avatar, IAvatarProps } from '.';
import React from 'react';

const meta: Meta<IAvatarProps> = {
    title: 'Component/Avatar',
    component: Avatar,
};

export default meta;

const componentDefaultProps: IAvatarProps = {
    image:'',
    size: 30,
    onClick: console.log,
}

export const AvatarStory = () => {
    const componentProps: IAvatarProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Avatar {...componentProps}/>
        </>
    );
}
