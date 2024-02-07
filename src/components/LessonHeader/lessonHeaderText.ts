import { format, formatDistanceStrict } from 'date-fns';
import { formatDateDistance } from "./lessonDateDistanse";
import { LessonStatus } from '../../types/domain';


export const getText = (status: LessonStatus, date: Date) => {
  switch(status){
    case (LessonStatus.scheduled):
      return (
        `Scheduled ${format(date, 'dd.MM.yyyy HH:mm')}`
      );
    case (LessonStatus.canceled):
      return (`Canceled`);
    case (LessonStatus.commingSoon):
      return (`Comming Soon ${formatDateDistance(date)}`)
    case (LessonStatus.done):
      return (`Done`);
    case (LessonStatus.finished):
      return (`Finished`);
    case (LessonStatus.inProcess):
      return (
        `Started ${formatDistanceStrict(date, new Date(),{addSuffix: true})}`
      ); 
  }
};
