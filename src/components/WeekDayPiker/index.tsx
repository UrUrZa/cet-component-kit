import { Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { CommonElementProps } from '../types';

export interface IWeekDayPikerProps extends CommonElementProps {
  checked: number[];
  onChange: (day: number) => void;
}

const WeekDayPiker: React.FC<IWeekDayPikerProps> = ({checked, onChange, ...rest}) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <ButtonGroup 
      variant="outlined"
      fullWidth
      {...rest}
    >
      {daysOfWeek.map((day, index) => {
        const isChecked: boolean = checked.includes(index)
        return (
          <Button
            key={day}
            onClick={() => onChange(index)}
            variant= {isChecked ? 'contained' : 'outlined'}
          >
            {day}
          </Button>
        )})
      }
    </ButtonGroup>
  );
}

export default WeekDayPiker;
