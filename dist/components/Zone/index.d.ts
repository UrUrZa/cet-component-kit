import React from 'react';
import { IHaveChildren } from '../types';
export interface IZoneProps extends IHaveChildren {
    isAcceptableDrop: boolean;
    isAcceptableNew: boolean;
}
declare const Zone: React.FC<IZoneProps>;
export default Zone;
