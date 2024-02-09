import React, { ReactNode } from "react";
import { SlideoutDirection } from "../types";
export interface IDrawerProps {
    children: ReactNode;
    comandChilden: ReactNode;
    slideoutDirection: SlideoutDirection;
    isOpen: boolean;
}
declare const Drawer: React.FC<IDrawerProps>;
export default Drawer;
