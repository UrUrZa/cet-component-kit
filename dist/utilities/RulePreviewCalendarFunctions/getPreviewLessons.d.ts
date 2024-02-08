import { ILesson, IRule, ISubject, LessonStatus, LessonsPreviewSource } from "../../types/domain";
import { ISubjectView } from "../../types/teacherDomainView";
export declare const setDay: (daytoset: number, date?: Date | undefined) => Date;
export declare const getPreviewLessonsFromSubjects: (subjects: ISubjectView[], lessonsPreviewSource?: LessonsPreviewSource | undefined, currentDate?: Date | undefined) => ILesson[];
export declare const getPreviewLessonsFromASubject: (subject: ISubjectView, lessonsPreviewSource?: LessonsPreviewSource | undefined, currentDate?: Date | undefined) => ILesson[];
export declare const getPreviewLessonsFromASingleRule: (subjectView: ISubjectView, editingRule: IRule, lessonsPreviewSource?: LessonsPreviewSource | undefined, currentDate?: Date | undefined) => ILesson[];
export declare const createLesson: (subject: ISubject, date: Date, durationMin: number, status: LessonsPreviewSource | LessonStatus) => ILesson;
export declare const isIntersect: (lessons1: ILesson[], lessons2: ILesson[]) => boolean;
