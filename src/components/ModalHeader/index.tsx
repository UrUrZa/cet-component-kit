import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { IconButton } from "../IconButton";
import { TitleStyledTypography } from "../LessonHeader";
import { ButtonType } from "../IconNavButton";

const StyledBox = styled(Box)`
display: flex;
justify-content: left;
align-items: center;
margin: 0 0 0 10px;
`;

export interface IModalHeaderProps {
  title: string;
  onClick: () => void;
}

export const ModalHeader: React.FC <IModalHeaderProps> = ({title, onClick }) => {

  return (

    <StyledBox>
      <IconButton type={ButtonType.arrowBack} onClick= {onClick}/>
      <TitleStyledTypography onClick={onClick}> {title} </TitleStyledTypography>
    </StyledBox>
  );
}
