import { IAbonementConsumable, IAbonementOffer, ILesson, IRule, ISubject, ITeacher } from "./domain";
import { IAbonementConsumableView, IStudentView } from "./studentDomainView";
import { ISubjectView, ITeacherView } from "./teacherDomainView";
export declare const children: number[];
export declare const makeDummieRule: (item: any, index: number) => IRule;
export declare const makeDummieSubjectView: (item: any, index: number) => ISubjectView;
export declare const makeDummieSubject: (item: any, index: number) => ISubject;
export declare const makeDummieAbonementConsumableView: (item: any, index: number) => IAbonementConsumableView;
export declare const makeDummieStudent: (item: any, index: number) => IStudentView;
export declare const makeDummieLesson: (item: any, index: number) => ILesson;
export declare const makeDummieAbonementConsumable: (item: any, index: number) => IAbonementConsumable;
export declare const makeDummieAbonementOffer: (item: any, index: number) => IAbonementOffer;
export declare const makeDummieTeacherView: (item: any, index: number) => ITeacherView;
export declare const makeDummieTeacher: (item: any, index: number) => ITeacher;
