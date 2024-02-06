import React from 'react';
import { Meta } from '@storybook/react';
import { IDatePikerProps, DataPikerType, DatePiker } from '.';

export default {
  title: 'Component/DatePiker',
  component: DatePiker,
} as Meta;

const componentDefaultProps: IDatePikerProps = {
  type: DataPikerType.DateTime,
  currentDate: new Date(),
  onChange: (date: Date) => console.log('DatePiker:', date),
};

export const DateTimePikerStory = () => {
  const componentProps: IDatePikerProps = {
    ...componentDefaultProps,
    type: DataPikerType.DateTime,
  };
  return <DatePiker {...componentProps} />;
};

export const TimePikerStory = () => {
  const componentProps: IDatePikerProps = {
    ...componentDefaultProps,
    type: DataPikerType.Time,
  };
  return <DatePiker {...componentProps} />;
};

export const DateTimePikerWithPlaceholderStory = () => {
  const componentProps: IDatePikerProps = {
    ...componentDefaultProps,
    type: DataPikerType.DateTime,
    placeHolder: 'Select date and time',
  };
  return <DatePiker {...componentProps} />;
};

export const TimePikerWithPlaceholderStory = () => {
  const componentProps: IDatePikerProps = {
    ...componentDefaultProps,
    type: DataPikerType.Time,
    placeHolder: 'Select time',
  };
  return <DatePiker {...componentProps} />;
};