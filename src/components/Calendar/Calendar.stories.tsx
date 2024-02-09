import React from 'react';
import { Meta } from '@storybook/react';
import Calendar, { FullCalendarView, ICalendarProps } from '.';
import {  
    addDays, 
    subDays
  } from 'date-fns';
import { dummieExternalLessons } from '../dummies';

const meta: Meta<ICalendarProps> = {
    title: 'Component/Calendar',
    component: Calendar,
};

export default meta;

const componentDefaultProps: ICalendarProps = {
    lessons: [],
    representationType: FullCalendarView.listWeek,
    onLessonClick: console.log,
    startDate: new Date("2021-10-01T00:00:00.000Z"),
    onChengeDateForward:() => console.log('onChengeDateForward'),
    onChengeDateBackward: () => console.log('onChengeDateBackward'),
    onToday: () => console.log('onToday')
}

export const CalendarStory = () => {
    const componentProps: ICalendarProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Calendar {...componentProps} lessons={dummieExternalLessons}/>
        </>
    );
}
export const CalendarWeekStory = () => {
    const componentProps: ICalendarProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Calendar 
                {...componentProps} 
                representationType={FullCalendarView.timeGridWeek} 
                lessons={dummieExternalLessons}
            />
        </>
    );
}
export const CalendarErrorStory = () => {
    const componentProps: ICalendarProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <Calendar 
                {...componentProps}
                representationType={FullCalendarView.listWeek} 
                lessons={dummieExternalLessons}
                warningOnOverlapingEvents
            />
        </>
    );
}

export const CalendarInitialViewStory = () => {
    const componentProps: ICalendarProps = {
        ...componentDefaultProps,
    }
    const [initialView, setInitialView] = React.useState(FullCalendarView.listWeek);
    return (
        <>
            <Calendar 
                {...componentProps}
                representationType={initialView} 
                lessons={dummieExternalLessons}
            />
            <button onClick={() => setInitialView(FullCalendarView.listWeek)}>Schedule</button>
            <button onClick={() => setInitialView(FullCalendarView.timeGridWeek)}>Calendar</button>
        </>
    );
}

export const CalendarCurrentDateStory = () => {
    const componentProps: ICalendarProps = {
        ...componentDefaultProps,
    }
    const [initialView, setInitialView] = React.useState(FullCalendarView.listWeek);
    const [currentDate, setCurrentDate] = React.useState(new Date("2021-10-01T00:00:00.000Z"));

    const onChengeDateForward = () => {
        const prevCurrentDate = new Date(currentDate);

        const newDate = addDays(prevCurrentDate, 7);

        setCurrentDate(newDate);
        console.log('onChengeDateForward', newDate);
    };

    const onChengeDateBackward = () => {
        const prevCurrentDate = new Date(currentDate);

        const newDate = subDays(prevCurrentDate, 7);

        setCurrentDate(newDate);
        console.log('onChengeDateBackward', newDate);
    };

    const onToday = () => {
        setCurrentDate(new Date());
        console.log('onToday', new Date());
    };

    return (
        <>
            <Calendar 
                {...componentProps}
                representationType={initialView} 
                lessons={dummieExternalLessons}
                startDate={currentDate}
                onChengeDateForward={onChengeDateForward}
                onChengeDateBackward={onChengeDateBackward}
                onToday={onToday}
            />
            <button onClick={() => setInitialView(FullCalendarView.listWeek)}>Schedule</button>
            <button onClick={() => setInitialView(FullCalendarView.timeGridWeek)}>Calendar</button>
            <button onClick={() => onChengeDateForward()}>onChengeDateForward</button>
            <button onClick={() => onChengeDateBackward()}>onChengeDateBackward</button>
        </>
    );
}
