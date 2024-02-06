import styled from '@emotion/styled';
import { Card } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { CommonElementProps } from '../../../common/component/types';

export interface IFooterProps extends CommonElementProps, PropsWithChildren {}

export const footerHeight = 76;

export const FooterCard = styled(Card)`
  height: ${footerHeight}px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  display: flex;
`;

export const Footer: React.FC<IFooterProps> = ({children, ...rest}) => {
  return (
    <FooterCard {...rest} elevation={3}>
      {children}
    </FooterCard>
  );
}
