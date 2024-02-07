import { Box, BoxProps } from '@mui/material';
import React, { useState, MouseEvent } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CommonElementProps } from '../types';

interface MousePosition {
  x: number;
  y: number;
}

export interface ISwipeBoxProps extends BoxProps, CommonElementProps {
    onSwipeRight: () => void;
    onSwipeLeft: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
}

export const SwipeBox: React.FC<ISwipeBoxProps> = ({ children, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, ...rest}) => {
    const [mouseDown, setMouseDown] = useState<MousePosition | null>(null);

    const handlers = useSwipeable({
      onSwiped: (eventData) => {
        switch(eventData.dir) {
          case 'Left':
            onSwipeLeft();
            break;
          case 'Right':
            onSwipeRight();
            break;
          case 'Up':
            onSwipeUp?.();
            break;
          case 'Down':
            onSwipeDown?.();
            break;
          default:
          // no default case
        }
      }
    });
  
const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setMouseDown({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (mouseDown) {
      const deltaX = e.clientX - mouseDown.x;
      const deltaY = e.clientY - mouseDown.y;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > absY) {
        if (deltaX > 0) {
            onSwipeRight();
        } else {
            onSwipeLeft();
        }
      } else {
        if (deltaY > 0) {
          onSwipeDown?.();
        } else {
          onSwipeUp?.();
        }
      }

      setMouseDown(null);
    }
  };

  return (
    <Box
      {...handlers}
      {...rest}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
        {children}
    </Box>
  );
}

