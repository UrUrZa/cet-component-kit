import { Meta } from "@storybook/react";
import { IModalHeaderProps, ModalHeader } from ".";
import React from 'react';

export default {
  title: 'Component/ModalHeader',
} as Meta;

const componentDefaultProps: IModalHeaderProps = {
  title: 'test',
  onClick: () => console.log('click'),
   
}

export const ModalHeaderLeftStory = () => {
    const componentProps: IModalHeaderProps = {
        ...componentDefaultProps,
    }
    
    return (
      <ModalHeader {...componentProps}/> 
    );
}
