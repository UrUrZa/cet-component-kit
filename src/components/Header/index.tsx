import styled from '@emotion/styled';
import { Card } from '@mui/material';
import React from 'react';
import { CommonElementProps, IHaveChildren } from '../types';
;

export interface IHeaderProps extends CommonElementProps, IHaveChildren {}

export const headerHeight = 60;

export const HeaderCard = styled(Card)`
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

const Header: React.FC<IHeaderProps> = ({ children, ...rest }) => {
  return <HeaderCard {...rest}>{children}</HeaderCard>;
};

export default Header;
