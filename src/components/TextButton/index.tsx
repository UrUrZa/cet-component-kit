import { Button } from '@mui/material';
import React from 'react';

export interface ITextButtonProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    onClick: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({title, children, onClick, ...rest}) => {
    return (
        <Button variant='text' {...rest as any} onClick={onClick}>
            {title}
            {children}
        </Button>
    );
}

export default TextButton;
