import React from 'react';
import { IHaveChildren } from '../types';
import { id } from '../../types/domain';
export interface IRectangleProps extends IHaveChildren {
    cardId: string;
    title: string;
    color: string;
    onClear?: (id: id) => void;
    onDrillDownClick?: (id: id) => void;
}
declare const Rectangle: React.FC<IRectangleProps>;
export default Rectangle;
