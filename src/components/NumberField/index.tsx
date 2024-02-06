import React from 'react';
import { InputAdornment, TextField as MuiTextField  } from '@mui/material';
import { CommonElementProps } from '../../../common/component/types';


export interface INumberFieldProps extends CommonElementProps {
    value?: number;
    onChange: (value:number) => void;
    endAdornment?: string;
    placeHolder?: string;
}

export const NumberField: React.FC<INumberFieldProps> = ({ onChange, value, endAdornment, placeHolder, ...rest}) => {
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < 0 || !value) {
      onChange(0);
    } else {
      onChange(value);
    }
  };

  return (
    <MuiTextField
      {...rest as any}
      fullWidth
      type='number'
      placeholder={placeHolder}
      value={value === 0 ? "" : value}
      onChange={onChangeHandler}
      InputProps={{
        endAdornment: endAdornment && (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
}
