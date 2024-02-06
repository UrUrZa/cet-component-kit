
export type id = string;

export interface IHaveId {
  id: id;
};

export interface IHaveNotificationsToken {
  notificationsToken: string;
}

export interface IBelongToATeacher {
  teacherId: id;
}

export interface IBelongToStudent {
  studentId: id;
}

export interface IBelongToASubject {
  subjectId: id;
}

export interface IUser extends IHaveId {
  name: string;
  avatar: string;
}

export interface ITeacher extends IUser {
  description: string;
  subjects: id[];
  abonementOffers: id[];
}

export interface IStudent extends IUser {
  abonementConsumables: id[];
}

export interface IAbonement extends IHaveId {
  subjects: id[];
  type: AbonementType;
  limitTime: number;
  limitLessons: number;
  price: number;
}

export interface INotification {
  title: string;
  body: string;
  lessonId: id;
} 

export interface IAbonementOffer extends IAbonement, IBelongToATeacher {}

export interface IAbonementConsumable extends IAbonement, IBelongToStudent {
  dateStart: Date;
  lessonsAttended: id[];
}

export interface ISubject extends IHaveId, IBelongToATeacher {
  name: string;
  description: string;
  rules: id[];
}

export interface IPeriodicity {
  periodicityType: PeriodicityType;
  periodicityRule: number[];
}

export interface IRule extends IHaveId, IBelongToATeacher, IBelongToASubject {
  timeStart: Date;
  durationMin: number;
  periodicity: IPeriodicity;
}

export interface ILesson extends IHaveId, IBelongToATeacher {
  durationMin: number;
  subject: ISubject;
  date: Date;
  accepted: id[],
  declained: id[],
  status: LessonStatus | LessonsPreviewSource;
  ruleId?: id;
  participants: IUser[];
}

export enum AbonementType {
  limited = 'limited',
  unlimited = 'unlimited',
}

export enum PeriodicityType {
  weekly = 'weekly',
  manualDate = 'manualDate',    
}

export enum LessonStatus {
  scheduled = 'scheduled',
  commingSoon = 'commingSoon',
  inProcess = 'inProcess',
  finished = 'finished',
  done = 'done',
  canceled = 'canceled',
}

export enum LessonsPreviewSource {
  outerSchedule = 'outerSchedule',
  thisSubjectSchedule = 'thisSubjectSchedule',
  editingRuleSchedule = 'editingRuleSchedule',
}


