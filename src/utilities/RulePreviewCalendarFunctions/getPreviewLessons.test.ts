import { mochDate2023_7_14_15_30_0 } from "../../components/dummies";
import { 
  ILesson, 
  IRule, 
  LessonsPreviewSource, 
  PeriodicityType 
} from "../../types/domain";
import { ISubjectView } from "../../types/teacherDomainView";
import { getPreviewLessonsFromASingleRule} from './getPreviewLessons';


describe('Lesson Preview functions tests', () => {

  test('getPreviewLessonsFromASingleRule function weekly test', () => {
    const exampleRule: IRule = {
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
    const exampleSubject: ISubjectView = {
      id: "1",
      name: "subject",
      rules: [exampleRule],
      description: "description",
      teacherId: '',
    };
    const result : ILesson[] = getPreviewLessonsFromASingleRule(exampleSubject, exampleRule, LessonsPreviewSource.editingRuleSchedule);
    expect(result.length).toBe(2);
    expect(result[0].date.getDay()).toBe(1);
    expect(result[1].date.getDay()).toBe(3);
    expect(result[0].date.getHours()).toBe(15);
    expect(result[1].date.getHours()).toBe(15);
    expect(result[0].subject.name).toBe(exampleSubject.name);
    expect(result[0].status).toBe(LessonsPreviewSource.editingRuleSchedule);
  });
  test('getPreviewLessonsFromASingleRule function manual date test', () => {
    const date = mochDate2023_7_14_15_30_0;
    const exampleRule: IRule = {
      id: "101",
      durationMin: 60,
      periodicity: {
        periodicityType: PeriodicityType.manualDate,
        periodicityRule: [date.getTime()],
      },
      timeStart: mochDate2023_7_14_15_30_0,
      teacherId: '',
      subjectId: '',
    };
    const exampleSubject: ISubjectView = {
      id: "1",
      name: "subject",
      rules: [exampleRule],
      description: "description",
      teacherId: '',
    };
    const result : ILesson[] = getPreviewLessonsFromASingleRule(exampleSubject, exampleRule);
    expect(result.length).toBe(1);
    expect(result[0].date.getDay()).toBe(date.getDay());
    expect(result[0].date.getHours()).toBe(15);
    expect(result[0].subject.name).toBe(exampleSubject.name);
  });
});
