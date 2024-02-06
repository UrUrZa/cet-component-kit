import { Meta } from '@storybook/react';
import { CalendarToolbar, ICalendarToolbarProps } from './CalendarToolbar';

export default {
    title: 'Component/Actions',
} as Meta;

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