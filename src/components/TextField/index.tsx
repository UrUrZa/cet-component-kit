import { Box, TextField as MuiTextField, styled  } from '@mui/material';
import React from 'react';
import { CommonElementProps } from '../types';

export interface ITextFieldProps extends CommonElementProps {
  text: string
  type: TextFieldType;
  placeHolder?: string
  onChange: (text: string) => void;
}

export enum TextFieldType {
  textArea = 'textArea',
  header = 'header',
  modalControl = 'modalControl',
}

const textAreaStyle: React.CSSProperties  = {padding:'0', height:'100%', overflow:'auto'};
const modalControlStyle: React.CSSProperties  = {padding:'0.5rem'};
const headerInputStyle: React.CSSProperties  = {padding:'0'};
const TextAreaTextField = styled(MuiTextField)`

  & .MuiInputBase-root {
    padding: 0.5rem;
    height: 100%;
  }
`;


const TextField: React.FC<ITextFieldProps> = ({...rest}) => {
  return (
    <Box 
      height='100%'
    >
      <TextFieldInner
        {...rest}
      />
    </Box>

  )
}

export const TextFieldInner: React.FC<ITextFieldProps> = ({text, type, placeHolder, onChange, ...rest}) => {

  switch(type){
    case (TextFieldType.textArea): {
      return (
        <TextAreaTextField
          {...rest as any}
          fullWidth 
          multiline
          variant="outlined"
          placeholder={placeHolder}
          value={text}
          onChange={(e)=>onChange(e.target.value)}
          inputProps={{style:textAreaStyle, row: 1}}
          sx={{height:'100%'}}
          rows={6}
        /> 
      )
    }
    case (TextFieldType.modalControl) : {
      return (
        <MuiTextField
         {...rest as any}
          fullWidth 
          variant="outlined"
          placeholder={placeHolder}
          value={text}
          onChange={(e)=>onChange(e.target.value)}
          inputProps={{style:modalControlStyle}}
        /> 
      )
    }
    case (TextFieldType.header) : {
      return (
        <Box
          margin='0 0.5rem'
        >
          <MuiTextField
            {...rest as any}
            fullWidth
            variant="standard"
            placeholder={placeHolder}
            value={text}
            onChange={(e)=>onChange(e.target.value)}
            inputProps={{style:headerInputStyle}}
          /> 
        </Box>
      )
    }
  }
}

export default TextField;