import { IAbonementConsumable, IStudent } from "./domain";
import { ISubjectView } from "./teacherDomainView";
export declare type OmitAbonementConsumable = Omit<IAbonementConsumable, "subjects">;
export interface IAbonementConsumableView extends OmitAbonementConsumable {
    subjects: ISubjectView[];
}
declare type OmitStudent = Omit<IStudent, 'abonementConsumables'>;
export interface IStudentView extends OmitStudent {
    abonementConsumables: IAbonementConsumableView[];
}
export {};
