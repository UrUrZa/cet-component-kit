import { useState } from 'react';
import { ClickOutsideHandler, IClickOutsideHandlerProps } from '.';
import { Meta } from '@storybook/react';
import  Header  from '../Header';
import { IconButton } from '../IconButton';
import { ButtonType } from '../IconNavButton';
import { TextField, TextFieldType } from '../TextField';
import { Box, Typography } from '@mui/material';
import React from 'react';

const meta: Meta<IClickOutsideHandlerProps> = {
  title: 'Component/ClickOutsideHandler',
  component: ClickOutsideHandler,
};

export default meta;

const componentDefaultProps: IClickOutsideHandlerProps = {
  onClickOutside: () => {console.log('onClickOutside')},

}

export const ClickOutsideHandlerStory = () => {


  const [name, setName] = useState('');
  const [isNameEditing, toggleNameEditing] = useState(true);

  const startEditingNameHandler: React.MouseEventHandler<HTMLSpanElement> = () => {
    console.log(isNameEditing)
    console.log('startEditingNameHandler')
    if (!isNameEditing) {
      toggleNameEditing(true);
      console.log(isNameEditing)
    }
  };

  const endEditingNameHandler = () => {
    console.log(isNameEditing)
    console.log('endEditingNameHandler')
    if (isNameEditing) {
      toggleNameEditing(false);
      console.log(isNameEditing)
    }
  };

  const componentProps: IClickOutsideHandlerProps = {
    ...componentDefaultProps,
    onClickOutside: endEditingNameHandler,
  }

  return (
    <>
      <ClickOutsideHandler {...componentProps}>
      <Header>
        <IconButton 
          type={ButtonType.cancel} 
          onClick={() => {
            console.log('cancelModifySubject')
            endEditingNameHandler()
          }}
        />
        {isNameEditing &&
            <Box width="100%" overflow="auto" height="100%">
              <TextField
                type={TextFieldType.header} 
                text={name}
                onChange={(text) =>  setName(text)}
              />
            </Box>
        }
        {!isNameEditing &&
          <Typography
            noWrap
            textOverflow='ellipsis'
            overflow='hidden'
            maxWidth='17rem'
            onClick={startEditingNameHandler}
          >
            {name ? name : 'add title your subject'}
          </Typography>
        }
        <IconButton 
          type={ButtonType.confirm} 
          onClick={() => {
            console.log('confirmSavingSubject')
            endEditingNameHandler()
          }}
        />
      </Header>
      </ClickOutsideHandler>
      <div style={{width: '600px', height: '600px', backgroundColor: 'green'}}></div>
    </>
  );
}


