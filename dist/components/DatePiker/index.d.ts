import React from 'react';
import { CommonElementProps } from '../types';
export interface IDatePikerProps extends CommonElementProps {
    type: DataPikerType;
    currentDate?: Date;
    onChange: (date: Date) => void;
    placeHolder?: string;
}
export declare enum DataPikerType {
    DateTime = "DateTime",
    Time = "Time"
}
export declare const DatePiker: React.FC<IDatePikerProps>;
