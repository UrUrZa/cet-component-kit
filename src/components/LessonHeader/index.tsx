import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card/Card';
import Typography from '@mui/material/Typography';
import React from 'react';
import { IconLesson } from './IconLesson';
import { IMenuOption, IconButtonMenu } from '../IconButtonMenu';
import { getText } from './lessonHeaderText';
import { getCollor } from './lessonHeaderCollor';
import { CommonElementProps } from '../types';
import { headerHeight } from '../Header';
import styled from '@emotion/styled';
import { LessonStatus } from '../../types/domain';


export interface ILessonHeaderProps extends CommonElementProps {
  type:LessonStatus;
  title: string; 
  scheduled: Date; 
  onCancel: ()=>any; 
}

export const TitleStyledTypography = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 17rem;
`
const LessonHeaderCard = styled(Card)`
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${headerHeight};
`

export const LessonHeader: React.FC<ILessonHeaderProps> = ({title, type, scheduled, onCancel, ...rest}) => {
  const colorAlert = getCollor(type);
  const canCancel: boolean = ((type === LessonStatus.scheduled) || (type === LessonStatus.commingSoon));
  const text = getText(type, scheduled);
  const cancelMenuOptions: IMenuOption[] = [{title: 'Cancel', command: onCancel }];
  return (
    <LessonHeaderCard  {...rest} 
      elevation={3}
    >
      <Alert
        sx={{alignItems:'center'}}
        color= {colorAlert}
        icon={<IconLesson status={type}/>}
        action={canCancel && <IconButtonMenu options={cancelMenuOptions}/>}
      >
        <TitleStyledTypography 
          variant='body1'
          fontWeight={'bold'} 
        >
          {title}
        </TitleStyledTypography>
        <TitleStyledTypography variant='body2'>
          {text}
        </TitleStyledTypography>
      </Alert>   
    </LessonHeaderCard>
  );
}
