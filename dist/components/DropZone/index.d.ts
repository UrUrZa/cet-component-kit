import React from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { IHaveChildren } from '../types';
export interface IDropZoneProps extends IHaveChildren {
    zoneId: UniqueIdentifier;
    onAcceptDrop: (id: UniqueIdentifier) => void;
    isAcceptableDrop: boolean;
}
export declare const DropZone: React.FC<IDropZoneProps>;
