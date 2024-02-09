import React from 'react';
import { ISelectOption } from '../ChipsSelect';
import { id } from "../../types/domain";
import {
  Box,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  BoxProps,
} from '@mui/material';
import { CommonElementProps } from '../types';


export type ISelectOptionsFromBox = Pick<BoxProps, 'marginTop' | 'marginBottom'>;
export interface ISelectProps extends CommonElementProps, ISelectOptionsFromBox {
  selected: id;
  options: ISelectOption[ ];
  onChange: (id:id) => void;
}

const Select: React.FC<ISelectProps> = ({options, onChange, selected, ...rest}) => {
  return (
    <Box
      {...rest}
    >
      <FormControl
        sx={{ minWidth: 120 }}
      >
        <MuiSelect
          value={selected}
          onChange={(event: SelectChangeEvent) => {
            onChange(event.target.value as string);
          }}
        >
          {options &&options.map((option) => {
            return (
              <MenuItem 
                key={option.id} 
                value={option.id}
              >
                {option.title}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}

export default Select;
