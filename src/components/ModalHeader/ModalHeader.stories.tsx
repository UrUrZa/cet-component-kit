import { Meta } from "@storybook/react";
import { IModalHeaderProps, ModalHeader } from ".";
import React from "react";

const meta: Meta<IModalHeaderProps> = {
  title: "Component/ModalHeader",
  component: ModalHeader,
};

export default meta;

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
