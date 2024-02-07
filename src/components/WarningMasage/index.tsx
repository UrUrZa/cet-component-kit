import { Alert, Typography } from '@mui/material';
import React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { CommonElementProps } from '../types';

export interface IWarningMasageProps extends CommonElementProps {
    mesage: string;
}

export const WarningMasage: React.FC<IWarningMasageProps> = ({mesage, ...rest}) => {
    return (
        <Alert
        sx={{alignItems:'center', margin: '0.25rem 0'}}
        color= 'warning'
        icon={<ReportProblemIcon fontSize='large'/>}
        
      >
        <Typography variant='h6'>
          {mesage}
        </Typography>
      </Alert> 
    );
}
