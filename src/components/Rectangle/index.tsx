import React from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DrillDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IHaveChildren } from '../types';
import { id } from '../../types/domain';

export interface IRectangleProps extends IHaveChildren {
  cardId: string;
  title: string;
  color: string;
  onClear?: (id: id) => void;
  onDrillDownClick?: (id: id) => void;
}

const Rectangle: React.FC<IRectangleProps> = ({
  cardId,
  title,
  color,
  onClear,
  onDrillDownClick,
  children
}) => {


  const style = {
    backgroundColor: color,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <Paper elevation={3} style={style}>
      <Typography padding={1} >{title}</Typography>
      <Box display={'flex'} alignItems={'center'}>
        {children}
        {onDrillDownClick && (
          <IconButton onClick={() => onDrillDownClick(cardId)} size="small" edge="end">
            <DrillDownIcon />
          </IconButton>
        )}
        {onClear && (
          <IconButton onClick={() => onClear(cardId)} size="small">
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
};

export default Rectangle;
