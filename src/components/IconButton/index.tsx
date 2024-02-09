import { IconButton as MUIIconButton } from '@mui/material';
import React from 'react';
import { ButtonType, IconVariant } from '../IconNavButton';
import { CommonElementProps } from '../types';

export interface IIconButtonProps extends CommonElementProps {
    type: ButtonType
    image?: string;
    onClick: () => void;
    disabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({onClick, type, disabled, ...rest}) => {
    const Component = IconVariant[type];

    const ref = React.useRef<HTMLButtonElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        if (ref.current && ref.current.contains(event.target as HTMLElement)) {
            onClick();
        }
    };
    

    return (
        <MUIIconButton ref = {ref} onClick={handleClick} disabled={disabled} {...rest}>
            <Component/>
        </MUIIconButton>
    );
}

export default IconButton;
