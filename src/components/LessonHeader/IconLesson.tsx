import React from 'react';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UpdateIcon from '@mui/icons-material/Update';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { LessonStatus } from '../../types/domain';

export const IconLesson: React.FC <{status: LessonStatus}> = ({status}) => {
  switch(status){
    case (LessonStatus.scheduled):
      return (<EventAvailableIcon fontSize='large'/>);
    case (LessonStatus.canceled):
      return (<CloseIcon fontSize='large'/>);
    case (LessonStatus.commingSoon):
      return (<UpdateIcon fontSize='large'/>);
    case (LessonStatus.done):
      return (<DoneIcon fontSize='large'/>);
    case (LessonStatus.finished):
      return (<SportsScoreIcon fontSize='large'/>);
    case (LessonStatus.inProcess):
      return (<PlayCircleOutlineIcon color='success' fontSize='large'/>); 
  }
};