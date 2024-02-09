import React from 'react';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Box, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { CommonElementProps } from '../types';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export interface IIconNavButtonProps extends CommonElementProps {
    type: ButtonType
    isActive?: boolean;
    image?: string;
    onClick: () => void;
    title?: string;
}

export enum ButtonType {
    schedule = 'schedule',
    avatar = 'avatar',
    subjects = 'subjects',
    abonements = 'abonements',
    accepted = 'accepted',
    pending = 'pending',
    declained = 'declained',
    cancel = 'cancel',
    confirm = 'confirm',
    more = 'more',
    notifications = 'notifications',
    search = 'search',
    info = 'info',
    arrowBack = 'arrowBack',
}

const SizedAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
`
export interface IAppAvatarProps extends CommonElementProps {
  image?: string;
}

export const AppAvatar: React.FC <IAppAvatarProps> = ({image, ...rest}) =>{
  return(
    <Box padding="1px" width="24px" height="24px" borderRadius="50%" {...rest}>
      <SizedAvatar
        src={image}
      />
    </Box>);
};

export const IconVariant =
{
  [ButtonType.schedule]: CalendarMonthIcon,
  [ButtonType.avatar]:AppAvatar,
  [ButtonType.subjects]:AutoStoriesOutlinedIcon,
  [ButtonType.abonements]:AddCardIcon,
  [ButtonType.accepted]:HowToRegIcon,
  [ButtonType.pending]:PendingActionsIcon,
  [ButtonType.declained]:PersonRemoveIcon,
  [ButtonType.cancel]:ClearIcon,
  [ButtonType.confirm]:CheckTwoToneIcon,
  [ButtonType.more]:MoreHorizIcon,
  [ButtonType.notifications]:NotificationsIcon,
  [ButtonType.search]:SearchIcon,
  [ButtonType.info]:InfoOutlinedIcon,
  [ButtonType.arrowBack]:ArrowBackIosNewIcon,
}

const activeStyle = {borderBottom:"3px solid #9c27b0"};
export const activeAvatarStyle = {border:"2px solid #9c27b0",};

const IconNavButton: React.FC<IIconNavButtonProps> = ({isActive, onClick, type, title, image, ...rest}) => {
  const Component = IconVariant[type];
    return (
        <IconButton
          {...rest as any} 
          onClick={onClick}
        >

          {(type !== ButtonType.avatar)?
            <Box display="block" sx={ isActive? activeStyle : {} } >
              <Component color={isActive?'secondary':'disabled'}/>
                { !!title && <Typography fontSize={"0.7rem"} variant='body2' marginTop="-6px" color={isActive?'secondary':'disabled'}>
                  {title}
                </Typography> }
            </Box>:
            <Component color={isActive?'secondary':'disabled'} sx={ isActive? activeAvatarStyle : {}} image={image}/>
          }
        </IconButton>
    );
}

export default IconNavButton;
