import React from 'react';
import { ILesson, LessonStatus, LessonsPreviewSource, id } from "../../types/domain";
import { CommonElementProps } from '../types';
export interface ICalendarProps extends CommonElementProps {
    lessons: ILesson[];
    representationType: FullCalendarView;
    onLessonClick: (id: id) => void;
    warningOnOverlapingEvents?: boolean;
    startDate: Date;
    onChengeDateForward: () => void;
    onChengeDateBackward: () => void;
    onToday: () => void;
}
export interface ICalendarEvent {
    id: id;
    title: string;
    start: string | Date;
    end: string | Date;
    color: string;
}
export declare const EventColors: {
    scheduled: string;
    commingSoon: string;
    inProcess: string;
    finished: string;
    done: string;
    canceled: string;
    outerSchedule: string;
    thisSubjectSchedule: string;
    editingRuleSchedule: string;
};
export declare enum FullCalendarView {
    timeGridWeek = "timeGridWeek",
    listWeek = "listWeek"
}
declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
