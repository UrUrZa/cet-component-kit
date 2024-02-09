import React from 'react';
import { CommonElementProps } from '../types';
export interface IWeekDayPikerProps extends CommonElementProps {
    checked: number[];
    onChange: (day: number) => void;
}
declare const WeekDayPiker: React.FC<IWeekDayPikerProps>;
export default WeekDayPiker;
