import React from 'react';
import { useDroppable, UniqueIdentifier, useDndMonitor } from '@dnd-kit/core';
import { IHaveChildren } from '../types';

export interface IDropZoneProps extends IHaveChildren {
  zoneId: UniqueIdentifier;
  onAcceptDrop: (id: UniqueIdentifier) => void;
  isAcceptableDrop: boolean;
}

export const DropZone: React.FC<IDropZoneProps> = ({
  zoneId,
  onAcceptDrop,
  isAcceptableDrop,
  children
}) => {
  const { setNodeRef } = useDroppable({
    id: zoneId,
    disabled: !isAcceptableDrop,
  });

  useDndMonitor({
    onDragEnd(event) {
      if ( event?.over?.id === zoneId) {
        onAcceptDrop(event.active.id);
      }
    },
  });


  return (
    <div ref={setNodeRef}>
      {children}
    </div>
  );
};
