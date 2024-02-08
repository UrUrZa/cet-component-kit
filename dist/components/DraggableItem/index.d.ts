import { UniqueIdentifier } from '@dnd-kit/core';
import { IHaveChildren } from '../types';
import React from 'react';
export interface IDraggableItemProps extends IHaveChildren {
    cardId: string;
    onDragStart: (id: UniqueIdentifier) => void;
    onDragEnd: (id: UniqueIdentifier) => void;
}
export declare const DraggableItem: React.FC<IDraggableItemProps>;
