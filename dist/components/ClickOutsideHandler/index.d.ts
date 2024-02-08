import React from 'react';
import { CommonElementProps } from '../types';
export interface IClickOutsideHandlerProps extends CommonElementProps {
    onClickOutside?: () => void;
}
export declare const ClickOutsideHandler: React.FC<IClickOutsideHandlerProps>;
