import { EventColors, ICalendarEvent } from ".";
import { ILesson, LessonsPreviewSource } from "../../../common/types/domain";

export const lessonToCalendarEventMap = (lessons: ILesson[], lessonsPreviewSource?: LessonsPreviewSource ): ICalendarEvent[] => {
  
  const lessonToView: ICalendarEvent[] = lessons.map((lesson) => {
    const color = EventColors[lessonsPreviewSource || lesson.status];
    const start = lesson.date;
    const startMinuts = start.getMinutes();
    const end = new Date(start);
    end.setMinutes(startMinuts + lesson.durationMin);
    
    return ({
      id: lesson.id,
      title: lesson.subject.name,
      start: start,
      end: end,
      color: color
    })
  });
  return lessonToView;
};