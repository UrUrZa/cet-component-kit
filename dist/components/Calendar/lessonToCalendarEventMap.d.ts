import { ICalendarEvent } from ".";
import { ILesson, LessonsPreviewSource } from "../../types/domain";
export declare const lessonToCalendarEventMap: (lessons: ILesson[], lessonsPreviewSource?: LessonsPreviewSource | undefined) => ICalendarEvent[];
