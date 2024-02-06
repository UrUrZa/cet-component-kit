import React from 'react';
import { IRule, id } from '../../types/domain';
import { Box, Button, Typography } from '@mui/material';
import { getRuleFormatted } from '../../utilities/getRuleFormatted';
import StarsIcon from '@mui/icons-material/Stars';
import styled from '@emotion/styled';
import { ISubjectView } from '../../types/teacherDomainView';

const ItemContainer = styled(Button)`
  display: grid;
  align-content: space-evenly;
  position: relative;
  border-radius: 85px;
  border: 5px solid #5eaf8f;
  background-color: #82f3c2;
  box-shadow: 2px 2px 2px #5eaf8f;
  max-height: 30rem;
  color: #525652;
  text-transform: none;
  aspect-ratio: 2/4;
  &:hover {
    background-color: #3da779;
    box-shadow: 2px 2px 2px #82f3c2;
    border: 5px solid #82f3c2;
    cursor: pointer;
  }
`;
const CentredBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12rem;
  text-align: center;
  `;

  const StyledStarsIcon = styled(StarsIcon)`
    color: gold ;
    height: 3rem;
    width: 3rem;
  `;

export interface IAbonementOfferSellableItemProps {
  id: id
  limitLessons: number;
  limitTime: number;
  price: number;
  subjects: ISubjectView[]
  isUnlimited: boolean
  isMostPopular?: boolean;
  onClick?: () => void;
}

export const AbonementOfferSellableItem: React.FC<IAbonementOfferSellableItemProps> = ({
  id,
  limitLessons,
  limitTime,
  price,
  subjects,
  isUnlimited,
  isMostPopular,
  onClick,
}) => {


  const thisAbonementOfferSubjectsNames: string[] = subjects.map((subject) => subject.name);
  const subjectsFormatted = thisAbonementOfferSubjectsNames.join(', ');

  const thisAbonemntOfferSubjectsRules: IRule[] = subjects.map((subject) => subject.rules).flat();
  const rulesFormatted = getRuleFormatted(thisAbonemntOfferSubjectsRules);


  return (
    <ItemContainer key={id} onClick={onClick}>
      {isMostPopular && 
      <CentredBox>
        <StyledStarsIcon/>
        <Typography variant="h5"  gutterBottom>
        Most Popular
        </Typography>      
      </CentredBox>}
      <CentredBox>
        <StyledTypography variant="h6" gutterBottom>
          {subjectsFormatted}
        </StyledTypography>
        <StyledTypography variant="subtitle2" gutterBottom>
          {rulesFormatted}
        </StyledTypography>
        {isUnlimited ?
          <Typography variant="h6" gutterBottom>
            {`unlimited`}
          </Typography> :
          <Typography variant="h6" gutterBottom>
            {`up to ${limitLessons} lessons`}
          </Typography>
        }
        <Typography variant="h6" >
          ${price.toFixed(2)}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`${limitTime} months`}
        </Typography>
      </CentredBox>
    </ItemContainer>
  );
};
