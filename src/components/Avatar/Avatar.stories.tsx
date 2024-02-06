import React from 'react';
import { Meta } from '@storybook/react';
import { Avatar, IAvatarProps } from '.';

export default {
    title: 'Component/Avatar',
} as Meta;

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
