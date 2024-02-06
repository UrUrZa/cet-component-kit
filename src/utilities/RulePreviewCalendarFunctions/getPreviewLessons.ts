import { ILesson, IRule, ISubject, LessonStatus, LessonsPreviewSource, PeriodicityType } from "../../types/domain";
import { ISubjectView } from "../../types/teacherDomainView";
import { getDateWithTimeStart } from "./getDateWithTimeStart";

export const setDay = (daytoset: number, date?: Date): Date => {
  const currentDate = date? new Date(date) : new Date();
  const currentDay = currentDate.getDay();
  const distance = daytoset - currentDay;
  currentDate.setDate(currentDate.getDate() + distance);
return currentDate;
};

//get Preview Lessons from ISubjectView[]
export const getPreviewLessonsFromSubjects = (subjects: ISubjectView[], lessonsPreviewSource?: LessonsPreviewSource, currentDate?: Date,):ILesson[] => {
  const previewLessons = subjects.map((subject) => {
  return  getPreviewLessonsFromASubject(subject, lessonsPreviewSource, currentDate)}).flat();
  return previewLessons;
};

//get Preview Lessons from ISubjectView
export const getPreviewLessonsFromASubject = (subject: ISubjectView, lessonsPreviewSource?: LessonsPreviewSource,  currentDate?: Date,):ILesson[] => {
  const { rules } = subject;
  const previewLessons =  rules.map((rule) => {
    return getPreviewLessonsFromASingleRule(subject, rule, lessonsPreviewSource, currentDate);
  }).flat();
  return previewLessons;
};

//function get IRule and return array of lessons
export const getPreviewLessonsFromASingleRule = (
  subjectView: ISubjectView, 
  editingRule: IRule,
  lessonsPreviewSource?: LessonsPreviewSource,
  currentDate?: Date, 
 
):ILesson[] => {
  const { periodicity, durationMin, timeStart } = editingRule;
  const { periodicityType, periodicityRule } = periodicity;

  const subject: ISubject = {
    ...subjectView,
    rules: [],
  };

  switch (periodicityType) {
    case PeriodicityType.manualDate: {
      const date = new Date(periodicityRule[0]);

      const dateWithTimeStart = getDateWithTimeStart(date, timeStart);

      const lesson: ILesson = createLesson(subject, dateWithTimeStart, durationMin, lessonsPreviewSource || LessonStatus.scheduled);
      return [lesson];
    };
    case PeriodicityType.weekly: {
      const lessons: ILesson [] = periodicityRule.map((day) => {
        const date = setDay(day, currentDate);
        const dateWithTimeStart = getDateWithTimeStart(date, timeStart);

        const lesson: ILesson = createLesson(subject, dateWithTimeStart, durationMin, lessonsPreviewSource || LessonStatus.scheduled);
        return lesson;
      },);
      return lessons;
    };
    default: {
      return [];
    }
  };
};

//lesson factory
export const createLesson = (subject: ISubject, date: Date, durationMin: number, status: LessonsPreviewSource | LessonStatus, ):ILesson => {
  
  return {
    id: '',
    durationMin,
    subject,
    date,
    accepted: [''],
    declained: [''],
    status,
    teacherId: subject.teacherId,
    participants: [],
  };
}

//if lessons intrsect

export const isIntersect = (lessons1: ILesson[], lessons2: ILesson[]): boolean => {
  const allLessons = [...lessons1, ...lessons2].sort((a, b) => a.date.getTime() - b.date.getTime());

  for (let i = 0; i < allLessons.length - 1; i++) {
    const currentLesson = allLessons[i];
    const nextLesson = allLessons[i + 1];
    const currentLessonEndDate = new Date(currentLesson.date);
    currentLessonEndDate.setMinutes(currentLessonEndDate.getMinutes() + currentLesson.durationMin);

    if (currentLessonEndDate > nextLesson.date) {
      return true;
    }
  }

  return false;
};
