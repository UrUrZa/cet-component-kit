import React from 'react';
export interface ITextButtonProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    onClick: () => void;
}
export declare const TextButton: React.FC<ITextButtonProps>;
