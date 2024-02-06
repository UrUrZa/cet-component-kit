import { IAbonementConsumable, IStudent } from "./domain";
import { ISubjectView } from "./teacherDomainView";

export type OmitAbonementConsumable = Omit<IAbonementConsumable, "subjects">;

export interface IAbonementConsumableView extends OmitAbonementConsumable { 
  subjects: ISubjectView[];
 };

type OmitStudent = Omit<IStudent, 'abonementConsumables'>;

export interface IStudentView extends OmitStudent {
  abonementConsumables: IAbonementConsumableView[];
}
