import React, { PropsWithChildren } from 'react';
export interface IRectangleProps extends PropsWithChildren {
    cardId: string;
    title: string;
    color: string;
    onClear?: () => void;
    onDrillDownClick?: () => void;
}
export declare const Rectangle: React.FC<IRectangleProps>;
