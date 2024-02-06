import React, { PropsWithChildren } from 'react';
export interface IZoneProps extends PropsWithChildren {
    isAcceptableDrop: boolean;
    isAcceptableNew: boolean;
}
export declare const Zone: React.FC<IZoneProps>;
