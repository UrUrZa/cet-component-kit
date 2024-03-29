import { 
  AbonementType, 
  IAbonementConsumable, 
  IAbonementOffer, 
  ILesson, 
  IRule, 
  ISubject, 
  ITeacher, 
  LessonStatus, 
  PeriodicityType
} from "./domain";
import { IAbonementConsumableView, IStudentView } from "./studentDomainView";
import { ISubjectView, ITeacherView } from "./teacherDomainView";

import { oneDay } from "../components/dummies";

export const children = [ 1, 2, 3, 4, 5 ];

export const makeDummieRule = (item: any, index: number): IRule => {
  const isOdd = index % 2 === 0;
  return {
    id: `RuleId${index}`,
    durationMin: 60,
    teacherId: `TeacherId${index}`,
    subjectId: `SubjectId${index}`,
    periodicity: {
      periodicityType: isOdd ? PeriodicityType.weekly : PeriodicityType.manualDate,
      periodicityRule: isOdd ? [1, 2, 3, 4] : [new Date('21 Nov 2030').valueOf()],
    },
    timeStart: new Date(),
  }
};

export const makeDummieSubjectView = (item: any, index: number): ISubjectView => {

  const dummieRules = children.map(makeDummieRule);
  const subjectRules = dummieRules.filter((rule) => rule.subjectId === `SubjectId${index}`);
  
  return {
    id: `SubjectId${index}`,
    name: `Math${index}`,
    rules: subjectRules,
    description: `Math description${index}`,
    teacherId: `TeacherId${index}`,
  }
};

export const makeDummieSubject = (item: any, index: number): ISubject => {
  return {
    ...makeDummieSubjectView(item, index),
    rules: ['1', '2', '3'],
  };
};

export const makeDummieAbonementConsumableView = (item: any, index: number): IAbonementConsumableView => {
  const isUnlimeited = index % 2 === 0;
  return {
    id: `AbonementId${index}`,
    studentId: `StudentId${index}`,
    price: 100,
    limitLessons: 10,
    type: isUnlimeited? AbonementType.unlimited : AbonementType.limited,
    lessonsAttended: [],
    dateStart: new Date(),
    subjects: children.map(makeDummieSubjectView),
    limitTime: index + 1,
  }
};

export const makeDummieStudent = (item: any, index: number): IStudentView => {
  return {
    id: `StudentId${index}`,
    name: `Sarah${index}`,
    avatar: '',
    abonementConsumables: children.map(makeDummieAbonementConsumableView),
  }
};

export const makeDummieLesson = (item: any, index: number): ILesson => {
  return {
    id: `LessonId${index}`,
    date: new Date(Date.now() + oneDay * index),
    teacherId: `TeacherId${index}`,
    subject: makeDummieSubject({}, 0),
    ruleId: `RuleId${index}`,
    status: LessonStatus.scheduled,
    participants: [],
    durationMin: 45,
    accepted: [],
    declained: [],
  };
};



export const makeDummieAbonementConsumable = (item: any, index: number): IAbonementConsumable => {
  const abonementOfferView = makeDummieAbonementConsumableView(item, index);
  return {
    ...abonementOfferView,
    subjects: abonementOfferView.subjects.map((subject) => subject.id),
  };
};

export const makeDummieAbonementOffer = (item: any, index: number): IAbonementOffer => {
  return {
    id: `AbonementOfferId${index}`,
    price: 100,
    limitLessons: 10,
    type: AbonementType.limited,
    subjects: children.map(makeDummieSubject).map((subject) => subject.id),
    limitTime: 0,
    teacherId: `TeacherId${index}`,
  };
};

export const makeDummieTeacherView = (item: any, index: number): ITeacherView => {
  return {
    id: `TeacherId${index}`,
    name: `Teacher${index}`,
    avatar: '',
    description: `Teacher description${index}`,
    subjects: children.map(makeDummieSubjectView),
    abonementOffers: children.map(makeDummieAbonementOffer),
  }
}

export const makeDummieTeacher = (item: any, index: number): ITeacher => {
  const teacherView = makeDummieTeacherView(item, index);
  return {
    ...teacherView,
    subjects: teacherView.subjects.map((subject) => subject.id),
    abonementOffers: teacherView.abonementOffers.map((abonementOffer) => abonementOffer.id),
  };
};

