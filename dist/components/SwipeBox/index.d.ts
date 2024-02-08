import { BoxProps } from '@mui/material';
import React from 'react';
import { CommonElementProps } from '../types';
export interface ISwipeBoxProps extends BoxProps, CommonElementProps {
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
}
export declare const SwipeBox: React.FC<ISwipeBoxProps>;
