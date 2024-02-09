import { Meta } from '@storybook/react';
import Modal, { IModalProps } from '.';
import IconNavButton, { ButtonType } from '../IconNavButton';
import { Box, Button } from '@mui/material';
import React from 'react';
import SwipeBox from '../SwipeBox';
import Select from '../Select';
import NumberField from '../NumberField';
import { textL } from '../dummies';
import { PeriodicityType } from '../../types/domain';
import { ModalMode } from '../types';

const meta: Meta<IModalProps> = {
  title: 'Component/Modal',
  component: Modal,
};

export default meta;

const componentDefaultProps: IModalProps = {
  modalMode: ModalMode.fillHeight,
  onChangeModalMode: (modalMode: ModalMode) => console.log(modalMode),
  comandChilden:[
    <IconNavButton onClick={()=>console.log("click")} type={ButtonType.cancel}/>,
    <IconNavButton onClick={()=>console.log("click")} type={ButtonType.confirm}/>
  ],    
}

export const ModalFillHeightStory = () => {
    const componentProps: IModalProps = {
        ...componentDefaultProps,
    }
    
    return (
      <Modal {...componentProps}>
        <IconNavButton onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>
        <IconNavButton onClick={()=>console.log("subjectList")} type={ButtonType.subjects}/>
      </Modal>
    );
}
export const ModalHalfHeightStory = () => {
    const componentProps: IModalProps = {
        ...componentDefaultProps,
    }
    
    return (
      <Modal {...componentProps} modalMode={ModalMode.halfHeight}>
        <IconNavButton onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>
        <IconNavButton onClick={()=>console.log("subjectList")} type={ButtonType.subjects}/>
      </Modal>
    );
}
export const ToggleModalModModaltStory = () => {
  const [modalMode, setModalMode] = React.useState(ModalMode.fillHeight);
  console.log(modalMode);
  const [value, setValue] = React.useState(42)


  const onClose = () => {
    setModalMode(ModalMode.closed);
  };

  const onOpen = () => {
    setModalMode(ModalMode.halfHeight);
  };

  const onChangeModalMode = (modalMode: ModalMode) => {
    setModalMode(modalMode);
  };
  const componentProps: IModalProps = {
      ...componentDefaultProps,
      comandChilden:[
        <IconNavButton onClick={onClose} type={ButtonType.cancel}/>,
        <IconNavButton onClick={onClose} type={ButtonType.confirm}/>
      ]
  }
    
  return (
    <>
      <Box
        height='600px'
        width='calc(100% - 2px)'
        border='1px solid black'
      >
        <SwipeBox
          onSwipeLeft={()=>onClose()}
          onSwipeRight={()=>onOpen()}
        >
          {textL}
          <Button 
            onClick={()=>onOpen()}
          >
            {'Open Modal'}
          </Button>
        </SwipeBox>
      </Box>
      <Modal 
        {...componentProps}
        modalMode={modalMode} 
        onChangeModalMode={onChangeModalMode}
        resizable
      >
        <Select
          onChange={(periodicityType) => console.log(periodicityType)}
          options={[
            {id: '1', title: PeriodicityType.manualDate },
            {id: '2', title: PeriodicityType.weekly},
          ]}
          selected={'1'}
        />
        <NumberField
          onChange={(value) => setValue(value)}
          placeHolder={'placeHolder'}
          value={value}
          endAdornment='min'
        />
        <IconNavButton onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>
        <IconNavButton onClick={()=>console.log("subjectList")} type={ButtonType.subjects}/>
      </Modal>
    </>
  );
}
