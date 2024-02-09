import React from 'react';
import { CommonElementProps } from '../types';
export interface IClickOutsideHandlerProps extends CommonElementProps {
    onClickOutside?: () => void;
}
declare const ClickOutsideHandler: React.FC<IClickOutsideHandlerProps>;
export default ClickOutsideHandler;
