import React from 'react';
import { ButtonType } from '../IconNavButton';
import { CommonElementProps } from '../types';
export interface IIconButtonProps extends CommonElementProps {
    type: ButtonType;
    image?: string;
    onClick: () => void;
    disabled?: boolean;
}
export declare const IconButton: React.FC<IIconButtonProps>;
