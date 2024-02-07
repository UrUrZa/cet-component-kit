import React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { Box } from '@mui/material';
import { CommonElementProps } from '../types';

export interface IDatePikerProps extends CommonElementProps {
  type: DataPikerType;
  currentDate?: Date;
  onChange: (date:Date) => void;
  placeHolder?: string;
}

export enum DataPikerType {
  DateTime = 'DateTime',
  Time = 'Time'
}

export const DatePiker: React.FC<IDatePikerProps> = ({type, onChange, currentDate, placeHolder, ...rest}) => {
  const isTimePiker = type === DataPikerType.Time;
  const currentDateValue = currentDate ? dayjs(currentDate) : undefined;
  return (
    <Box 
      {...rest as any}
      marginTop={2}
      marginBottom={2}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {isTimePiker ? (
            <MobileTimePicker 
              value={currentDateValue}
              onChange={(e: dayjs.Dayjs | null) => {
                if (e) {
                  onChange(e.toDate())
                }
              }}
              label={placeHolder}
            />
        ) : (
          <MobileDateTimePicker 
            value={currentDateValue}
            onChange={(e: dayjs.Dayjs | null) => {
              if (e) {
                onChange(e.toDate())
              }
            }}
            label={placeHolder}
          />
        )}
      </LocalizationProvider>
    </Box>
  );
};
