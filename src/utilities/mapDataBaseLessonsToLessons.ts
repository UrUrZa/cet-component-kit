import { IDataBaseLesson } from "../api/handelers";
import { ILesson } from "../types/domain";

export const mapDataBaseLessonsToLessons = (dataBaseLessons: IDataBaseLesson[]): ILesson[] => {
  const result = dataBaseLessons.map((item) => {
    return {
      ...item,
      date: item.date.toDate(),
    }
  });

  return result;
};
