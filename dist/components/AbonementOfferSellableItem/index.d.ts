import React from 'react';
import { id } from '../../types/domain';
import { ISubjectView } from '../../types/teacherDomainView';
export interface IAbonementOfferSellableItemProps {
    id: id;
    limitLessons: number;
    limitTime: number;
    price: number;
    subjects: ISubjectView[];
    isUnlimited: boolean;
    isMostPopular?: boolean;
    onClick?: () => void;
}
export declare const AbonementOfferSellableItem: React.FC<IAbonementOfferSellableItemProps>;
