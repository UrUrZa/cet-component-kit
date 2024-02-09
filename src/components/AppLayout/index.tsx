import styled from "@emotion/styled";
import { footerHeight } from "../Footer";
import { headerHeight } from "../Header";
import SwipeBox from "../SwipeBox";

export const AppLayoutFull = styled(SwipeBox)`
    position: absolute;
    top: ${headerHeight}px;
    left: 0;
    height: calc(100% - ${headerHeight + footerHeight}px);
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;        
`;

