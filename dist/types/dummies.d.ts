import { IAbonementConsumable, IAbonementOffer, ILesson, IRule, ISubject, ITeacher } from "./domain";
import { IAbonementConsumableView, IStudentView } from "./studentDomainView";
import { ISubjectView, ITeacherView } from "./teacherDomainView";
export declare const children: number[];
export declare const makeDummieRule: (index: number) => IRule;
export declare const makeDummieSubjectView: (index: number) => ISubjectView;
export declare const makeDummieSubject: (index: number) => ISubject;
export declare const makeDummieAbonementConsumableView: (index: number) => IAbonementConsumableView;
export declare const makeDummieStudent: (index: number) => IStudentView;
export declare const makeDummieLesson: (index: number) => ILesson;
export declare const makeDummieAbonementConsumable: (index: number) => IAbonementConsumable;
export declare const makeDummieAbonementOffer: (index: number) => IAbonementOffer;
export declare const makeDummieTeacherView: (index: number) => ITeacherView;
export declare const makeDummieTeacher: (index: number) => ITeacher;
