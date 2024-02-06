import { IPeriodicity, PeriodicityType } from "../types/domain";

//a raw function that returns the string representation of the day of the week
export const getWeekDayRepresentation = (weekDays: number): string => {
  switch (weekDays) {
    case 0:
      return 'Monday';
    case 1:
      return 'Tuesday';
    case 2:
      return 'Wednesday';
    case 3:
      return 'Thursday';
    case 4:
      return 'Friday';
    case 5:
      return 'Saturday';
    case 6:
      return 'Sunday';
    default:
      return 'Unknown day';
  }
};

//a function returns periodicity message like "Every Monday, Wednesday, Friday"
export const getPeriodicityMessage = (periodicity: IPeriodicity): string => {
  const { periodicityType, periodicityRule } = periodicity;
  if (!periodicityRule.length) {
    return 'No periodicity';
  } 
  else {  
    switch (periodicityType) {
      case PeriodicityType.weekly:
        if (periodicityRule.length === 7) {
          return 'Every day';
        } else {
          return `On ${periodicityRule.map(getWeekDayRepresentation).join(', ')}`;
        }
      case PeriodicityType.manualDate:
        const date = new Date(periodicityRule[0]);
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        const dateRepresentation = dateFormatter.format(date);
        return dateRepresentation;
      default:
        return 'Unknown periodicity';
    }
  }
}

//a function returns the string representation of the time
export const getManualDateTimeRepresentation = (dateTime: number): string => {
  const dateRepresentation = new Date(dateTime);
  const hours = dateRepresentation.getHours();
  const minutes = dateRepresentation.getMinutes();
  const hoursRepresentation = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesRepresentation = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hoursRepresentation}:${minutesRepresentation}`;
};

export const  getTimeRepresentation = (periodicity: IPeriodicity, startTime: Date): string => {
  const isSingleEvent = periodicity.periodicityType === PeriodicityType.manualDate;

  if (isSingleEvent) {
    return getManualDateTimeRepresentation(periodicity.periodicityRule[0]);
  } else {
    const startTimeDate = new Date(startTime);
    const minutes = startTimeDate.getMinutes();
    const hours = startTimeDate.getHours();

    return `${hours}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  }
};

