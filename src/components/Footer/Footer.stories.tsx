import { Meta } from '@storybook/react';
import { Footer, IFooterProps } from '.';
import { ButtonType, IconNavButton } from '../IconNavButton';
import React from 'react';

const meta: Meta<IFooterProps> = {
    title: 'Component/Footer',
    component: Footer,
};

export default meta;

const componentDefaultProps: IFooterProps = {
}

export const FooterStory = () => {
    const componentProps: IFooterProps = {
        ...componentDefaultProps,
    }
    return (
            <Footer {...componentProps}>
                <IconNavButton isActive  onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>,
            </Footer>
    );
}
export const ActiveSubjectListFooterStory = () => {
    const componentProps: IFooterProps = {
        ...componentDefaultProps,
    }
    return (
        <Footer {...componentProps}>
            <IconNavButton onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>
            <IconNavButton isActive onClick={()=>console.log("subjectList")} type={ButtonType.avatar}/>
        </Footer>
    );
}
export const ActiveScheduleFooterStory = () => {
    const componentProps: IFooterProps = {
        ...componentDefaultProps,
    }
    return (
        <Footer {...componentProps}>
            <IconNavButton onClick={()=>console.log("subjectList")} type={ButtonType.avatar}/>
            <IconNavButton isActive onClick={()=>console.log("schedule")} type={ButtonType.schedule} title="Schedule"/>
            <IconNavButton onClick={()=>console.log("subjectList")} type={ButtonType.notifications} title="Notifications"/>
        </Footer>
    );
}
