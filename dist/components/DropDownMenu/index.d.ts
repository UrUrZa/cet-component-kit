import React from 'react';
import { IHaveId, id } from "../../types/domain";
import { CommonElementProps } from '../types';
export interface IDropDownMenuProps extends CommonElementProps {
    title: string;
    options: IOption[];
    currentOption: id;
    onChange: (id: string) => void;
}
export interface IOption extends IHaveId {
    title: string;
}
declare const DropDownMenu: React.FC<IDropDownMenuProps>;
export default DropDownMenu;
