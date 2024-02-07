import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { id } from "../../types/domain";
import { CommonElementProps } from '../types';

export interface IChipsSelectProps extends CommonElementProps {
    options: ISelectOption[];
    selected: id[];
    onChange: (id: id) => void;
}

export interface ISelectOption {
    id: id;
    title: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const ChipsSelect: React.FC<IChipsSelectProps> = ({options, onChange, selected, ...rest}) => {

  const selectedOptions: ISelectOption[]  = options.filter((option)=>selected.includes(option.id));
  const unselectedOptions: ISelectOption[]  = options.filter((option)=>!(selected.includes(option.id)));
  const selectedTitles: string[] = selectedOptions.map((option)=>option.title);
  const [isOpen, setOpen] = useState(false);
  
  useEffect(() => {
    if (!unselectedOptions.length) {
      setOpen(false);
    }
  }, [unselectedOptions]);

  return (
    <Box
      {...rest}
    >
      <FormControl fullWidth>
        <InputLabel id="multiple-chip-label">Subjects</InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          multiple
          value={selectedTitles}
          input={<OutlinedInput id="select-multiple-chip" label="Subjects" />}
          renderValue={() => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selectedOptions && selectedOptions.map((option) => (
                <Chip 
                    key={option.id} 
                    label={option.title}
                    onMouseDown={(e) => {
                      e.stopPropagation()
                    }}
                    onDelete={() => {
                      onChange(option.id);
                    }} 
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          open={isOpen}
          onOpen={() => {
            if (unselectedOptions.length) {
              setOpen(true);
            }
          }}
          onClose={() => setOpen(false)}
        >
          {unselectedOptions.map((option) => (
            <MenuItem
              key={option.id}
              value={option.title}
              onClick={() => {
                onChange(option.id);
              }} 
            >
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
