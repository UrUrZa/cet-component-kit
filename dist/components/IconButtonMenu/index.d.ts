import React from 'react';
import { CommonElementProps } from '../types';
export interface IIconButtonMenuProps extends CommonElementProps {
    options: IMenuOption[];
    isFilter?: boolean;
}
export interface IMenuOption {
    title: string;
    command: () => any;
}
declare const IconButtonMenu: React.FC<IIconButtonMenuProps>;
export default IconButtonMenu;
