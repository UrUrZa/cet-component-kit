import React from 'react';
export interface ICalendarToolbarProps {
    startDate: Date;
    onChengeDateForward?: () => void;
    onChengeDateBackward?: () => void;
    onToday?: () => void;
}
export declare const CalendarToolbar: React.FC<ICalendarToolbarProps>;
