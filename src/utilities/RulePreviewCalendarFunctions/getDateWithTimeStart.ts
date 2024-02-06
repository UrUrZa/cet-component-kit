
export const getDateWithTimeStart = (  date: Date, timeStart: Date,): Date => {
  const currentDate = new Date(date);
  const timeStartDate = new Date(timeStart);

  const hourStart = timeStartDate.getHours();
  const minutesStart = timeStartDate.getMinutes();

  currentDate.setHours(hourStart);
  currentDate.setMinutes(minutesStart);

  return currentDate;
};