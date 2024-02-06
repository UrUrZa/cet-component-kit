import { 
  ILesson, 
  IRule, 
  LessonsPreviewSource, 
  PeriodicityType 
} from "../../types/domain";
import { ISubjectView } from "../../types/teacherDomainView";
import { mochDate2023_7_14_15_30_0 } from "../../component/dummies";
import { 
  getPreviewLessonsFromSubjects, 
  getPreviewLessonsFromASubject, 
  getPreviewLessonsFromASingleRule, 
  isIntersect
} from './getPreviewLessons';

describe('Lesson Preview functions tests', () => {
  const exampleRule1: IRule = {
    id: "101",
    durationMin: 60,
    periodicity: {
      periodicityType: PeriodicityType.weekly,
      periodicityRule: [1, 3],
    },
    timeStart: new Date(),
    teacherId: '1',
    subjectId: '1',
  };

  const exampleSubject1: ISubjectView = {
    id: "1",
    name: "subject1",
    rules: [exampleRule1],
    description: "description1",
    teacherId: '1',
  };

  const exampleRule2: IRule = {
    id: "102",
    durationMin: 60,
    periodicity: {
      periodicityType: PeriodicityType.manualDate,
      periodicityRule: [Date.now() + 86400000],
    },
    timeStart: new Date(),
    teacherId: '1',
    subjectId: '2',
  };

  const exampleSubject2: ISubjectView = {
    id: "2",
    name: "subject2",
    rules: [exampleRule2],
    description: "description2",
    teacherId: '1',
  };

  test('getPreviewLessonsFromSubjects function test', () => {
    const subjects = [exampleSubject1, exampleSubject2];
    const result: ILesson[] = getPreviewLessonsFromSubjects(subjects, LessonsPreviewSource.outerSchedule);
    
    expect(result.length).toBe(3);
    expect(result.every(lesson => lesson.status === LessonsPreviewSource.outerSchedule)).toBeTruthy();
  });

  test('getPreviewLessonsFromASubject function test', () => {
    const result: ILesson[] = getPreviewLessonsFromASubject(exampleSubject1, LessonsPreviewSource.thisSubjectSchedule);

    expect(result.length).toBe(2);
    expect(result.every(lesson => lesson.status === LessonsPreviewSource.thisSubjectSchedule)).toBeTruthy();
  });

  test('getPreviewLessonsFromASingleRule function test', () => {
    const result: ILesson[] = getPreviewLessonsFromASingleRule(exampleSubject2, exampleRule2, LessonsPreviewSource.editingRuleSchedule);

    expect(result.length).toBe(1);
    expect(result[0].status).toBe(LessonsPreviewSource.editingRuleSchedule);
  });

  test('isIntersect function with intersecting lessons', () => {
    const lessons1: ILesson[] = getPreviewLessonsFromASubject(exampleSubject1, LessonsPreviewSource.thisSubjectSchedule);
    const lessons2: ILesson[] = getPreviewLessonsFromASingleRule(exampleSubject2, exampleRule1, LessonsPreviewSource.editingRuleSchedule);

    expect(isIntersect(lessons1, lessons2)).toBeTruthy();
  });

  test('isIntersect function with non-intersecting lessons', () => {
    const nonIntersectingRule: IRule = {
      id: "103",
      durationMin: 60,
      periodicity: {
        periodicityType: PeriodicityType.manualDate,
        periodicityRule: [mochDate2023_7_14_15_30_0.getTime() + 86400000 * 2],
      },
      timeStart: mochDate2023_7_14_15_30_0,
      teacherId: '1',
      subjectId: '3',
    };

    const nonIntersectingSubject: ISubjectView = {
      id: "3",
      name: "subject3",
      rules: [nonIntersectingRule],
      description: "description3",
      teacherId: '1',
      };
    const lessons1: ILesson[] = getPreviewLessonsFromASubject(exampleSubject1, LessonsPreviewSource.thisSubjectSchedule);
    const lessons2: ILesson[] = getPreviewLessonsFromASingleRule(nonIntersectingSubject, nonIntersectingRule, LessonsPreviewSource.editingRuleSchedule);

    expect(isIntersect(lessons1, lessons2)).toBeFalsy();
  });
});

describe('Lesson Preview functions tests - advanced cases', () => {
  const exampleRuleWeekly: IRule = {
    id: "101",
    durationMin: 60,
    periodicity: {
      periodicityType: PeriodicityType.weekly,
      periodicityRule: [1, 3],
    },
    timeStart: mochDate2023_7_14_15_30_0,
    teacherId: '',
    subjectId: '',
  };

  const exampleRuleManual: IRule = {
    id: "102",
    durationMin: 60,
    periodicity: {
      periodicityType: PeriodicityType.manualDate,
      periodicityRule: [mochDate2023_7_14_15_30_0.getTime()],
    },
    timeStart: mochDate2023_7_14_15_30_0,
    teacherId: '',
    subjectId: '',
  };

  const exampleSubject1: ISubjectView = {
    id: "1",
    name: "subject1",
    rules: [exampleRuleWeekly, exampleRuleManual],
    description: "description1",
    teacherId: '',
  };

  const exampleSubject2: ISubjectView = {
    id: "2",
    name: "subject2",
    rules: [exampleRuleWeekly],
    description: "description2",
    teacherId: '',
  };

  test('getPreviewLessonsFromSubjects multiple subjects test', () => {
    const subjects: ISubjectView[] = [exampleSubject1, exampleSubject2];
    const result: ILesson[] = getPreviewLessonsFromSubjects(subjects, LessonsPreviewSource.outerSchedule);

    const subject1Lessons = result.filter(lesson => lesson.subject.id === exampleSubject1.id);
    const subject2Lessons = result.filter(lesson => lesson.subject.id === exampleSubject2.id);

    expect(result.length).toBe(5);
    expect(subject1Lessons.length).toBe(3);
    expect(subject2Lessons.length).toBe(2);
    expect(result.every(lesson => lesson.status === LessonsPreviewSource.outerSchedule)).toBeTruthy();
  });

  test('getPreviewLessonsFromASubject with multiple rules test', () => {
    const result: ILesson[] = getPreviewLessonsFromASubject(exampleSubject1, LessonsPreviewSource.thisSubjectSchedule);
    expect(result.length).toBe(3);
    expect(result.every(lesson => lesson.status === LessonsPreviewSource.thisSubjectSchedule)).toBeTruthy();
  });

  test('getPreviewLessonsFromSubjects with empty subjects array', () => {
    const subjects: ISubjectView[] = [];
    const result: ILesson[] = getPreviewLessonsFromSubjects(subjects, LessonsPreviewSource.outerSchedule);
    expect(result.length).toBe(0);
  });
  
  test('getPreviewLessonsFromASubject with empty rules array', () => {
    const emptyRulesSubject: ISubjectView = {
      ...exampleSubject1,
      rules: [],
    };
    const result: ILesson[] = getPreviewLessonsFromASubject(emptyRulesSubject, LessonsPreviewSource.thisSubjectSchedule);
    expect(result.length).toBe(0);
  });

  test('getPreviewLessonsFromASingleRule with different durations', () => {
    const longDurationRule: IRule = {
      ...exampleRuleWeekly,
      durationMin: 120,
    };
    const shortDurationRule: IRule = {
      ...exampleRuleWeekly,
      durationMin: 30,
    };
  
    const longDurationSubject: ISubjectView = {
      ...exampleSubject1,
      rules: [longDurationRule],
    };
    const shortDurationSubject: ISubjectView = {
      ...exampleSubject1,
      rules: [shortDurationRule],
    };
  
    const longDurationResult: ILesson[] = getPreviewLessonsFromASingleRule(longDurationSubject, longDurationRule);
    const shortDurationResult: ILesson[] = getPreviewLessonsFromASingleRule(shortDurationSubject, shortDurationRule);
  
    expect(longDurationResult[0].durationMin).toBe(120);
    expect(shortDurationResult[0].durationMin).toBe(30);
  });

  test('getPreviewLessonsFromASingleRule with incomplete IRule and ISubjectView', () => {
    const incompleteRule: IRule = {
      id: "106",
      durationMin: 60,
      periodicity: {
        periodicityType: PeriodicityType.weekly,
        periodicityRule: [1, 3],
      },
      timeStart: mochDate2023_7_14_15_30_0,
      teacherId: '',
      subjectId: '',
    };
  
    const incompleteSubject: ISubjectView = {
      id: "2",
      name: "",
      rules: [incompleteRule],
      description: "",
      teacherId: '',
    };
  
    const result: ILesson[] = getPreviewLessonsFromASingleRule(incompleteSubject, incompleteRule);
    
    expect(result.length).toBe(2);
    expect(result[0].date.getDay()).toBe(1);
    expect(result[1].date.getDay()).toBe(3);
    expect(result[0].date.getHours()).toBe(15);
    expect(result[1].date.getHours()).toBe(15);
    expect(result[0].subject.name).toBe("");
  });  
});
