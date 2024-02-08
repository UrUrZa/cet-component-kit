/// <reference types="react" />
export declare type CommonElementProps = Pick<React.HTMLAttributes<HTMLElement>, "className" | "style" | "children">;
export interface IHaveChildren {
    children?: React.ReactNode;
}
export declare enum ModalMode {
    closed = "closed",
    fillHeight = "fillHeight",
    halfHeight = "halfHeight"
}
export declare enum SlideoutDirection {
    left = "left",
    right = "right",
    top = "top",
    bottom = "bottom"
}
