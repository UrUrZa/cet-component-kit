import React from 'react';
import { CommonElementProps } from '../types';
export interface INumberFieldProps extends CommonElementProps {
    value?: number;
    onChange: (value: number) => void;
    endAdornment?: string;
    placeHolder?: string;
}
declare const NumberField: React.FC<INumberFieldProps>;
export default NumberField;
