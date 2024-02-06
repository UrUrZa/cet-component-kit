import { format } from 'date-fns';
import { Grid, IconButton, Typography } from '@mui/material';

import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';


export interface ICalendarToolbarProps {
  startDate: Date;
  onChengeDateForward?: () => void;
  onChengeDateBackward?: () => void;
  onToday?: () => void;
}

export const CalendarToolbar: React.FC<ICalendarToolbarProps> = ({ startDate, onChengeDateForward, onChengeDateBackward, onToday}) => {

  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item>
          <IconButton color="primary" onClick={onChengeDateBackward}>
            <ArrowBackTwoToneIcon />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              mx: 1
            }}
            onClick={onToday}
          >
            <TodayTwoToneIcon />
          </IconButton>
          <IconButton color="primary" onClick={onChengeDateForward}>
            <ArrowForwardTwoToneIcon />
          </IconButton>
      </Grid>
      <Grid
        item
      >
        <Typography variant="h6" color="text.primary">
          {format(startDate, 'dd MMMM yyyy')}
        </Typography>
      </Grid>
    </Grid>
  );
};
