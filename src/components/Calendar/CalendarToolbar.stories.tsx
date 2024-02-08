import { Meta } from '@storybook/react';
import { CalendarToolbar, ICalendarToolbarProps } from './CalendarToolbar';
import React from 'react';

const meta: Meta<ICalendarToolbarProps> = {
    title: 'Component/CalendarToolbar',
    component: CalendarToolbar,
};

export default meta;

const componentDefaultProps: ICalendarToolbarProps = {
    startDate: new Date("2021-10-01T00:00:00.000Z"),
    onChengeDateForward:() => console.log('onChengeDateForward'),
    onChengeDateBackward: () => console.log('onChengeDateBackward'),
    onToday: () => console.log('onToday'),
}

export const CalendarToolbarStory = () => {
    const componentProps: ICalendarToolbarProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <CalendarToolbar {...componentProps}/>
        </>
    );
}