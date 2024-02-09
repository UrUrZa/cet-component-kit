import React from 'react';
import { CommonElementProps } from '../types';
export interface IWarningMasageProps extends CommonElementProps {
    mesage: string;
}
declare const WarningMasage: React.FC<IWarningMasageProps>;
export default WarningMasage;
