import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IHaveId, id } from "../../types/domain";
import { Box, Typography } from '@mui/material';
import { CommonElementProps } from '../types';

export interface IDropDownMenuProps extends CommonElementProps {
  title: string;
  options: IOption[];
  currentOption: id;
  onChange: (id:string)=> void;
}

export interface IOption extends IHaveId {
  title: string;
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({title, options, currentOption, onChange,  ...rest}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box {...rest}>
      <Button
        id="menu-button"
        aria-controls={open ? 'drop-down-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon color='disabled'/>}
      >
        <Typography color='#000' variant='body2' textTransform='none'>
          {title}
        </Typography>
      </Button>
      <Menu
        id="drop-down-menu"
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{padding: '0px',}}
      >
          {!!options && options.map((option)=>{
              const isSelected: boolean = currentOption === option.id
              return(
                  <MenuItem 
                    key={option.id}
                    selected={isSelected} 
                    onClick={ () => {
                      onChange(option.id);
                      handleClose();
                    }} 
                    dense
                  >
                  {option.title}
                </MenuItem>
              );
          })}
      </Menu>
    </Box>
  );
}

export default DropDownMenu;
