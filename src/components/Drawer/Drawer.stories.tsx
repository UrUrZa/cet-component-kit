import { useState } from 'react';
import { Meta } from '@storybook/react';
import Drawer, { IDrawerProps } from '.';
import { SlideoutDirection } from '../types';
import { Box, Button } from '@mui/material';
import React from 'react';

const meta: Meta<IDrawerProps> = {
  title: 'Component/Drawer',
  component: Drawer,
};

export default meta;

const componentDefaultProps: IDrawerProps = {
  isOpen: true,
  slideoutDirection: SlideoutDirection.right,
  comandChilden: <></>,
  children: <></>,
}

export const DrawerStoryRight = () => {
  const componentProps: IDrawerProps = {
    ...componentDefaultProps,
  }
  return (
    <>
      <Drawer {...componentProps}>
        <Box height='100%' width='500px' bgcolor='#f61111'/>
      </Drawer>
    </>
  );
}

export const DrawerStoryLeft = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  const componentProps: IDrawerProps = {
    ...componentDefaultProps,
    slideoutDirection: SlideoutDirection.left,
    isOpen: isOpen,
  }
  return (
    <>
      <Drawer {...componentProps}>
        <Box height='100%' width='500px' bgcolor='#f61111'>  
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
        </Box>
      </Drawer>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
    </>
  );  
}

export const DrawerStoryBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentProps: IDrawerProps = {
    ...componentDefaultProps,
    slideoutDirection: SlideoutDirection.bottom,
    isOpen: isOpen,
  }
  return (
    <>
      <Drawer {...componentProps}>
        <Box height='100%' width='500px' bgcolor='#f61111'>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>  
        </Box>
      </Drawer>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
    </>
  );
}

export const DrawerStoryTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentProps: IDrawerProps = {
    ...componentDefaultProps,
    slideoutDirection: SlideoutDirection.top,
    isOpen: isOpen,
    comandChilden: 
      <Box>
        <Button onClick={() => setIsOpen(!isOpen)}>ComandToggle</Button>
      </Box>
  }
  return (
    <>
      <Drawer {...componentProps}>
        <Box height='100%' width='100%' bgcolor='#f61111'>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>  
        </Box>
      </Drawer>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
    </>
  );
}
export const DrawerStoryLeftWithoutWidth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const componentProps: IDrawerProps = {
    ...componentDefaultProps,
    slideoutDirection: SlideoutDirection.left,
    isOpen: isOpen,
    comandChilden: 
      <Box>
        <Button onClick={() => setIsOpen(!isOpen)}>ComandToggle</Button>
      </Box>
  }
  return (
    <>
      <Drawer {...componentProps}>
        <Box bgcolor='#f61111'>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>  
        </Box>
      </Drawer>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
    </>
  );
}
