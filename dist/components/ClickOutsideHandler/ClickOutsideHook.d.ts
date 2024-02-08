import React from 'react';
export declare const useClickOutside: (onClickOutside?: (() => void) | undefined) => {
    ref: React.RefObject<HTMLDivElement>;
    handleInternalClick: () => void;
};
