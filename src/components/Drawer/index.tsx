import React, { ReactNode } from "react";
import { SlideoutDirection } from "../types";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


export interface IDrawerProps {
  children: ReactNode;
  comandChilden: ReactNode; 
  slideoutDirection:SlideoutDirection;
  isOpen: boolean;
}

const Drawer: React.FC<IDrawerProps> = ({children, isOpen, slideoutDirection, comandChilden}) => {
  return (
    <>
      <SwipeableDrawer
        onClose={() => { }}
        onOpen={() => { }}
        open = {isOpen}
        anchor= {slideoutDirection}
        PaperProps={{
          sx: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }
        }}
      >
        {comandChilden}
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
