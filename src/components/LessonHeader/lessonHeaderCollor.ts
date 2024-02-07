import { LessonStatus } from "../../types/domain";

export const getCollor = (status: LessonStatus) => {
  if (status === LessonStatus.canceled) {
    return 'error'
  } else if (status === LessonStatus.commingSoon) {
    return 'warning'
  } else if (status === LessonStatus.scheduled) {
    return 'info'
  } else return 'success'    
};
