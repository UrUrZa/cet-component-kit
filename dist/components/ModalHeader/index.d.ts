import React from 'react';
export interface IModalHeaderProps {
    title: string;
    onClick: () => void;
}
declare const ModalHeader: React.FC<IModalHeaderProps>;
export default ModalHeader;
