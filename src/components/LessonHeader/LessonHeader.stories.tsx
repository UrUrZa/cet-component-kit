import React from 'react';
import { Meta } from '@storybook/react';
import { LessonHeader, ILessonHeaderProps } from '.';
import { LessonStatus } from '../../../common/types/domain';

export default {
    title: 'Component/LessonHeader',
} as Meta;

const componentDefaultProps: ILessonHeaderProps = {
    title: 'Taratata Yoga',
    onCancel: ()=>console.log('click'),
    type: LessonStatus.scheduled,
    scheduled: new Date('2000'),    
}

export const LessonHeaderStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps}/>
        </>
    );
}
export const LessonHeaderСommingSoonStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.commingSoon} scheduled={new Date('2023 04 01 12:00')}/>
       </>
    );
}
export const LessonHeadercanceledStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.canceled}/>
       </>
    );
}
export const LessonHeaderDoneStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.done}/>
       </>
    );
}
export const LessonHeaderFinishedStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.finished}/>
        </>
    );
}

export const LessonHeaderInProcessStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.inProcess} scheduled={new Date('2023 03 31 12:00')}/>
        </>
    );
}

export const Before2HoursCommingSoonLessonHeaderStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    const hoursNow = new Date().getHours();
    const dateScheduled = new Date();
    dateScheduled.setHours(hoursNow + 2);
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.commingSoon} scheduled={dateScheduled}/>
        </>
    );
}
export const CommingSoonLessonHeaderStory = () => {
    const componentProps: ILessonHeaderProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <LessonHeader {...componentProps} type={LessonStatus.commingSoon} scheduled={new Date('2023 03 31 16:00')}/>
       </>
    );
}
