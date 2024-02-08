import React, { ReactNode } from 'react';
import { CommonElementProps, IHaveChildren, ModalMode } from '../types';
export interface IModalProps extends CommonElementProps {
}
export interface IModalProps extends React.HTMLAttributes<HTMLDivElement>, IHaveChildren {
    comandChilden: ReactNode[];
    modalMode: ModalMode;
    onChangeModalMode: (modalMode: ModalMode) => void;
    resizable?: boolean;
}
export declare const Modal: React.FC<IModalProps>;
