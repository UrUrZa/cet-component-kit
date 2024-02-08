import { IPeriodicity } from "../types/domain";
export declare const getWeekDayRepresentation: (weekDays: number) => string;
export declare const getPeriodicityMessage: (periodicity: IPeriodicity) => string;
export declare const getManualDateTimeRepresentation: (dateTime: number) => string;
export declare const getTimeRepresentation: (periodicity: IPeriodicity, startTime: Date) => string;
