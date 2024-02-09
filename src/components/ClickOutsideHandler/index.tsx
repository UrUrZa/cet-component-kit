import React from 'react';
import { Box } from '@mui/material';
import { CommonElementProps } from '../types';
import { useClickOutside } from './ClickOutsideHook';

export interface IClickOutsideHandlerProps extends CommonElementProps {
  onClickOutside?: () => void;
}

const ClickOutsideHandler: React.FC<IClickOutsideHandlerProps> = ({ children, onClickOutside}) => {
  const { ref, handleInternalClick } = useClickOutside(onClickOutside);

  return (
    <Box ref={ref} onClick={handleInternalClick}>
      {children}
    </Box>
  );
};

export default ClickOutsideHandler;
