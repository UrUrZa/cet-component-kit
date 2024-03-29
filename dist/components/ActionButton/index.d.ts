import React from 'react';
import { CommonElementProps } from '../types';
export interface IActionButtonProps extends CommonElementProps {
    onClick: () => void;
}
export declare const ActionButton: React.FC<IActionButtonProps>;
