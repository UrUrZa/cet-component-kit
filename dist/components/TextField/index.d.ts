import React from 'react';
import { CommonElementProps } from '../types';
export interface ITextFieldProps extends CommonElementProps {
    text: string;
    type: TextFieldType;
    placeHolder?: string;
    onChange: (text: string) => void;
}
export declare enum TextFieldType {
    textArea = "textArea",
    header = "header",
    modalControl = "modalControl"
}
declare const TextField: React.FC<ITextFieldProps>;
export declare const TextFieldInner: React.FC<ITextFieldProps>;
export default TextField;
