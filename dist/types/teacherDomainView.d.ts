import { IAbonementOffer, IRule, ISubject, ITeacher } from "./domain";
declare type OmitTeacher = Omit<ITeacher, 'subjects' | 'abonementOffers'>;
declare type OmitSubject = Omit<ISubject, 'rules'>;
export interface ISubjectView extends OmitSubject {
    rules: IRule[];
}
export interface ITeacherView extends OmitTeacher {
    subjects: ISubjectView[];
    abonementOffers: IAbonementOffer[];
}
export {};
