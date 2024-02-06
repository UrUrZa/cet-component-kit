import { Button, Card, TextField, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { IOption } from '../DropDownMenu';
import { id } from '../../types/domain';
import { Select } from '../Select';

interface ISelectSearchProps {
  searchOptions?: IOption[];
  currentOption?: id;
  onOptionChange?: (id: id)=> void;
}

export interface ISearchFieldProps extends ISelectSearchProps, React.HTMLAttributes<HTMLInputElement> {
  text: string;
  onChangeSearch: (text:string) => void;
  onSearch: () => any;
  placeHolder?: string;
}

const StyledCard = styled(Card)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  display: flex;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  border-radius: 0px 4px 4px 0px;
  text-transform: none;
  padding: 0 18px;
`;

const SearchFieldSelect = styled(Select)`
  .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input {
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
    height: 100%;
    border-radius: 0;
  }
  .MuiFormControl-root {
    height: 100%;
  }
`;

export const SearchField: React.FC<ISearchFieldProps> = ({text, onChangeSearch, onSearch, placeHolder, searchOptions, currentOption, onOptionChange, ...rest}) => {

  const hasSelectOptions = searchOptions && searchOptions.length > 0;
   return (
    <StyledCard {...rest} elevation={3}>
      <TextField
        variant='standard'
        fullWidth
        type="search"
        placeholder={placeHolder}
        onChange={(e)=>onChangeSearch(e.target.value)}
        value={text}
        inputProps={{style:{padding:'9px'}}}
      />
      {hasSelectOptions &&
        <SearchFieldSelect
          selected={currentOption || ''}
          options={searchOptions || []}
          onChange={onOptionChange || (()=>{})}
        />
      }
      <StyledButton 
        onClick={onSearch}
        variant='contained'
      >
        <Typography >
          {'Search'}
        </Typography>
      </StyledButton>
    </StyledCard>
  );
}
