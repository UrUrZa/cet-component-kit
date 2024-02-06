import React, { PropsWithChildren } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
export interface IDropZoneProps extends PropsWithChildren {
    zoneId: UniqueIdentifier;
    onAcceptDrop: (id: UniqueIdentifier) => void;
    isAcceptableDrop: boolean;
}
export declare const DropZone: React.FC<IDropZoneProps>;
