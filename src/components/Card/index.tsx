import { Box, Card as MuiCard } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { CommonElementProps } from '../../../common/component/types';

export interface ICardProps extends CommonElementProps {
  children: (React.ReactNode | undefined)[];
  onClick: ()=>void;
}

export const StyledCard = styled(MuiCard)`
  padding: 0 16px 0 16px;
  height: 85px;
  align-items: center;
  margin-bottom: 10px ;
  display: flex;
  flex-direction: column;
`;

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card: React.FC<ICardProps> = ({children, onClick, ...rest}) => {
  const [topLeft, topRight, bottomLeft, bottomRight] = children;
  const hasFirstRow = topLeft || topRight;
  const hasSecondRow = bottomLeft || bottomRight;
  const isSingleRow = !(hasFirstRow && hasSecondRow);
  const isSingleTopRight = (!topLeft) && topRight;
  const isSingleBottomRight = (!bottomLeft) && bottomRight;
  return (
    <StyledCard 
      {...rest}
      sx={{
        justifyContent: isSingleRow?'center':'space-between'
      }} 
      onClick={onClick}
    >
      {hasFirstRow&&
        <StyledBox flexDirection={isSingleTopRight?'row-reverse':{}}>
          {topLeft&&<Box>{topLeft}</Box>}
          {topRight&&<Box>{topRight}</Box>}
        </StyledBox>}
      {hasSecondRow&&
        <StyledBox flexDirection={isSingleBottomRight?'row-reverse':{}}>
          {bottomLeft&&<Box>{bottomLeft}</Box>}
          {bottomRight&&<Box>{bottomRight}</Box>}
        </StyledBox>}
    </StyledCard>
  );
}
