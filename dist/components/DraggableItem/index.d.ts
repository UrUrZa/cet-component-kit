import React, { PropsWithChildren } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
export interface IDraggableItemProps extends PropsWithChildren {
    cardId: string;
    onDragStart: (id: UniqueIdentifier) => void;
    onDragEnd: (id: UniqueIdentifier) => void;
}
export declare const DraggableItem: React.FC<IDraggableItemProps>;
