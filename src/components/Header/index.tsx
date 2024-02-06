import styled from '@emotion/styled';
import { Card } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { CommonElementProps } from '../../../common/component/types';

export interface IHeaderProps extends CommonElementProps, PropsWithChildren {
}

export const headerHeight = 60;

export const HederCard = styled(Card)`
  height: ${headerHeight}px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  display: flex;
`;


export const Header: React.FC<IHeaderProps> = ({children, ...rest}) => {
    return (
        <HederCard {...rest}>
            {children}
        </HederCard>
    );
}
