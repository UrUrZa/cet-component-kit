import { Meta } from '@storybook/react';
import AbonementOfferSellableItem, { IAbonementOfferSellableItemProps } from '.';
import { dummySubjectViews } from '../dummies';
import React from 'react';

const meta: Meta<IAbonementOfferSellableItemProps> = {
  title: 'Component/AbonementOfferSellableItem',
  component: AbonementOfferSellableItem,
};

export default meta;

const componentDefaultProps: IAbonementOfferSellableItemProps = {
  isMostPopular: true,
  subjects: [dummySubjectViews[3]],
  isUnlimited: false,
  limitLessons: 10,
  limitTime: 30,
  price: 100,
  id: '1',
  onClick: () => console.log('onClick'),
  
}

export const AbonementOfferSellableItemLimetedOfferStory = () => {
  const componentProps: IAbonementOfferSellableItemProps = {
    ...componentDefaultProps,
  }
  return (
    <>
      <AbonementOfferSellableItem {...componentProps}/>
    </>
  );
}

export const AbonementOfferSellableItemUnimetedOfferStory = () => {
  const componentProps: IAbonementOfferSellableItemProps = {
    ...componentDefaultProps,
    subjects: [dummySubjectViews[0]],
    isUnlimited: true,
  }
  return (
    <>
      <AbonementOfferSellableItem {...componentProps}/>
    </>
  );
}

export const AbonementOfferSellableItemNotPopularStory = () => {
  const componentProps: IAbonementOfferSellableItemProps = {
    ...componentDefaultProps,
    subjects: [dummySubjectViews[0], dummySubjectViews[1]],
    isUnlimited: true,
    isMostPopular: false,
  }
  return (
    <>
      <AbonementOfferSellableItem {...componentProps}/>
    </>
  );
}
