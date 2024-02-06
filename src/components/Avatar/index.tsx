import { Avatar as AvatarMUI, AvatarProps } from '@mui/material';
import React from 'react';
import { CommonElementProps } from '../../../common/component/types';

export interface IAvatarProps extends CommonElementProps, AvatarProps {
    image: string;
    size: number;
    onClick: () => void;
}

export const Avatar: React.FC<IAvatarProps> = ({image, size, ...rest}) => {
    return (
        <AvatarMUI sx={{ width: size, height: size }} src={image} {...rest} />
    );
}
