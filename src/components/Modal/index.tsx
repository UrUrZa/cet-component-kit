import React, { PropsWithChildren, ReactNode } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CommonElementProps, ModalMode } from '../../../common/component/types';

export interface IModalProps extends CommonElementProps {}

export interface IModalProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  comandChilden: ReactNode [];
  modalMode: ModalMode;
  onChangeModalMode: (modalMode: ModalMode) => void;
  resizable?: boolean;
}

const Root = styled('div')`
  height: 100%;
`;

const ModalHeader = styled(Box)`
  background-color: #c4c4ca;
  display:flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 46px;
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
`;

const DragControl = styled(Box)`
  top: 8px;
  width: 30px;
  position: absolute;
  right: calc(50% - 15px);
`;

const Puller = styled(DragControl)`
  height: 6px;
  background-color: #3e3b3b;
  border-radius: 3;
`;

export const Modal: React.FC<IModalProps> = ({ children, comandChilden, resizable=false, modalMode, onChangeModalMode, ...rest}) => {
  const isFillHeight = modalMode === ModalMode.fillHeight;
  const isOpen = modalMode !== ModalMode.closed;
  const canBeBigger = modalMode === ModalMode.halfHeight && resizable;
  const canBeSmaller = modalMode === ModalMode.fillHeight && resizable;

  const drawerClose = () => {
    if (canBeSmaller) {
      onChangeModalMode( ModalMode.halfHeight);
    } else if (!canBeSmaller) {
      onChangeModalMode( ModalMode.closed);
    }
  };

  const drawerOpen = () => {
    if (!isOpen) {
      onChangeModalMode(ModalMode.halfHeight);
    } else if (canBeBigger) {
      onChangeModalMode(ModalMode.fillHeight);
    }
  };

  const drowerHight = isFillHeight ? 100 : 50;

  return (
    <Root>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `${drowerHight}%`,
              overflow: 'visible',
            },
            '.MuiDrawer-root > .MuiBackdrop-root': {
              backgroundColor: 'transparent',
            },
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={isOpen}
          onClose={drawerClose}
          onOpen={drawerOpen}
          swipeAreaWidth={0}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox>
            <ModalHeader>
              {comandChilden}
            </ModalHeader> 
            {(canBeSmaller)?
              <DragControl
                onClick={() => onChangeModalMode(ModalMode.halfHeight)}
              >
                <ExpandMoreIcon fontSize='large'/>
              </DragControl>:
              <Puller
                onClick={() => onChangeModalMode(ModalMode.fillHeight)}
              />
            }
              {children}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    );
}
