import { 
  format, 
  differenceInHours,
  formatDistance
} from 'date-fns';

export const formatDateDistance = (date: Date) => {
  const thisMoment = new Date();
  const distanceInHours = differenceInHours(thisMoment, date);
  const closeTime = Math.abs(distanceInHours) < 24;;
  
  if (closeTime) {
    return `${formatDistance(date, thisMoment, { addSuffix: true })} at ${format(date, 'HH:mm')}`;
  } else {
    return `${formatDistance(date, thisMoment, { addSuffix: true })}`;
  }
};
