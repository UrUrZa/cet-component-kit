import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import styled from '@emotion/styled';
import { CommonElementProps } from '../types';
import { footerHeight } from '../Footer';

export interface IActionButtonProps extends CommonElementProps {
    onClick: () => void;
}

const IconButtomWithBorder = styled(IconButton)`
    border: 1px solid grey;
    background-color: white;
`;

const actionButtonAboveFooter = 20;

const ActionButtonContaner =styled(Box)`
    position: fixed;
    bottom: ${actionButtonAboveFooter + footerHeight}px;
    right: 50px;
    z-index: 1200;
`;

const ActionButton: React.FC<IActionButtonProps> = ({onClick, ...rest}) => {
    return (
        <ActionButtonContaner 
            {...rest}
        >
            <IconButtomWithBorder onClick={onClick}>
                <AddIcon
                    fontSize='large'
                />
            </IconButtomWithBorder>
        </ActionButtonContaner>
    );
}

export default ActionButton;
