import React from 'react';
import { id } from "../../types/domain";
import { CommonElementProps } from '../types';
export interface IChipsSelectProps extends CommonElementProps {
    options: ISelectOption[];
    selected: id[];
    onChange: (id: id) => void;
}
export interface ISelectOption {
    id: id;
    title: string;
}
export declare const ChipsSelect: React.FC<IChipsSelectProps>;
