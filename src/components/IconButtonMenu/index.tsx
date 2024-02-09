import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CommonElementProps } from '../types';
import FilterListIcon from '@mui/icons-material/FilterList';

export interface IIconButtonMenuProps extends CommonElementProps {
    options: IMenuOption[ ];
    isFilter?: boolean;
}

export interface IMenuOption {
    title: string;
    command: ()=>any;
}

const IconButtonMenu: React.FC<IIconButtonMenuProps> = ({options, isFilter, ...rest}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box {...rest}>
      <IconButton
        id="menu-IconButton"
        aria-controls={open ? 'IconButton-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {isFilter ? <FilterListIcon/> : <MoreHorizIcon/>}
      </IconButton>
      <Menu
        id="IconButton-menu"
        MenuListProps={{
          'aria-labelledby': 'menu-IconButton',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{padding: '0px',}}
      >
          {!!options && options.map((option) => {
              return (
                  <MenuItem 
                    key={option.title}
                    onClick={(event) => {
                      option.command();
                      event.stopPropagation();
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

export default IconButtonMenu;
