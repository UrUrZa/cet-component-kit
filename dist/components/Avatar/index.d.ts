import { AvatarProps } from '@mui/material';
import React from 'react';
import { CommonElementProps } from '../types';
export interface IAvatarProps extends CommonElementProps, AvatarProps {
    image: string;
    size: number;
    onClick: () => void;
}
declare const Avatar: React.FC<IAvatarProps>;
export default Avatar;
