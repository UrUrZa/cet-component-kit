import React from 'react';
import { ISelectOption } from '../ChipsSelect';
import { id } from "../../types/domain";
import { BoxProps } from '@mui/material';
import { CommonElementProps } from '../types';
export declare type ISelectOptionsFromBox = Pick<BoxProps, 'marginTop' | 'marginBottom'>;
export interface ISelectProps extends CommonElementProps, ISelectOptionsFromBox {
    selected: id;
    options: ISelectOption[];
    onChange: (id: id) => void;
}
declare const Select: React.FC<ISelectProps>;
export default Select;
